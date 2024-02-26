import AboutHighlitsItem from "./AboutHighlitsItem"
import AboutFeatureData from "@/data/AboutFeatureData"

const {title,item} = AboutFeatureData



const AboutHighlits = () => {
  return (
    <div>
      <p className="sectionHeading">{title}</p>
      <div className="flex flex-wrap">
        {
          item.map((e,i)=>{
            return <AboutHighlitsItem key={i} title={e.itemTitle} desc={e.itemDesc} img={e.itemImg} />
          })
        }
      </div>
    </div>
  )
}

export default AboutHighlits
