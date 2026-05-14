import React from 'react'
import Post64Hero from '@/components/home-page/Hero/post64-hero'
import {
  MissionPreview,
  LeadershipPreview,
  DonateCTA,
  ComingSoon,
} from '@/components/home-page/post64-sections'

const HomePage = () => {
  return (
    <main>
      <Post64Hero />
      <MissionPreview />
      <LeadershipPreview />
      <DonateCTA />
      <ComingSoon />
    </main>
  )
}

export default HomePage
