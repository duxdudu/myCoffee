import Button from "../layOut/Button";

function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1  className=" font-semibold text-5xl text-center lg:text-start leading-tight">start your with a streaming </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="flex flex-row gap-6">
          <Button title="ADD TO CARD" />
          <Button title="MORE MENU" />
        </div>
      </div>

      <div className=" relative">
        <img src="./assets/img1.png" alt="" className=" size-96"/>
        <div className=" absolute bg-white px-8 py-2 top-6 right-0 rounded-full shadow-[0_20px_50px_rgba(8,rgba(8,_112,_184,_0.7)]">
            <h2 className=" font-semibold">20k</h2>
        </div>
        <div className=" absolute bg-white px-8 py-2 bottom-4 -left-9 rounded-full">
            <h2 className=" font-semibold" >Coppuccino</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
