import { Blog } from "@models/type";
import Image from "next/image";

  const BlogCard: React.FC<{ blog: Blog }> = ({blog}) => (
    <div className="blog-card w-fit h-fit">
      <Image
        className="object-cover w-fit h-fit rounded-lg"
        alt="customer"
        priority={true}
        src={blog.image} />
      <div className="text w-64 py-5">
        <p className="time text-xs italic">{blog.time}</p>
        <p className="title font-semibold">{blog.title}</p>
      </div>
    </div>
);
  
export default BlogCard