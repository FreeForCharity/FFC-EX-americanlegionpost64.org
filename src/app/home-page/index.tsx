import React from 'react'
import Post64Hero from '@/components/home-page/Hero/post64-hero'
import {
  MissionPreview,
  LeadershipPreview,
  DonateCTA,
} from '@/components/home-page/post64-sections'
import LatestNews from '@/components/home-page/latest-news'

const HomePage = () => {
  return (
    <main>
      <Post64Hero />
      <MissionPreview />
      <LeadershipPreview />
      <LatestNews />
      <DonateCTA />
    </main>
  )
}

export default HomePage
