import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Container from "../components/Container"

import productImg from "../assets/product.png"
import { FaMinus, FaPlus, FaStar } from "react-icons/fa"
import ProductRating from "../components/ProductRating"
import { useDispatch } from "react-redux"
import { cartTotal } from "../slice/cartSlice"
import { FaPersonCirclePlus } from "react-icons/fa6"

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id);


  const [SingleData, setSingleData] = useState({})

  const getSingleData = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setSingleData(response.data)
    })
  }

  useEffect(() => {
    getSingleData()
  }, [])

  const handleAdd = () => {
    console.log("ok");
    dispatch(cartTotal(SingleData))

  }
  const [joshim, setJoshim] = useState(false)
  const [joshimtwo, setJoshimTwo] = useState(false)

  return (
    <div>
      <Container>

        <div className="w-2/12 py-[100px] ml-[40px]">
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

        <div className="mb-[134px]">
          <div className="flex flex-wrap justify-between gap-5">
            {
              SingleData?.images?.map((img) => (
                <img className="w-[48%]" src={img} alt="" />
              ))
            }
          </div>
          <div className="mt-[49px]">
            <h4
              className="font-dm font-bold text-[39px] text-primary">
              Products
            </h4>
            <div className="flex items-center space-x-[25px] pt-[15px] pb-[21px]">
              <div className="flex gap-x-1">
                {/* <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> */}
                <ProductRating rating={SingleData.rating} />
              </div>
              <div className="flex space-x-5">
                <p className="text-secondary text-[14px] font-dm font-bold">Rating({SingleData.rating})</p>
                <p className="text-secondary text-[14px] font-dm font-bold">{SingleData?.reviews?.length} Review</p>
              </div>
            </div>
            <div className="flex space-x-[22px] items-center">
              <p className="font-dm text-secondary text-[16px]"><del>$88.00</del></p>
              <p className="font-dm font-bold text-primary text-[20px]">${SingleData?.price}</p>
            </div>

          </div>
          <hr className="w-[780px] text-[#D8D8D8] mt-[24px]" />

          <div className="flex space-x-[53px] items-center mt-[30px]">
            <p className="font-dm font-bold text-[16px] text-primary">COLOR:</p>
            <div className="flex space-x-[15px] items-center">
              <div className="h-[20px] w-[20px] rounded-full bg-[#FF8686]"></div>
              <div className="h-[28px] w-[28px] rounded-full bg-[#FF8686]"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-[#7ED321]"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-[#F1F1F1]"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-[#979797]"></div>
            </div>
          </div>
          <div className="flex space-x-[53px] items-center my-[30px]">
            <p className="font-dm font-bold text-[16px] text-primary">SIZE:</p>

            <div className="">
              <select className="border-2 w-[130px] border-[#D9D9D9] px-[21px] py-1 text-secondary">
                <option value="S">S</option>
                <option value="S">M</option>
                <option value="S">L</option>
                <option value="S">XL</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-[53px] items-center my-[30px]">
            <p className="font-dm font-bold text-[16px] text-primary">QUANTITY:</p>

            <div className="flex items-center border-2 border-[#D9D9D9] px-[21px] py-1 space-x-[35px] text-secondary">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </div>
          <hr className="w-[780px] text-[#D8D8D8] mt-[24px]" />

          <div className="flex space-x-[53px] items-center my-[30px]">
            <p className="font-dm font-bold text-[16px] text-primary">STATUS:</p>

            <div>
              <p className="font-dm text-[16px] text-secondary">{SingleData?.availabilityStatus}</p>
            </div>
          </div>
          <hr className="w-[780px] text-[#D8D8D8] mt-[24px]" />

          <div className="space-x-[20px] mt-[30px]">
            <button className="py-[16px] px-[40px] font-bold text-primary hover:bg-primary hover:text-white duration-300 ease-in-out cursor-pointer font-dm border-2 border-primary">Add to Wish List</button>
            <button
              onClick={handleAdd}
              className="py-[16px] px-[40px] font-bold text-primary hover:bg-primary hover:text-white duration-300 ease-in-out cursor-pointer font-dm border-2 border-primary">
              Add to Cart
            </button>
          </div>
          <hr className="w-[780px] text-[#D8D8D8] mt-[24px]" />

          <div className="w-1/2 mt-[24px]">
            <div onClick={(() => setJoshim(!joshim))} className="flex  justify-between items-center">
              <h5 className="font-dm font-bold text-[16px] text-primary">FEATURES  & DETAILS</h5>
              <p >{joshim ? <FaMinus /> : <FaPlus />}</p>
            </div>
            {joshim &&
              <h2 className="mt-[24px] font-dm text-primary">
                This product is designed with high-quality materials to ensure durability and comfort. It comes in a modern and stylish design that suits everyday use as well as special occasions. Lightweight and easy to carry, the product offers practical functionality without compromising on looks. With multiple color options and sizes available, it is perfect for users of all ages. Easy to maintain and long-lasting, this product provides excellent value for money, making it a must-have for your daily lifestyle.
              </h2>
            }
            <hr className="w-[780px] text-[#D8D8D8] mt-[24px]" />
          </div>

          <div className="w-1/2 mt-[24px]">
            <div onClick={(() => setJoshimTwo(!joshimtwo))} className="flex  justify-between items-center">
              <h5 className="font-dm font-bold text-[16px] text-primary">SHIPPING & RETURNS</h5>
              <p >{joshimtwo ? <FaMinus /> : <FaPlus />}</p>
            </div>
            {joshimtwo &&
              <h2 className="mt-[24px] font-dm text-primary">
                We offer fast and reliable shipping on all orders. Products are usually dispatched within 1–3 business days, and delivery time may vary depending on your location. You will receive a tracking number once your order has been shipped.
                <br />
                <br />
                If you are not completely satisfied with your purchase, you can return the product within 7–14 days of delivery, provided it is unused and in its original packaging. Refunds or exchanges will be processed once we receive the returned item. Please note that shipping charges are non-refundable, and return shipping costs are the responsibility of the customer unless the product is defective or damaged.
              </h2>
            }
            <hr className="w-[780px] text-[#D8D8D8] mt-[24px]" />
          </div>

          <div className="mt-[30px]">
            <h3 className="font-dm font-bold text-[29px] text-primary">Reviews</h3>
            <div className="mt-[10px]">
              <p className="my-[15px] font-dm text-primary text-[16px]">John Ford</p>
              <p className="mt-[14px] mb-[53px] font-dm text-[16px] text-primary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <form action="">
              <h2 className='font-dm font-bold text-[39px] text-primary pb-[42px]'>
                Add a Review
              </h2>
              {/* Name start */}
              <label className='pb-[10px] inline-block font-dm font-bold text-[16px]' htmlFor="">Name</label>

              <input className='w-full py-4 pl-2.5 focus:outline-0 font-dm text-[14px]' type="text" placeholder='Your name here' />

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

              <hr className="border-t-2 border-[#D8D8D8] pt-[16px] pb-[23px]" />
              {/* Message end */}

            </form>
            <button className="">
              <h2 className=' font-dm font-bold text-[14px] text-primary bg-[#D8D8D8] hover:text-white hover:bg-primary py-[16px] px-[70px] '>Post</h2>
            </button>
          </div>

        </div>
      </Container>
    </div>
  )
}
export default ProductDetails