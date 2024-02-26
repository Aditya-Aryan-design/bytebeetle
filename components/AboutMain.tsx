import AboutMainData from "@/data/AboutMainData"
import Link from "next/link";
import Image from "next/image";

const {title,desc,button,img} = AboutMainData;


const AboutMain = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

    <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="" src={img} height={600} width={600}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</h1>
      <p className="mb-8 leading-relaxed">{desc}</p>
      <div className="flex justify-center">

        <Link href={button.link}><button className="inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">{button.name}</button></Link>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutMain
