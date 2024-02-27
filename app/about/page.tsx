import AboutMain from "@/components/AboutMain"
import AboutHighlits from "@/components/AboutHighlits"
import { memo } from "react"

const page = () => {
  return (
    <main className="flex-1">
      <AboutMain />
      <AboutHighlits />
    </main>
  )
}

export default memo(page)
