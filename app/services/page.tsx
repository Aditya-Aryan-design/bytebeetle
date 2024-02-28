import Service from "@/components/Service"
import { ServiceMain, Desc1,Desc2 } from "@/data/ServiceData"
import Link from "next/link";
import { memo } from "react";

const { title, button } = ServiceMain;

const page = () => {
  return (
    <main className="px-[2vmin] sm:px:[5vmin]">
      <div className="text-center space-y-4 ">
        <p className="sectionHeading">{title}</p>
        <p className="text-lg text-gray-800">
          <Desc1 />
        </p>

      </div>
      <Service />
      <div className="space-y-4">
        <Desc2 />
        <div className="flex justify-center md:justify-end">
          <Link href={button.link}><button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">{button.name}</button></Link>
        </div>
      </div>
    </main>
  )
}

export default memo(page)
