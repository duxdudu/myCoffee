import { FaShoppingCart } from "react-icons/fa";

/* eslint-disable react/prop-types */
function MenuCard({ title, value, scrImg }) {
  return (
    
      <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg sm:w-60 ">
        <div>
          <img className="rounded-xl " src={scrImg} alt="ig" />
        </div>
        <div className=" p-2 mt-5">
          <div className="flex flex-row justify-between">
            <h3 className=" font-semibold text-xl">{title}</h3>
            <h3 className=" font-semibold text-xl">{value}</h3>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <div className="flex gap-5">
              <button className=" px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg">
                Hot
              </button>
              <button className=" px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg">
                Cold
              </button>
            </div>
            <span className="flex items-center bg-backgroundColor px-3 py-2 rounded-full cursor-pointer">
              <FaShoppingCart size={25} />
            </span>
          </div>
        </div>
      </div>
    
  );
}

export default MenuCard;
