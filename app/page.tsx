import Features from "@/components/Features"
import Hero from "@/components/Hero"
import HomeAbout from "@/components/HomeAbout"
import { memo } from "react"

function page() {
  return (
    <div className="flex-1">
      <Hero />
      <HomeAbout />
      <hr />
      <Features />
    </div>
  )
}

export default memo(page)
