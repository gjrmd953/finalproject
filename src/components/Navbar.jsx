import { useEffect, useRef, useState } from "react";
import { FaCartArrowDown, FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import CartImage from "../assets/cart.png";
import Container from "./Container";


const Navbar = () => {
  let [cateShow, setCateShow] = useState(false)
  let [accShow, setAccShow] = useState(false)
  let [cartshow, setCartShow] = useState(false)
  let cateRef = useRef()
  let accRef = useRef()
  let cartRef = useRef()

useEffect(() => {
  document.addEventListener("click", (e) => {
    if (cateRef.current.contains(e.target) == true) {
      setCateShow(!cateShow);
    } else {
      setCateShow(false);
    }
    if (accRef.current.contains(e.target)) {
      setAccShow(!accShow);
    } else {
      setAccShow(false);
    }
    if (cartRef.current.contains(e.target) == true) {
      setCartShow(!cartshow)
    }else{
      setCartShow(false)
    }
    
  });
}, [cateShow, accShow, cartshow]);


  return (
    <nav className={`bg-[#F5F5F3] py-2 lg:mt-0`}>
      <Container>
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-1/4 relative">
            <div className="flex items-center gap-2" ref={cateRef}>
              <div className="">
                <HiOutlineBars2 />
              </div>
              <h3 className="font-dm text-[14px] text-[#262626] font-normal hidden lg:block">
                Shop by Category
              </h3>
            </div>
            {cateShow && (
              <div className="lg:bg-[#262626] bg-[red] py-3 absolute left-0 top-[43px] w-full z-[10]">
                <ul>
                  <li className="py-2 relative text-[rgba(255,255,255,0.7)] pl-[20px] hover:text-[#fff] hover:pl-[30px] duration-300 ease-in-out font-dm text-[16px] border-b-[1px] border-[rgba(255,255,255,0.7)]">
                    <div className="flex justify-between">
                      <span>Accessories</span>
                      <div className="">
                        <IoMdArrowDropright />
                      </div>
                    </div>
                    <ul className='absolute top-[10px] left-[100%] bg-[red] w-[300px] opacity-0 group-hover:opacity-100'>
                      <li>hello</li>
                      <li>hello</li>
                      <li>hello</li>
                    </ul>

                  </li>
                  <li className="py-2 text-[rgba(255,255,255,0.7)] pl-[20px] hover:text-[#fff] hover:pl-[30px] duration-300 ease-in-out font-dm text-[16px] border-b-[1px] border-[rgba(255,255,255,0.7)]">
                    <div className="flex justify-between">
                      <span>Furniture</span>
                      <div className="">
                        <IoMdArrowDropright />
                      </div>
                    </div>
                  </li>
                  <li className="py-2 text-[rgba(255,255,255,0.7)] pl-[20px] hover:text-[#fff] hover:pl-[30px] duration-300 ease-in-out font-dm text-[16px] border-b-[1px] border-[rgba(255,255,255,0.7)]">
                    <div className="flex justify-between">
                      <span>Electronics</span>
                      <div className="">
                        <IoMdArrowDropright />
                      </div>
                    </div>
                  </li>
                  <li className="py-2 text-[rgba(255,255,255,0.7)] pl-[20px] hover:text-[#fff] hover:pl-[30px] duration-300 ease-in-out font-dm text-[16px] border-b-[1px] border-[rgba(255,255,255,0.7)]">
                    <div className="flex justify-between">
                      <span>Clothes</span>
                      <div className="">
                        <IoMdArrowDropright />
                      </div>
                    </div>
                  </li>
                  <li className="py-2 text-[rgba(255,255,255,0.7)] pl-[20px] hover:text-[#fff] hover:pl-[30px] duration-300 ease-in-out font-dm text-[16px]">
                    <div className="flex justify-between">
                      <span>Bags</span>
                      <div className="">
                        <IoMdArrowDropright />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-full lg:w-2/4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white py-3 pl-4 rounded-full"
              />
              <div className="absolute right-6 top-[50%] translate-y-[-50%] z-[10]">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 relative">
            <div className="flex justify-end gap-x-3">
              <div className="flex" ref={accRef}>
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <div className="text-[#222]" ref={cartRef}>
                <FaCartArrowDown />
              </div>
            </div>
            {accShow && (
              <div className="w-[200px] absolute left-[30%] top-[41px] z-[10]">
                <ul>
                  <li className="py-3 px-4 bg-[#262626] text-white font-dm text-[16px] text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out">
                    My Account
                  </li>
                  <li className="py-3 px-4 bg-[#262626] text-white font-dm text-[16px] text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out">
                    Log Out
                  </li>
                </ul>
              </div>
            )}
            {cartshow && (
              <div className="absolute left-0 top-[40px] w-full z-[10] bg-[#fff]">
                <div className="flex items-center justify-around bg-[#F5F5F3]">
                  <div className="">
                    <img src={CartImage} alt="" />
                  </div>
                  <div className="">
                    <h4>Black Smart Watch</h4>
                    <h5>$44.00</h5>
                  </div>
                  <div className="">
                    <RxCross2 />
                  </div>
                </div>
                <div className="">
                  <h3 className="my-2">
                    <span>Subtotal:</span> $44.00
                  </h3>
                  <ul className="flex justify-between mt-2">
                    <li className="py-3 w-[150px] bg-[#262626] text-white font-dm text-[16px] text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out">
                      View Cart
                    </li>
                    <li className="py-3 w-[150px] bg-[#262626] text-white font-dm text-[16px] text-center hover:text-[#222] hover:bg-[#fff] duration-300 ease-in-out">
                      Checkout
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
export default Navbar