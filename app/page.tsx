import Features from "@/components/Features"
import Hero from "@/components/Hero"
import HomeAbout from "@/components/HomeAbout"

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

export default page
