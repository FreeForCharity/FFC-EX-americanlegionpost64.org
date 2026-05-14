import React from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  intro?: React.ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, intro }) => (
  <header className="relative bg-[#0a2647] text-white pt-[160px] pb-16 md:pt-[180px] md:pb-20 overflow-hidden">
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3 bg-[#c8a04a]" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-3 h-2 bg-[#b71c1c]" />
    <div className="relative mx-auto max-w-[1100px] px-6">
      {eyebrow ? (
        <p
          className="uppercase text-[#c8a04a] tracking-[0.25em] text-xs font-bold mb-3"
          id="aria-font"
        >
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
      {intro ? (
        <div className="text-lg text-gray-200 mt-4 max-w-3xl leading-relaxed">{intro}</div>
      ) : null}
    </div>
  </header>
)

interface PageBodyProps {
  children: React.ReactNode
  className?: string
}

export const PageBody: React.FC<PageBodyProps> = ({ children, className = '' }) => (
  <main className={`bg-white py-12 md:py-16 ${className}`}>
    <div className="mx-auto max-w-[900px] px-6 prose-content space-y-6 text-gray-800 leading-relaxed">
      {children}
    </div>
  </main>
)
