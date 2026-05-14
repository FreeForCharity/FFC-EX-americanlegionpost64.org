import React from 'react'
import type { NewsBlock } from '@/data/news'

interface NewsBodyProps {
  blocks: NewsBlock[]
}

/**
 * Renders an ordered list of NewsBlock items into accessible HTML.
 *
 * Each block type maps to a semantic element (paragraph, h2/h3, ul,
 * blockquote). The component is intentionally simple — all styling
 * comes from the parent's typography context.
 */
const NewsBody: React.FC<NewsBodyProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="text-gray-800 leading-relaxed">
                {block.text}
              </p>
            )
          case 'heading':
            if (block.level === 3) {
              return (
                <h3 key={index} className="text-xl md:text-2xl font-bold text-[#0a2647] mt-6">
                  {block.text}
                </h3>
              )
            }
            return (
              <h2 key={index} className="text-2xl md:text-3xl font-bold text-[#0a2647] mt-8">
                {block.text}
              </h2>
            )
          case 'list':
            return (
              <ul key={index} className="list-disc pl-6 space-y-1 text-gray-800">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )
          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-[#c8a04a] bg-[#f7f3e7] px-5 py-4 rounded-r text-[#0a2647]"
              >
                <p className="italic">“{block.text}”</p>
                {block.attribution ? (
                  <footer className="text-sm not-italic font-semibold mt-2 text-[#b71c1c]">
                    — {block.attribution}
                  </footer>
                ) : null}
              </blockquote>
            )
          default:
            return null
        }
      })}
    </>
  )
}

export default NewsBody
