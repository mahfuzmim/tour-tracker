import logo from "../../public/logo.jpg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <section className="bg-[#2d3439] pt-10 pl-14 pb-20 pr-14 basis-1/3	h-screen	">
        <div className="flex items-center cursor-pointer justify-center">
          <NavLink to="/" className="mr-2">
            <img src={logo} className="w-16	 h-16 w-16"></img>
          </NavLink>
          <NavLink to="/">
            <p className="text-2xl font-Manrope font-bold text-greywhite">
              TourTracker
            </p>
          </NavLink>
        </div>
      </section>
    </>
  );
}
