import AboutHighlitsItem from "./AboutHighlitsItem"
import AboutFeatureData from "@/data/AboutFeatureData"
import { memo } from "react"

const {title,item} = AboutFeatureData



const AboutHighlits = () => {
  return (
    <div>
      <p className="sectionHeading">{title}</p>
      <div className="flex flex-wrap">
        {
          item.map((e,i)=>{
            return <AboutHighlitsItem key={i} title={e.itemTitle} desc={e.itemDesc}>
              {e.itemIcon}
            </AboutHighlitsItem>
          })
        }
      </div>
    </div>
  )
}

export default memo(AboutHighlits)
