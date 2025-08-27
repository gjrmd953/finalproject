import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
  let ProductId = useParams()
  let [SingleData, setSingleData] = useState({})
 
  let getSingleData = ()=>{
    axios.get(`https://dummyjson.com/products/${ProductId.id}`).then((response)=>{
      setSingleData(response.data)
    })
  }

  useEffect(()=>{
    getSingleData()
  },[])

  console.log(SingleData);
  
  
  return (
    <div>ProductDetails</div>
  )
}
export default ProductDetails