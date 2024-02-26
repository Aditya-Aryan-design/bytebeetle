import Service from "@/components/Service"
import { ServiceMain } from "@/data/ServiceData"
import Link from "next/link";

const {title,desc,button} = ServiceMain;

const page = () => {
  return (
    <main>
        <div className="text-center space-y-4 px-20">
            <p className="sectionHeading">{title}</p>
            <p className="text-lg text-gray-800">
              {desc}
            </p>
            <div className="flex justify-center md:justify-end">
                <Link href={button.link}><button className="inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">{button.name}</button></Link>
            </div>
        </div>
      <Service />
    </main>
  )
}

export default page
