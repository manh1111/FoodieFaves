import { Testimonial } from "@models/type";
import Image from "next/image";


const SectionTestimonial: React.FC<{feedbacks:Testimonial[]}> = ({ feedbacks}) => {
   
  return (
    <div className="section section-testimonial flex-col">
        <p className="header_content pb-0 md:pb-10">What Out Customers Say</p>

        <div className="menu flex flex-row justify-between w-full">
            {feedbacks.map((feedback, index) => (
        <div className="w-1/4 bg-[--color-gray] rounded-lg py-4 px-4" key={index}>
        <div className="text">
            <p className="feedback text-[--color-red] font-bold">{feedback.feedback}</p>
            <p className="feedback_full text-xs text-sm py-5">{feedback.comment}</p>
        </div>
        <div className="feedback flex flex-row mt-5">
            <Image 
                className="object-cover w-fit h-fit rounded-full"
                alt="customer"
                priority={true}
                src={feedback.customerImage}
            />
            <div className="feedback_info flex flex-col justify-evenly pl-3">
            <p className="text-xs font-bold">{feedback.name}</p>
            <p className="text-xs">{feedback.location}</p>
            </div>
        </div>
        </div>
            ))}
        </div>
    </div>
  );
};

export default SectionTestimonial;