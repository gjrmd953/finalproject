
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { default as Cup } from "../assets/product.png";


const Page = ({ allData }) => {
 

  return (
    <>
      {allData.map(() => (
        <div className="w-[31%] pb-[50px] ">
          <div className="relative group">
            <div className="bg-[#F9F9F9]">
              <img src={Cup} alt="" />
            </div>
            <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
              <ul>
                <li className="flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]">
                  Add to Wish List <FaHeart />
                </li>
                <li className="flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end py-[20px] gap-[15px]">
                  Compare <IoGitCompare />
                </li>
                <li className="flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pb-[25px] gap-[15px]">
                  Add to Cart <FaShoppingCart />
                </li>
              </ul>
            </div>
            <div className="absolute top-[20px] left-[20px]">
              <a
                className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white"
                href="#"
              >
                New
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between pt-[24px] pb-[15px]">
              <h4 className="text-[18px] font-dm font-bold text-[#262626]">
                Basic Crew Neck Tee
              </h4>
              <p className="text-[14px] font-dm font-normal text-[#767676]">
                $44.00
              </p>
            </div>
            <h1 className="text-[16px] font-dm font-normal text-[#767676]">
              Black
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};
export default Page