import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import CallButton from "@/components/CallButton";
import { memo } from "react";




export const metadata: Metadata = {
  title: "Affordable Web Development Solutions in Pune, Mumbai, and Across India| BlazeSites",
  description: "BlazeSites offers professional and affordable web development services tailored to businesses in Pune, Mumbai, and throughout India. From custom website design to e-commerce solutions and responsive development, we specialize in delivering high-quality websites that drive results without breaking the bank. Contact us today to elevate your online presence and stand out in the digital marketplace.",
  keywords:[
    "Cheap website developer near me", "Website developer in Pune", "Website developer contact number", "Website developer in Mumbai", "Website development in India", "Web developer in India", "Top 10 website development in India", "How much should I pay a web developer", "How much do Indian web developers cost"
  ]
};

export default memo(function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden overflow-y-auto select-none flex flex-col">
        <Header />
        <CallButton />
          {children}

          <Footer />
      </body>
    </html>
  );
})
