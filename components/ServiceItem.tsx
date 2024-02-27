import { ReactNode } from "react"

const ServiceItem = ({children, number,title, desc}:{
  children:ReactNode
  number:number
  title:string,
  desc:string
}) => {
  return (
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-600 text-white relative z-10 title-font font-medium text-sm">{number}</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-teal-100 text-teal-600 rounded-full inline-flex items-center justify-center text-5xl">
          {children}
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{title}</h2>
          <p className="leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
