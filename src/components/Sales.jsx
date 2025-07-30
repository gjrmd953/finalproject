import One from "../assets/one.png"
import Three from "../assets/three.png"
import Two from "../assets/two.png"
import Container from "./Container"

const Sales = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[49%]">
            <img src={One} alt="" />
          </div>
          <div className="w-[49%]">
            <div className="">
              <img src={Two} alt="" />
            </div>
            <div className="mt-8">
              <img src={Three} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Sales