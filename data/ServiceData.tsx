import { BiSolidCustomize, BiSupport } from "react-icons/bi"
import { FaStore } from "react-icons/fa"
import { MdOutlineMobileFriendly } from "react-icons/md"
import { TbSeo } from "react-icons/tb"



export const ServiceMain ={
    title: "Our Services",
    button:{
        name:"Contact",
        link:"/contact"
    }
}

export const Desc1 = ()=>{
    return(
        <>
        At <b>BlazeSites</b>, we offer a comprehensive range of <b>web development</b> services tailored to meet the <b>unique needs of businesses in Pune, Mumbai, and across India</b>. From <b>custom website design</b> to <b>e-commerce solutions</b> and everything in between, we're here to help you build a strong and successful online presence. Explore our services below:
        </>
    )
}

export const Desc2 = ()=>{
    return <>
    Whether you're looking to launch a new website, optimize your existing site, or explore <b>e-commerce opportunities</b>, <b>BlazeSites</b> has the expertise and experience to help you succeed online. Contact us today to discuss your project requirements and see how we can bring your vision to life.
    </>
}

export const ServicesData = [
    {
        title:"Custom Website Development",
        icon:<BiSolidCustomize />,
        desc:"Whether you're a small business or a large enterprise, we specialize in creating custom websites that reflect your brand identity and resonate with your target audience. Our team of experienced developers will work closely with you to understand your goals and deliver a website that meets your specific requirements."
    },{
        title:"E-commerce Solutions",
        icon:<FaStore />,
        desc:"Looking to sell your products or services online? Our e-commerce solutions are designed to help you maximize your online sales potential. From user-friendly product catalogs to secure payment gateways, we'll create an e-commerce platform that drives conversions and boosts your bottom line."
    },{
        title:"Responsive Design",
        icon:<MdOutlineMobileFriendly />,
        desc:"With the increasing use of mobile devices, having a responsive website is more important than ever. Our responsive design services ensure that your website looks great and functions seamlessly across all devices, providing an optimal viewing experience for your visitors."
    },{
        title:"Search Engine Optimization (SEO)",
        icon:<TbSeo />,
        desc:"Improve your website's visibility and attract more organic traffic with our search engine optimization services. From keyword research to on-page optimization, we'll help you climb the search engine rankings and reach more potential customers."
    },{
        title:"Website Maintenance and Support",
        icon:<BiSupport />,
        desc:"Our commitment to our clients doesn't end with the launch of their website. We provide ongoing maintenance and support services to ensure that your website remains secure, up-to-date, and performing at its best."
    }
]