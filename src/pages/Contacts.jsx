import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import mapImg from "../assets/map.png"

const Contacts = () => {
    return (
        <div>
            <Container>
                <div className="w-2/12 py-[100px]">
                    <div className="">
                        <h2 className="font-dm font-bold pb-[10px] text-[#262626] text-[49px]">
                            Contacts
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
                                        Contacts
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

                <div className="w-1/2">
                    <form action="">
                        <h2 className='font-dm font-bold text-[39px] text-primary pb-[42px]'>Fill up a Form</h2>
                         {/* Name start */}
                        <label className='pb-[10px] inline-block font-dm font-bold text-[16px]' htmlFor="">Name</label>

                        <input className='w-full py-4 pl-2.5 focus:outline-0 font-dm text-[14px]' type="text" placeholder='Your name here'/>

                        <hr className="border-t-2 border-[#D8D8D8] pt-[16px] pb-[23px]" />
                        {/* Name end*/}

                         {/* Email start*/}
                        <label className='w-full inline-block pb-[10px] font-dm font-bold text-[16px]' htmlFor="">Email</label>

                        <input className='w-full inline-block py-4 focus:outline-0 font-dm text-[14px] pl-2.5' type="text" placeholder='Your email here' />

                        <hr className="border-t-2 border-[#D8D8D8] pt-[16px] pb-[23px]" />
                        {/* Email end*/}

                        {/* Message start */}
                        <label className='w-full inline-block font-dm font-bold text-[16px] pb-[28px]' htmlFor="">Message</label>

                        <input className='w-full focus:outline-0 font-dm text-[14px] pl-2.5' type="text" placeholder='Your message here' />

                        <hr className="border-t-2 border-[#D8D8D8] mt-[16px] pb-[23px]" />
                        {/* Message end */}

                    </form>
                    <button className="">
                        <h2 className=' font-dm font-bold text-[14px] text-primary bg-[#D8D8D8] hover:text-white hover:bg-primary py-[16px] px-[70px] '>Post</h2>
                    </button>
                </div>

                <div className="py-[140px]">
                    <div className="">
                        <img src={mapImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contacts