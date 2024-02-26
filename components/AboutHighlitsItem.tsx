import Image from "next/image"

const AboutHighlitsItem = ({title,img,desc}:{
  title:string,
  img:string,
  desc:string
}) => {
  return (
    <div className="p-4 lg:w-1/2 md:w-full">
    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col shadow-md">
      <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-600 flex-shrink-0">
        <Image src={img} height={100} width={100} alt=""/>
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
        <p className="leading-relaxed text-base">{desc}</p>

      </div>
    </div>
  </div>
  )
}

export default AboutHighlitsItem
