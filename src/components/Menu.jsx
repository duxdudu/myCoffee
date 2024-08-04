import MenuCard from "../layOut/MenuCard";
import { menuCard } from "../utils/Data";


function Menu() {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24nmb-8">Our menu</h1>
      <div className="flex flex-wrap pb-8 gap-8 justify-center sm:w-">
        {menuCard.map((data)=>(<MenuCard scrImg={data.src} title={data.name} key={data.Id} />))}
        
      </div>
    </div>
  );
}

export default Menu;
