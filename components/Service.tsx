import ServiceItem from "./ServiceItem"
import { ServicesData } from "@/data/ServiceData"




const Service = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    {
      ServicesData.map((e,i)=>{
        return <ServiceItem key={i} number={i+1} title={e.title} img={e.img} desc={e.desc}/>
      })
    }
    
  </div>
</section>
  )
}

export default Service