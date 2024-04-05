import bg from "../../public/bg-image.jpg";
import PageNav from "./PageNav";

const Homepage = () => {
  return (
    <>
      <section
        style={{
          background: `linear-gradient(rgba(36, 42, 46, 0.7), 
            rgba(36, 42, 46, 0.7)), url(${bg})`,

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-screen px-20 py-8 
        backdrop-brightness-50 z-20 block 
        overflow-hidden bg-gradient-to-r from-blue-500 h-screen -mt-10 "
      >
        <PageNav />
        <div
          className="flex 
        flex-col	
        justify-center	
        items-center	
        h-[85%] 
        text-center	
        text-greywhite
        font-Manrope
        font-bold	
        	leading-7	"
        >
          <h1 className="text-5xl 	">You travel the world.</h1>
          <h1 className="text-5xl 	">
            TourTracker keeps track of your adventures.
          </h1>
          <div className="py-6 ">
            <h2 className="text-[#aaa] text-xl	">
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful experiences, and show your
              friends how you have wandered the world.
            </h2>
          </div>
          <div className="text-center">
            <button
              className="text-black uppercase	
           bg-[#00c46a] py-2 px-8 rounded	
           text-lg	 font-semibold   font-Manrope 	mt-6
"
            >
              Start Tracking Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
