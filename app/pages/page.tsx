'use client'

import BlogCard from "@components/BlogCard";
import { Blog } from "@models/type";
import {blogsImage, homePart4 } from "@public/assets/images";


const Pages: React.FC = () => { 

     const blogs: Blog[] = [
    {
      title: "How to prepare a delicious gluten free sushi",
      time: "January 10, 2023",
      image: blogsImage.blog1
    },{
      title: "Exclusive baking lessons from the pastry king",
      time: "January 5, 2023",
      image: blogsImage.blog2
    },{
      title: "How to prepare the perfect fries in an air fryer",
      time: "January 5, 2023",
      image: blogsImage.blog3
    },{
      title: "How to prepare delicious chicken tenders",
      time: "July 3, 2023",
      image: blogsImage.blog4
    },{
      title: "5 great cooking gadgets you can buy to save time",
      time: "September 3, 2023",
      image: blogsImage.blog5
    },{
      title: "The secret tips & tricks to prepare a perfect burger",
      time: "September 3, 2023",
      image: blogsImage.blog6
    },{
      title: "7 delicious cheesecake recipes you can prepare",
      time: "September 3, 2023",
      image: blogsImage.blog7
    },{
      title: "5 great pizza restaurants you should visit this city",
      time: "September 3, 2023",
      image: blogsImage.blog8
    },{
      title: "5 great cooking gadgets you can buy to save time",
      time: "September 3, 2023",
      image: blogsImage.blog9
    },{
      title: "How to prepare a delicious gluten free sushi",
      time: "September 3, 2023",
      image: blogsImage.blog10
    },{
      title: "Top 20 simple and quick desserts for kids",
      time: "September 3, 2023",
      image: blogsImage.blog11
    },{
      title: "Top 20 simple and quick desserts for kids",
      time: "September 3, 2023",
      image: blogsImage.blog12
    }
  ]
    
    return (
        <div className="body flex flex-col">
            <div className="section flex-col">
                <div className="text flex flex-col items-center justify-center ">
                    <p className="font_playfair not_italic font-normal text-2xl md:text-7xl ">Our Blog & Articles</p>
                    <p className="text-center font-normal w-2/3 md:py-5">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <div className="grid grid-cols-4 grid-flow-row gap-5">
                  {blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} width={"w-full"} />
                  ))}
                </div>
            </div>
        </div>
    )
}

export default Pages