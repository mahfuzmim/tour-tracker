import logo from "../../public/logo.jpg";
import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer">
          <NavLink to="/">
            <img src={logo} className="w-20 pr-4 "></img>
          </NavLink>
          <NavLink to="/">
            <p className="text-2xl font-Manrope font-bold text-greywhite">
              TourTracker
            </p>
          </NavLink>
        </div>
        <ul
          className="flex 
        items-center 
        text-base 
        font-semibold 
        cursor-pointer 
        gap-16 
        font-Manrope  
        text-greywhite"
        >
          <li>
            <NavLink to="/pricing">PRICING</NavLink>
          </li>
          <li>
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="bg-[#00c46a] py-3.5 px-8 rounded-md	text-black"
            >
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PageNav;
