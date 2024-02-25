import dynamic from 'next/dynamic'
import Link from 'next/link'


const BeetleCanvas = dynamic(() => import('@/components/BeetleCanvas'), { ssr: false })

const Hero = () => {
    return (

        <section className='text-zinc-500 text-center md:text-start py-5 md:py-8 px-3 md:px-10 flex flex-col md:flex-row-reverse items-center justify-around space-y-3'>

            <div className="w-[40vmin] md:w-[50vmin] h-[40vmin] md:h-[50vmin] m-auto">

                <BeetleCanvas />
            </div>
            <div className='md:w-1/2'>
                <h1 className='sectionHeading color my-4'>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi explicabo asperiores suscipit. Consectetur optio dolorem sunt ipsa neque doloremque eos atque ex recusandae harum, explicabo et quidem cupiditate deleniti.</p>

                <Link href="/contact">
                <button className='btn my-5'>
                    Contact
                </button>
            </Link>
            </div>
            
        </section>
    )
}

export default Hero
