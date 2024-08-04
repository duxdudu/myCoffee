import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
/* eslint-disable react/prop-types */
function ReviewCard({ src, title }) {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className=" flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img src={src} alt="immg" className=" rounded-full" />
        </div>
        <div className="mx-3 ">
          <h2 className="font-semibold text-lg">{title}</h2>
          <div className="flex ">
            <BsStarFill className=" text-brightColor" />
            <BsStarFill className=" text-brightColor" />
            <BsStarFill className=" text-brightColor" />
            <BsStarFill className=" text-brightColor" />
            <BsStarHalf className=" text-brightColor" />
          </div>
        </div>
        <span className="ml-16">
          <FaQuoteRight className="text-backgroundColor size={42}" />
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        reprehenderit deserunt ullam non cupiditate ex, nemo, fugit aspernatur,
        repudiandae earum reiciendis fugiat nulla voluptate. Facere nulla
        cupiditate quaerat voluptas consectetur. Magni distinctio quisquam harum
        in nobis animi quod ullam voluptatibus porro. Quidem illo quisquam aut
        corrupti, aliquid exercitationem quam ea sapiente dignissimos veniam
        perspiciatis dolore quos recusandae dolorum. Consectetur, quos?
      </p>
    </div>
  );
}

export default ReviewCard;
