'use client'

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breakfast, Clock, Desserts, Drinks, Location, Mail, MainDishes, Phone, ReceiptTax, ShoppingCart } from "@public/assets/icons/icons";
import { images, homePart2, homePart3, homePart4, customer } from "@public/assets/images";
import SectionAbout from "@components/SectionAbout";
import { AboutSectionItem, Blog, Event, InfoItem, MenuIcon, Testimonial } from "@models/type";
import SectionTestimonial from "@components/SectionTestimonial";
import BlogCard from "@components/BlogCard";


const Home: React.FC = () => {

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
  
const sectionInfo:AboutSectionItem = {
  header: "We provide healthy food for your family.",
  description: "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate. At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
  content: "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
  btnText: "More About Us",
  link: "/contact",
  image: images.home1 
};

   const featuresInfo: InfoItem[] = [
  {
    name: "Clock",
    info: "Delivery within 30 minutes",
    icon: <Clock width="18" height="18"/>
  },
  {
    name: "ReceiptTax",
    info: "Best Offer & Prices",
    icon: <ReceiptTax width="18" height="18"/>
  },
  {
    name: "ShoppingCart",
    info: "Online Services Available",
    icon: <ShoppingCart width="18" height="18"/>
  }
];
  
  const menuIcons: MenuIcon[] = [
    { 
      name: "Brealfast",
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
      icon: <Breakfast width="24" height="24" />
    },
    { 
      name: "Main Dishes",
      desc: "Delight your taste buds with our exquisite selection of main dishes, carefully crafted to satisfy your cravings and leave you wanting more.",
      icon: <MainDishes width="24" height="24" />
    },
    { 
      name: "Drinks",
      desc: "Quench your thirst with our refreshing assortment of drinks, ranging from energizing beverages to indulgent cocktails, meticulously prepared to enhance your dining experience.",
      icon: <Drinks width="24" height="24" />
    },
    { 
      name: "Desserts",
      desc: "Indulge in our heavenly desserts, each masterpiece meticulously crafted to captivate your senses and leave a lasting impression.",
      icon: <Desserts width="24" height="24" />
    }
  ];
 
  const eventsItem: Event[] = [
  { 
    name: "Caterings",
    desc: "In the new era of technology we look in the future with certainty for life.",
    image: homePart2.image1 
  },
  { 
    name: "Events",
    desc: "Join us for a night of celebration and excitement! Our events are filled with joy, laughter, and unforgettable moments.",
    image: homePart2.image2
  },
  { 
    name: "Weddings",
    desc: "Celebrate your special day with us! Our team will ensure that every detail is perfect, from the venue to the decorations, creating memories that will last a lifetime.",
    image: homePart2.image3 
  },
  { 
    name: "Events",
    desc: "Experience something extraordinary at our events! From live performances to interactive activities, there's something for everyone to enjoy.",
    image: homePart2.image4 
  }
  ];
  
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

  const blogs: Blog[] = [
    {
      title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      time: "January 3, 2023",
      desc: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
      image: homePart4.image1
    },
    {
      title: "How to prepare the perfect french fries in an air fryer",
      time: "January 10, 2023",
      image: homePart4.image2
    },
    {
      title: "How to prepare delicious chicken tenders",
      time: "January 5, 2023",
      image: homePart4.image3
    },
     {
      title: "7 delicious cheesecake recipes you can prepare",
      time: "July 3, 2023",
      image: homePart4.image4
    },
    {
      title: "5 great pizza restaurants you should visit this city",
      time: "September 3, 2023",
      image: homePart4.image5
    },
  ]
    
  const MenuCard: React.FC<{ menuIcon:MenuIcon }> = ({ menuIcon }) => (
    <div className="card flex w-1/5 border-[#DBDFD0] border-2 rounded-lg">
      <div className="flex flex-col justify-between items-center py-3 px-3">
        <div className="rounded-full w-16 h-16 flex mx-1 justify-center items-center bg-[#4D592B]/[.12]">
          {menuIcon.icon}
        </div>
        <p className="card-name text-[#2C2F24] py-3 font-semibold">{menuIcon.name}</p>
        <p className="card-desc text-[#414536] text-xs text-center">{menuIcon.desc}</p>
        <Link href={"/menu"} className="text-[--color-red] pt-3 text-xs">
          Explore Menu
        </Link>
      </div>
    </div>
  );

   const EventCard: React.FC<{ event:Event }> = ({ event }) => (
    <div className="w-1/5 h-fit">
       <Image
         className="object-contain relative h-fit w-fit"
         alt="event"
         priority={true}
         src={event.image}
       />
       <p className="text-[#2C2F24] py-3 font-semibold">{event.name}</p>
       <p className="text-[#414536] text-xs text-start">{event.desc}</p>
    </div>
  );


  return (
    <div className="body flex flex-col">
      <div className="slogan flex relative">
        <Image
          className="object-contain relative h-fit w-fit"
          alt="Background"
          priority={true}
          src={images.bg}
        />
        <div className="text absolute text-center top-2/4 inset-x-1/2 -translate-x-1/2 -translate-y-3/4 w-full md:w-1/3">
          <p className="font_playfair not_italic font-normal text-2xl md:text-7xl md:pb-5 ">Best food for your taste</p>
          <p className="pb-0 md:pb-10">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <div className="action flex gap-10 justify-center">
            <Link href="/booking" className="red_btn">Book A Table</Link>
            <Link href="/menu" className="outline_btn">Explore Menu</Link>
          </div>  
        </div>
      </div>

      <div className="section section-menu flex-col">
        <p className="header_content pb-0 md:pb-10">Browse Our Menu</p>

        <div className="menu flex flex-row justify-between w-full">
          {menuIcons.map((menuIcon, index) => (
            <MenuCard key={index} menuIcon={menuIcon} />
          ))}
        </div>
      </div>     
  
      <SectionAbout  sectionInfo={sectionInfo} contactInfo={contactInfo} hasButton={true} />

      <div className="section section-services flex-col">
        <div className="title w-full">
          <p className="header_content w-1/2 pb-4 md:w-1/3 md:pb-8">We also offer unique services for your events</p>
        </div>
        <div className="evens">
            <div className="menu flex flex-row justify-between w-full">
              {eventsItem.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
        </div>
      </div>
    
      <div className="section section-content bg-[--color-gray]">
        <div className="image flex flex-row w-full">
          <Image
            className="object-contain h-[430px] w-fit pr-2"
            alt="event"
            priority={true}
            src={homePart3.image1}
          />
          <div className="w-1/2">
            <Image
              className="object-contain h-[250px] my-8 pr-16"
              alt="event"
              priority={true}
              src={homePart3.image2}
            />
            <Image
              className="object-contain h-[180px] pr-16"
              alt="event"
              priority={true}
              src={homePart3.image3}
            />
          </div>

        </div>

        <div className="info flex justify-center w-full h-full">
           <div className="title w-1/2">
            <p className="header_content pb-1 md:pb-2">Fastest Food Delivery in City</p>
            <p className="font-semibold text-xs pb-6">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.</p>
            <div className="features">
                {featuresInfo.map((item, index) => (
                  <div key={index} className={`${item.name} box-content w-full text-black py-2`}>
                    <div className={"border_icon bg-[--color-red]"}>
                      {item.icon}
                    </div>
                    <p className="text-black font-medium">{item.info}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <SectionTestimonial feedbacks={feedbackCustomers}/>
      
      <div className="section section-blog flex-col bg-[--color-gray]">
        <div className="flex flex-row w-full justify-between pb-0 md:pb-10">
          <div>
            <span className="header_content">Our Blog & Articles</span>
          </div>
          <Link href={"/pages"} className="red_btn">Read All Articles</Link>
        </div>

        <div className="blog flex flex-col md:flex-row">
          <div className="w-1/2">
            <div className="blog-card w-full pr-10">
                <Image 
                      className="object-cover w-fit h-fit rounded-lg"
                      alt="customer"
                      priority={true}
                      src={blogs[0].image}
                />
          </div>
            <div className="text w-11/12 py-10 px-5 scroll-mx-0">
              <p className="time text-xs italic">{blogs[0].time}</p>
              <p className="title font-semibold py-6">{blogs[0].title}</p>
              <p className="description  text-xs">{blogs[0].desc}</p>
            </div>
          </div>
          <div className="w-1/2 grid grid-rows-2 grid-flow-col gap-3">
            {blogs.map((blog, index) => (
              index > 0 && <BlogCard key={index} blog={blog} />
              ))}
          </div>
        </div>
              
      </div>
    </div>
  );
};

export default Home;
