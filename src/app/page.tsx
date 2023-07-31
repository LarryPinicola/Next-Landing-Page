"use client"
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Peoplevoice from '@/components/Testimonial'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Peoplevoice/>
      <Pricing/>
    </main>
  )
}
