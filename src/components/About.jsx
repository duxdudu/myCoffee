// import Button from "../layOut/Button";

function About() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        About us
      </h1>
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="w-full lg:w-2/4">
          <img
            src="./assets/makeCoffee.jpeg"
            alt="the magic"
            className=" size-[400px] rounded-lg"
          />
        </div>
        <div className="w-full lg:w-2/4  p-4 spacey">
          <h2 className=" font-semibold text-3xl">
            What Make Our Coffee Special
          </h2>
          <p className="my-3" >
            The first thing that comes to mind when thinking about specialty
            coffee is its advanced quality. The flavors hidden in a cup of
            coffee are rich and crisp, and this comes not just from the quality
            of the specialty coffee beans, but from the work ethic and
            dedication put into it by the farmer.
          </p>
          <p className="my-3">
            Coffee has always been a part of people’s life since time
            immemorial. Whether you nurse a cup of java in the morning or sip a
            coffee latte frappe in the evening, it can make a world of
            difference. Not only does the caffeine make you alive and kicking,
            but it also has various health benefits
          </p>
          <button className=" border-brightColor px-8 py-1 rounded-full hover:bg-gradient-to-r from-backgroundColor to-brightColor text-white font-semibold border hover:text-white my-2 ">Learn More</button>

        </div>
  
      </div>
    </div>
  );
}

export default About;
