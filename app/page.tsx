import Features from "@/components/Features"
import Hero from "@/components/Hero"
import HomeAbout from "@/components/HomeAbout"
import { memo } from "react"

function page() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <hr />
      <Features />
    </main>
  )
}

export default memo(page)
