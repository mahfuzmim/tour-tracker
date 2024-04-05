import PageNav from "./PageNav";
import productpic from "./../../public/productpic.jpg";

const Product = () => {
  return (
    <>
      <section
        className="bg-[#2d3439] h-screen px-20 py-8 
        backdrop-brightness-50 z-20 block 
        overflow-hidden  h-screen -mt-10"
      >
        <PageNav />

        <div className="flex mt-28 space-x-7">
          <div className="grow basis-1 ms-8 self-center">
            <img src={productpic} width={"100%"} />
          </div>
          <div className="grow basis-1 mr-12">
            <p className="text-[2.5rem] text-greywhite font-Manrope font-semibold">
              About Tour Tracker
            </p>
            <p className="text-greywhite font-Manrope w-[91%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
