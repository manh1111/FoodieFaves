'use client'

import { Facebook, Github, Instagram, Twitter } from "@public/assets/icons/icons";
import { footerImages, images } from "@public/assets/images"
import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
  const socialIcons: { icon: JSX.Element; name: string; parentClass: string }[] = [
    { icon: <Twitter width="18" height="18" />, name: "Twitter", parentClass: "twitter-icon pl-1 pt-2" },
    { icon: <Facebook width="18" height="18" />, name: "Facebook", parentClass: "facebook-icon pl-2" },
    { icon: <Instagram width="18" height="18" />, name: "Instagram", parentClass: "instagram-icon pl-0.5" },
    { icon: <Github width="18" height="18" />, name: "Github", parentClass: "github-icon pl-0.5 pt-0.5" }
  ];
  const pageItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Menu" },
    { label: "Pricing" },
    { label: "Blog" },
    { label: "Contact" },
    { label: "Delivery" }
  ];

   const utilityPages = [
    { desc: "Start Here" },
    { desc: "Styleguide" },
    { desc: "Password Protected" },
    { desc: "404 Not Found" },
    { desc: "Licenses" },
    { desc: "Changelog" },
    { desc: "View More" }
  ];

  return (
    <div className="w-full relative z-40 bg-[--color-primary] bottom-0">
      <div className="section padding_content py-8 flex flex-col ">
        <div className="top w-full py-7 flex justify-between">
          <div className="info flex flex-col w-56">
            <div className="logo flex items-center justify-center">
              <Link href="/" className="flex flex-center">
                <Image
                  className="object-contain rounded_image"
                  priority={true}
                  src={images.logo}
                  width={80}
                  height={80}
                  alt="FoodieFaves Logo"
                />
                <p className="font-playfair text-white italic text-2xl flex items-center justify-center">Foodie Faves</p>
              </Link>
            </div>
  
            <p className="footer_text py-5">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
              
            <div className="social flex flex-row">
              {socialIcons.map((social, index) => (
                <div className={`border_icon bg-[--color-red] ${social.parentClass}`} key={index}>
                  {social.icon}
                </div>
              ))}
          </div>
          </div>

          <div className="pages  w-52 flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="footer_text text_white pb-7">Pages</p>
              {pageItems.map((pageItem, index) => (
              <p key={index} className="footer_text py-3">
                {pageItem.label}
              </p>
            ))}
            </div>
            <div className="flex flex-col">
              <p className="footer_text text_white pb-7">Utility Pages</p>
              {utilityPages.map((utilityPage, index) => (
              <p key={index} className="footer_text py-3">
                {utilityPage.desc}
              </p>
            ))}
            </div>
          </div>

          <div className="contact flex flex-col">
            <p className="footer_text text_white pb-10"> Follow Us On Instagram </p>
            <div className="image grid grid-rows-2 grid-flow-col gap-2">
              {footerImages.map((footerImage, index) => (
                <Image className="object-contain"
                  alt="Footer Image"
                  src={footerImage}
                  key={index}
                />
            ))}
            </div>
          </div>
        </div>

        <div className="bottom">
            <p className="footer_text">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer