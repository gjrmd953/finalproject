
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { default as Cup } from "../assets/product.png";
import { useContext, useEffect, useState } from "react";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";


const Page = ({ allData, cateFilter }) => {
  let { loading } = useContext(ApiData)
  let [cateMain, setCateMain] = useState([])
  let [ShowAll, setShowAll] = useState(true)

  useEffect(()=>{
       let cateAll = cateFilter.slice(0, 5)
       setCateMain(cateAll)
  },[cateFilter])


  let handleShow =()=>{
    setCateMain(cateFilter)
    setShowAll(false)
    
  }

  let handleLess =()=>{
    setCateMain(cateFilter.slice(0, 5))
    setShowAll(true)
  }
  


  if (loading) {
    return (
      <>
        <h2>loading......</h2>
      </>
    )

  }


  return (
    <>
      {cateFilter.length > 0 ? 
     <div className="">
      <div className="flex flex-wrap justify-between">
      {
         cateMain.map((item) => (
        <div className="w-[31%] pb-[50px] ">
          <div className="relative group">
            <Link to={`/product/${item.id}`}>
              <div className="bg-[#F9F9F9]">
                <img src={item.thumbnail} alt="" />
              </div>
            </Link>
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
                {item.title}
              </h4>
              <p className="text-[14px] font-dm font-normal text-[#767676]">
                ${item.price}
              </p>
            </div>
            <h1 className="text-[16px] font-dm font-normal text-[#767676]">
              Black
            </h1>
          </div>
        </div>
      )) 
      }
     </div>
     {ShowAll ? cateFilter.length > 5 && <div className="" onClick={handleShow}>
      <h2 className="pb-3 cursor-pointer">Show All</h2>
     </div> :

      <div className="" onClick={handleLess}>
      <h2 className="pb-3  cursor-pointer">Show Less</h2>
     </div> }
     
     
     </div>
      : <div className="flex flex-wrap justify-between">
        {allData.map((item) => (
        <div className="w-[31%] pb-[50px] ">
          <div className="relative group">
            <Link to={`/product/${item.id}`}>
              <div className="bg-[#F9F9F9]">
                <img src={item.thumbnail} alt="" />
              </div>
            </Link>
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
                {item.title}
              </h4>
              <p className="text-[14px] font-dm font-normal text-[#767676]">
                ${item.price}
              </p>
            </div>
            <h1 className="text-[16px] font-dm font-normal text-[#767676]">
              Black
            </h1>
          </div>
        </div>
      ))}
        </div>}
    </>
  );
};
export default Page