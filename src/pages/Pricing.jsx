import PageNav from "./PageNav";
import DhakaCity from "./../../public/DhakaCity.jpeg";

const Pricing = () => {
  return (
    <>
      <section
        className="bg-[#2d3439] h-screen px-20 py-8 
        backdrop-brightness-50 z-20 block 
        overflow-hidden  h-screen m-8"
      >
        <PageNav />
        <div className="flex mt-28 space-x-7">
          <div className="grow basis-1 ms-8 self-center">
            <div className="self-center">
              <p className="text-[2.5rem] text-greywhite font-Manrope font-semibold	">
                Simple pricing. <br />
                Just $9/month.
              </p>
              <p className="text-greywhite font-Manrope w-[91%]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                vel labore mollitia iusto. Recusandae quos provident, laboriosam
                fugit voluptatem iste.
              </p>
            </div>
          </div>
          <div className="grow basis-1 mr-12">
            <img
              src={DhakaCity}
              width={"70%"}
              height={"120%"}
              alt="Dhaka city"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
