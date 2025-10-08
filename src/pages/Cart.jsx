import React from 'react'
import Container from '../components/Container'
import cartImg from "../assets/cart img.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartQuantity } from '../slice/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.cartDetails.cartItems)
  const handleIncrement = (id) => {
    console.log(id, "id");
    dispatch(cartQuantity({ id: id, type: "increment" }))
  }
  const handleDecrement = (id) => {
    console.log(id, "id");
    dispatch(cartQuantity({ id: id, type: "decrement" }))
  }


  return (
    <div>
      <Container>
        <div className="w-2/12 py-[100px]">
          <div className="">
            <h2 className="font-dm font-bold pb-[10px] text-[#262626] text-[49px]">
              Cart
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
                    Cart
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

        <div className="pb-[140px]">
          <div className="flex justify-between bg-[#F5F5F3] font-dm py-[34px] px-[20px]">
            <div className='w-[25%]'>
              <p className='font-bold text-[16px] text-primary'>Product</p>
            </div>
            <div className='w-[25%]'>
              <p className='font-bold text-[16px] text-primary'>Price</p>
            </div>
            <div className='w-[25%]'>
              <p className='font-bold text-[16px] text-primary'>Quantity</p>
            </div>
            <div className='w-[25%]'>
              <p className='font-bold text-[16px] text-primary'>Total</p>
            </div>
          </div>

          {
            data.length > 0 ? data?.map((item, index) => (
              <div className="flex justify-between items-center font-dm py-[34px] px-[20px]">
                <div className='w-[25%]'>
                  <div className='font-bold text-[16px] text-primary flex items-center space-x-[20px]'>
                    <img className='w-[100px]' src={item.thumbnail} alt="" />
                    <p>{item.title}</p>
                  </div>
                </div>
                <div className='w-[25%]'>
                  <p className='font-bold font-dm text-[16px] text-primary'>${item.price}</p>
                </div>
                <div className='w-[25%]'>
                  <div className="flex items-center border-2 border-[#D9D9D9] px-[21px] py-1 space-x-[35px] text-secondary w-fit">
                    <p className='cursor-pointer' onClick={() => handleDecrement(index)}>-</p>
                    <p>{item.cartQuantity}</p>
                    <p className='cursor-pointer' onClick={() => handleIncrement(index)}>+</p>
                  </div>
                </div>
                <div className='w-[25%]'>
                  <p className='font-bold text-[16px] text-primary'>
                    {
                      item.price * item.cartQuantity
                    }
                  </p>
                </div>
              </div>
            ))
              : <h5 className='border-b-2 border-x-2 border-[#EAEAEA] pl-4 py-2 font-dm font-bold text-[16px] text-[#262626]'>!on items......</h5>
          }
        </div>
      </Container>
    </div>
  )
}

export default Cart