import AboutHighlitsItem from "./AboutHighlitsItem"
import MainFeatureData from "@/data/MainFeatureData"


const {title, item} = MainFeatureData
const Features = () => {
  return (
    <section>
        <h3 className='sectionHeading'>{title}</h3>

        <div className='flex flex-wrap'>
        {
          item.map((e,i)=>{
            return <AboutHighlitsItem key={i} title={e.itemTitle} desc={e.itemDesc} >
              {e.itemIcon}
            </AboutHighlitsItem>
          })
        }
        </div>
        

      
    </section>
  )
}

export default Features
