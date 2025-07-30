import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Container from "./Container";
import Flex from "./Flex";

const Header = () => {
  let [show, setShow] = useState(false)
  return (
    <>
      <header className={`lg:py-2 ${show ? "mb-0" : "mb-8 lg:mb-0"}`}>
        <Container>
          <Flex className="items-center">
            <div className="w-1/3">
              <div className="pt-2 lg:pt-0">
                  <img src={Logo} alt="" />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <ul
                className={`lg:flex justify-end gap-x-6 mt-2 duration-300 ease-in-out ${
                  show == true ? "bg-green-500 mt-0 w-full" : "mt-[-160px] lg:mt-0"
                }`}
              >
                <li>
                  <Link
                    className="font-dm text-[14px] text-[#767676] font-normal hover:text-[#262626] duration-300 ease-in-out text-capitalize"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-dm text-[14px] text-[#767676] font-normal"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-dm text-[14px] text-[#767676] font-normal"
                    to="/product"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-dm text-[14px] text-[#767676] font-normal"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-dm text-[14px] text-[#767676] font-normal"
                    href="#"
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="lg:hidden absolute top-2 right-2"
              onClick={() => setShow(!show)}
            >
              {show ? <RxCross2 /> : <FaBars />}
            </div>
          </Flex>
        </Container>
      </header>
    </>
  );
}
export default Header