import HeroData,{Desc} from "@/data/HeroData"
import Image from "next/image";
import Link from "next/link";


const {title,img,button} = HeroData;

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-8">
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image height={600} width={720} className="object-cover object-center rounded" alt="BlazeSites main image" src={img}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
      </h1>
      <p className="mb-8 leading-relaxed"><Desc/></p>
      <div className="flex justify-center">

        <Link href={button.link}><button className="inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">{button.name}</button></Link>
    
      </div>
    </div>
  </div>
  
</section>
  )
}

export default Hero
