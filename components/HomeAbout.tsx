import MainAbout,{Desc} from "@/data/MainAbout"
import Image from "next/image";
import Link from "next/link";


const {title, img, button} = MainAbout;

const HomeAbout = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
      </h1>
      <p className="mb-8 leading-relaxed"><Desc /></p>
      <div className="flex justify-center">

        <Link href={button.link}><button className="inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">{button.name}</button></Link>
      
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4">
      <Image className="object-cover object-center rounded" alt="A freelance worker" src={img} height={720} width={600}/>
    </div>
  </div>
</section>
  )
}

export default HomeAbout
