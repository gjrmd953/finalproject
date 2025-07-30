import { useContext } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Clock from "../assets/clock.png";
import Container from "./Container";
import { ApiData } from "./ContextApi";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="h-[64px] w-[64px] bg-[rgba(151,151,151,0.53)] hover:bg-[#979797] hover:text-black cursor-pointer z-10 text-white absolute top-[115px] left-0 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      Next
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div className='h-[64px] w-[64px] bg-[rgba(151,151,151,0.53)] hover:bg-[#979797] hover:text-black cursor-pointer z-10 text-white absolute top-[115px] right-[10px] rounded-full flex justify-center items-center'
      
      onClick={onClick}
    >Prev</div>
  );
}

const NewArrivals = () => {
    let data = useContext(ApiData);
    let newSlider = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
  return (
    <div>
      <Container>
        <h2 className="font-dm text-[40px] text-[#262626] font-bold">
          New Arrivals
        </h2>

        <div>
          <Slider {...newSlider}>
            {data.map((item) => (
              <Link to="/product">
                <div className="!w-[95%]">
                  <div className="relative group">
                    <div className="">
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                      <ul className="pr-4">
                        <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                          <span className="">Add to Wish List</span>{" "}
                          <FaHeart className="" />
                        </li>
                        <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                          <span> Compare</span> <IoGitCompare />
                        </li>
                        <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                          <span> Add to Cart</span> <FaCartPlus />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <h3>{item.title}</h3>
                      <p>{item.brand}</p>
                    </div>
                    <div className="">${item.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
          <div className="py-[50px]">
            <img src={Clock} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default NewArrivals