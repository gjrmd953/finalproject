import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footlogo from "../assets/Footlogo.png";
import Container from "./Container";
const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3] lg:py-[55px] py-[30px] ">
        <Container>
          <div className="flex flex-wrap lg:pb-[65px] pb-[20px] ">
            <div className="lg:w-1/8 w-1/3">
              <h3 className="lg:text-[16px] text-[14px] text-[#262626] font-dm font-bold uppercase lg:pb-[16px] pb-[14px]">
                MENU
              </h3>
              <ul>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Home</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal capitalize lg:pb-[6px] pb-[4px]">
                  <a href="">Shop</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal capitalize lg:pb-[6px] pb-[4px]">
                  <a href="">About</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal capitalize lg:pb-[6px] pb-[4px]">
                  <a href="">Contact</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal capitalize ">
                  <a href="">Journal</a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/8 w-1/3">
              <h3 className="lg:text-[16px] text-[14px] text-[#262626] font-dm font-bold uppercase lg:pb-[16px] pb-[14px]">
                SHOP
              </h3>
              <ul>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Category 1</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Category 2</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Category 3</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Category 4</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal capitalize">
                  <a href="">Category 5</a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/8 w-1/3">
              <h3 className="lg:text-[16px] text-[14px] text-[#262626] font-dm font-bold uppercase lg:pb-[16px] pb-[14px]">
                HELP
              </h3>
              <ul>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Terms & Conditions</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Special E-shop</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal lg:pb-[6px] pb-[4px] capitalize">
                  <a href="">Shipping</a>
                </li>
                <li className="lg:text-[14px] text-[12px] text-[#6D6D6D] font-dm font-normal  capitalize">
                  <a href="">Secure Payments</a>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/8 w-1/2 lg:mt-0 mt-[20px] pl-[80px]">
              <h3 className="lg:text-[16px] text-[14px] text-[#262626] font-dm font-bold  lg:pb-[10px] pb-[2px]">
                (052) 611-5711
              </h3>
              <h4 className="lg:text-[16px] text-[14px] text-[#262626] font-dm font-bold  lg:pb-[16px] ">
                company@domain.com
              </h4>
            </div>
            <div className="lg:w-2/8 w-1/2 lg:mt-0 mt-[20px] lg:text-start text-right">
              <img src={Footlogo} className=" lg:block inline-block" alt="" />
            </div>
          </div>
          <div className="lg:flex justify-between items-center ">
            <div className="flex lg:gap-x-[26px] gap-x-[50px] lg:justify-start justify-center lg:mb-0 mb-[16px]">
              <div className="">
                <FaFacebookF className="text-primary" />
              </div>
              <div className="">
                <FaLinkedin className="text-primary" />
              </div>
              <div className="">
                <FaInstagram className="text-primary" />
              </div>
            </div>
            <div className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal text-center">
              2025 Orebi Minimal eCommerce Figma Template by Adveits
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Footer;
