import { AboutSectionItem, InfoItem } from "@models/type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const SectionAbout: React.FC<{ sectionInfo:AboutSectionItem, contactInfo:InfoItem[], hasButton:boolean }>= ({ sectionInfo, contactInfo, hasButton }) => {
    const [showContactInfo, setShowContactInfo] = useState(false);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    
    const ContactInfoComponent: React.FC<{ contactInfo: InfoItem[], position: { x: number, y: number } }> = ({ contactInfo, position }) => (
      <div className="contact-info  py-4 px-4 bg-[--color-primary] w-fit h-fit rounded-lg" style={{ position: 'absolute', top: position.y, left: position.x }}>
        <p className="title py-5 pl-4 text-start text-white text-xl">Come and visit us</p>
        <div className="info box-content flex flex-col flex-wrap w-fit">
          {contactInfo.map((item, index) => (
            <div key={index} className={`${item.name} box-content w-full pl-5 py-2`}>
              {item.icon}
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
      );
  return (
    <div className="section section-about md:flex-row bg-[--color-gray]">
      <div className="flex relative" onMouseMove={(e) => setHoverPosition({ x: e.clientX, y: e.clientY })}>
        <div
          className="flex-start image"
          onMouseEnter={() => setShowContactInfo(true)}
          onMouseLeave={() => setShowContactInfo(false)}
        >
          <Image
            className="object-cover relative rounded-lg"
            alt="Background"
            priority={true}
            src={sectionInfo.image}
          />
        </div>
        {showContactInfo && <ContactInfoComponent contactInfo={contactInfo} position={hoverPosition} />}
      </div>

      <div className="text w-full md:w-1/2 flex justify-end">
        <div className="w-full md:w-9/12 h-7/12">
          <>
            <p className="header_content pb-0 md:pb-10">{sectionInfo.header}</p>
            <p className="font-semibold text-xs pb-4">{sectionInfo.description}</p>
            <p className="text-xs">{sectionInfo.content}</p>
          </>
            {hasButton && <Link href={sectionInfo.link} className="outline_btn mt-5 w-fit">{sectionInfo.btnText}</Link>}
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;