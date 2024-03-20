'use client'

import SectionAbout from '@components/SectionAbout';
import { AboutSectionItem, InfoItem, Testimonial } from '@models/type';
import { Drinks, Location, Mail, Phone} from '@public/assets/icons/icons';
import { customer, images } from '@public/assets/images';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import SectionTestimonial from '@components/SectionTestimonial';

const About: React.FC = () => {
  const contactInfo: InfoItem[] = [
    {
      name: "phone",
      info: "(+84)974 6374 10",
      icon: <Phone width="18" height="18" className="mr-2 mt-1" />
    },
    {
      name: "email",
      info: "minhanh746347@gmail.com",
      icon: <Mail width="18" height="18" className="mr-2 mt-1" />
    },
    {
      name: "location",
      info: "Thanh Tri, Ha Noi",
      icon: <Location width="18" height="18" className="mr-2" />
    }
  ];

  const features: { icon: JSX.Element; name: string; title: string; desc: string }[] = [
    {
      name: "Menu",
      title: "Multi Cuisine",
      desc: "In the new era of technology we look in the future with certainty life.",
      icon: <Drinks />
    },
    {
      name: "Order",
      title: "Easy To Order",
      desc: "In the new era of technology we look in the future with certainty life.",
      icon: <Drinks />
    },
    {
      name: "Timer",
      title: "Fast Delivery",
      desc: "In the new era of technology we look in the future with certainty life.",
      icon: <Drinks />
    }
  ]

  const facts: { title: string; data: string }[] = [
    {
      title: "Location",
      data: "3"
    }, 
    {
      title: "Founded",
      data: "1995"
    },
    {
      title: "Staff Members",
      data: "65+"
    },
    {
      title: "Satisfied Customers",
      data: "100%"
    },
  ]

  const feedbackCustomers: Testimonial[] = [
    {
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      customerImage: customer.image1,
      feedback: "“The best restaurant”",
      comment: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
    },
    {
      name: "Matt Cannon",
      location: "San Diego, CA",
      customerImage: customer.image2,
      feedback: "“Simply delicious”",
      comment: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
    },
    {
      name: "Andy Smith",
      location: "San Francisco, CA",
      customerImage: customer.image3,
      feedback: "“One of a kind restaurant”",
      comment: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended."
    }   
  ]

  const sectionInfo:AboutSectionItem = {
    header: "We provide healthy food for your family.",
    description: "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate. At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
    content: "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
    btnText: "More About Us",
    link: "/contact",
    image: images.about1
  };
  
  return (
    <div className="body flex flex-col">
      <SectionAbout sectionInfo={sectionInfo} contactInfo={contactInfo} hasButton={false} />   
      
      <div className="section-content flex-col">
        <div className="top relative">
          <Image
            className="object-contain relative h-fit w-fit"
            alt="Background"
            priority={true}
            src={images.about2}
          />
          <div className="text absolute text-white text-center inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5">
            {/* <FontAwesomeIcon icon={faPlay} /> */}
            <p className="font_playfair font-normal text-2xl md:text-7xl md:pb-5 ">Feel the authentic & original taste from us</p>
          </div>
        </div>
        <div className="bottom section_between w-full">
          {
            features.map((feature, index) => (
              <div key={index} className="card flex w-1/4 "> 
                <div className="icon pr-6">{feature.icon}</div>
                <div className="text">
                  <p className="title pb-4 font-semibold">{feature.title}</p>
                  <p className="desc text-xs">{feature.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="section h-full bg-[--color-gray]">
        <div className="infomation flex flex-col justify-between h-full w-1/2 pr-10">
          <div className="text pb-36">
            <p className="font_playfair font-normal text-xl md:text-6xl md:pb-5 ">A little information for our valuable guest</p>
            <p className="text-xs pt-3">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
          </div>

          <div className="facts grid grid-rows-2 grid-flow-col gap-16">
            {facts.map((fact, index) => (
              <div className="fact flex justify-center items-center h-44 w-60 border-2 rounded-lg " key={index}>
                <div className="text">
                  <p className="font_playfair font-semibold text-3xl">{fact.data}</p>
                  <p className="font-normal">{fact.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
            className="object-contain w-1/2"
            alt="event"
            priority={true}
            src={images.about3}
          />
      </div>

      <SectionTestimonial feedbacks={feedbackCustomers}/>
    </div>
  )
}

export default About