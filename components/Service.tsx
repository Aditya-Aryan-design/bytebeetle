import ServiceItem from "./ServiceItem"
import { ServicesData } from "@/data/ServiceData"
import { memo } from "react"




const Service = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="px-5 py-24 mx-auto flex flex-wrap">
    
    {
      ServicesData.map((e,i)=>{
        return <ServiceItem key={i} number={i+1} title={e.title} desc={e.desc}>
          {e.icon}
        </ServiceItem>
      })
    }
    
  </div>
</section>
  )
}

export default memo(Service)
