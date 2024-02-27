import { MdDesignServices,MdMobileFriendly } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaSearchengin,FaExpandArrowsAlt } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";

export default {
    title: "Why Choose Us?",
    item: [
        {
            itemTitle: "Customized Design",
            itemIcon:<MdDesignServices/>,
            itemDesc: " Tailored website designs that reflect your brand identity and resonate with your target audience."
        },{
            itemTitle: "Responsive Development",
            itemIcon:<MdMobileFriendly/>,
            itemDesc: "Websites optimized for seamless viewing and interaction across all devices, including desktops, tablets, and smartphones."
        },{
            itemTitle: "User-friendly Interface",
            itemIcon:<CgWebsite/>,
            itemDesc: "Intuitive navigation and layout to enhance user experience and encourage visitor engagement."
        },{
            itemTitle: "SEO Optimization",
            itemIcon:<FaSearchengin/>,
            itemDesc: "Implementation of search engine optimization best practices to improve visibility and ranking on search engine results pages."
        },{
            itemTitle: "Scalability",
            itemIcon:<FaExpandArrowsAlt/>,
            itemDesc: "Flexible architecture and scalable solutions that grow with your business needs."
        },{
            itemTitle: "Social Media Integration",
            itemIcon:<TiSocialAtCircular/>,
            itemDesc: "Seamless integration with social media platforms to expand your online presence and reach a wider audience."
        },{
            itemTitle: "Dedicated Support",
            itemIcon:<BiSupport/>,
            itemDesc: "Ongoing support and maintenance services to address any issues and ensure smooth operation post-launch."
        }
    ]
}