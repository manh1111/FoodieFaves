import { Blog } from "@models/type";
import Image from "next/image";
import Link from "next/link";

  const BlogCard: React.FC<{ blog: Blog, width: string }> = ({blog, width}) => (
    <div className={`blog-card h-fit ${width}`}>
      <Image
        className={`object-cover ${width} h-fit rounded-lg`}
        alt="customer"
        priority={true}
        src={blog.image} />
      <div className={`text w-fit py-5 ${width}`}>
        <p className="time text-xs italic pb-2">{blog.time}</p>
        <Link href={`/${blog.title}`}>
          <p className="title font-semibold">{blog.title}</p>
        </Link>
      </div>
    </div>
);
  
export default BlogCard