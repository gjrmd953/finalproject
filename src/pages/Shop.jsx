import { useContext, useState } from 'react'
import Container from '../components/Container'


import { FaThList } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { HiSquares2X2 } from 'react-icons/hi2'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { TiMinus } from 'react-icons/ti'
import { Link } from 'react-router-dom'


import { ApiData } from '../components/ContextApi'
import Page from '../components/Page'
import Pagination from '../components/Pagination'


const Shop = () => {
 
  let info = useContext(ApiData)
  
  let [cateShow, setCateShow] = useState(false);
  let [cateShowOne, setCateShowOne] = useState(false);
  let [cateShowTwo, setCateShowTwo] = useState(false);
  let [cateShowThree, setCateShowThree] = useState(false);
  let [cateShowFour, setCateShowFour] = useState(false);
  let [cateShowFive, setCateShowFive] = useState(false);
  let [letShow, setLatShow] = useState(false);
  let [letShowOne, setLatShowOne] = useState(false);
  let [letShowThree, setLatShowThree] = useState(false);
  let [perPage, setPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)

  let lastPage = perPage * currentPage;
  let firstPage = lastPage - perPage
  let allData = info.slice(firstPage, lastPage);

  


  




  return (
    <div>
      <Container>
        <div className="w-2/12 py-[100px]">
          <div className="">
            <h2 className="font-dm font-bold pb-[10px] text-[#262626] text-[49px]">
              Products
            </h2>
          </div>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to={"/"}
                  className="inline-flex items-center text-sm font-medium text-[#767676] hover:text-[#000] dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-[#767676] hover:text-[#000] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Shop
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex">
          <div className="w-3/12 pb-[130px]">
            <div className="">
              <h4
                onClick={() => setCateShow(!cateShow)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]"
              >
                Shop by Category{" "}
                {cateShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h4>
              {cateShow && (
                <ul className="mb-[50px]">
                  <li
                    onClick={() => setCateShowOne(!cateShowOne)}
                    className={`text-[#767676] text-[16px] font-dm font-bold  py-[19px]  border-b-1 border-[#D8D8D8] ${
                      cateShowOne ? "border-none" : ""
                    }`}
                  >
                    <div className="flex justify-between  items-center">
                      Category 1 {cateShowOne ? <TiMinus /> : <FiPlus />}
                    </div>
                  </li>
                  {cateShowOne && (
                    <div className="mb-[10px]">
                      <ul>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 1.1
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 1.2
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 1.3
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 1.4
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 1.5
                        </li>
                      </ul>
                    </div>
                  )}
                  <li
                    onClick={() => setCateShowTwo(!cateShowTwo)}
                    className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${
                      cateShowTwo ? "border-none" : ""
                    }`}
                  >
                    Category 2{cateShowTwo ? <TiMinus /> : <FiPlus />}
                  </li>
                  {cateShowTwo && (
                    <div className="mb-[10px]">
                      <ul>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 2.1
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 2.2
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 2.3
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 2.4
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 2.5
                        </li>
                      </ul>
                    </div>
                  )}
                  <li
                    onClick={() => setCateShowThree(!cateShowThree)}
                    className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${
                      cateShowThree ? "border-none" : ""
                    }`}
                  >
                    Category 3{cateShowThree ? <TiMinus /> : <FiPlus />}
                  </li>
                  {cateShowThree && (
                    <div className="mb-[10px]">
                      <ul>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 3.1
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 3.2
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 3.3
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 3.4
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 3.5
                        </li>
                      </ul>
                    </div>
                  )}
                  <li
                    onClick={() => setCateShowFour(!cateShowFour)}
                    className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${
                      cateShowFour ? "border-none" : ""
                    }`}
                  >
                    Category 4{cateShowFour ? <TiMinus /> : <FiPlus />}
                  </li>
                  {cateShowFour && (
                    <div className="mb-[10px]">
                      <ul>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.1
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.2
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.3
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.4
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.5
                        </li>
                      </ul>
                    </div>
                  )}
                  <li
                    onClick={() => setCateShowFive(!cateShowFive)}
                    className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${
                      cateShowFive ? "border-none" : ""
                    }`}
                  >
                    Category 5{cateShowFive ? <TiMinus /> : <FiPlus />}
                  </li>
                  {cateShowFive && (
                    <div className="mb-[20px]">
                      <ul>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.1
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.2
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.3
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.4
                        </li>
                        <li className="text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm">
                          Category 4.5
                        </li>
                      </ul>
                    </div>
                  )}
                </ul>
              )}
            </div>
            <div className="">
              <h4
                onClick={() => setLatShow(!letShow)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]"
              >
                Shop by Color{" "}
                {letShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h4>
              {letShow && (
                <ul className="mb-[50px]">
                  <li className="text-[#767676] text-[16px] font-dm pb-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#000] rounded-full"></div>
                    Color 1
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#FF8686] rounded-full"></div>
                    Color 2
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#7ED321] rounded-full"></div>
                    Color 3
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#B6B6B6] rounded-full"></div>
                    Color 4
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold">
                    <div className="h-[11px] w-[11px] bg-[#15CBA5] rounded-full"></div>
                    Color 5
                  </li>
                </ul>
              )}
            </div>
            <div className="">
              <h4
                onClick={() => setLatShowOne(!letShowOne)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]"
              >
                Shop by Brand{" "}
                {letShowOne ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h4>
              {letShowOne && (
                <ul className="mb-[50px]">
                  <li className="text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    Brand 1
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    Brand 2
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    Brand 3
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    Brand 4
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    Brand 5
                  </li>
                </ul>
              )}
            </div>
            <div className="">
              <h4
                onClick={() => setLatShowThree(!letShowThree)}
                className="flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]"
              >
                Shop by Price{" "}
                {letShowThree ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </h4>
              {letShowThree && (
                <ul>
                  <li className="text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    $0.00 - $9.99
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    $10.00 - $19.99
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    $20.00 - $29.99
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    $30.00 - $39.99
                  </li>
                  <li className="text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold">
                    $40.00 - $69.99
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-9/12 pl-[40px] ">
            <div className="flex pb-[60px]">
              <div className="flex gap-[12px] ">
                <div className="h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]">
                  <HiSquares2X2 />
                </div>
                <div className="h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]">
                  <FaThList />
                </div>
              </div>
              <div className="flex pl-[280px] pr-[40px]">
                <h4 className="pt-[6px] pr-[10px]">Sort by:</h4>
                <form className="w-[239px]">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </form>
              </div>
              <div className="flex">
                <h4 className="pt-[5px] pr-[10px]">Show:</h4>
                <form className="w-[139px]">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  >
                    <option>36</option>
                    <option>38</option>
                    <option>40</option>
                    <option>42</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <Page allData={allData} />

              <Pagination />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
