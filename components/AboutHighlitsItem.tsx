
import { ReactNode } from "react"
import { memo } from "react"

const AboutHighlitsItem = ({children,title,desc}:{
  children:ReactNode,
  title:string,
  desc:string
}) => {
  return (
    <div className="p-4 lg:w-1/2 md:w-full">
    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col shadow-md">
      <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0 text-3xl -skew-y-12 -skew-x-6" style={{boxShadow:"3px 3px 0 5px #99a"}}>
        {children}
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
        <p className="leading-relaxed text-base">{desc}</p>

      </div>
    </div>
  </div>
  )
}

export default memo(AboutHighlitsItem)
