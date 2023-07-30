import axios from "axios";

// React
import { useState } from "react";
import { useParams } from "react-router-dom";

// CSS
import styles from "../../styles/css/pages/Product/ProductDetail.module.css";

// Components
import ProductDetailInformation from "../../components/Product/ProductDetailInformation";
import ProductDetailPriceCard from "../../components/Card/Detail/ProductDetailPriceCard";
import { useEffect } from "react";

const ProductDetail = () => {
  const [productDetailData, setProductDetailData] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const API_URL = `http://ec2-3-39-122-241.ap-northeast-2.compute.amazonaws.com/products/${id}`
    const ProductIdServerData = async() => {
      try{
        const res = await axios.get(API_URL)
        // console.log(data)
         setProductDetailData(res.data)
      }catch(error){
        console.log(error)
      }
    }

    
    ProductIdServerData()
  }, []);
  
  return (
    <div className={styles["product-detail__view-wrap"]}>
      <div className={styles["header"]}>헤더임</div>

      <div className={styles["product-detail__view-container"]}>
        <div className={styles["product-detail__view--information"]}>
          <ProductDetailInformation productDetailData={productDetailData} />
        </div>

        <div className={styles["product-detail__view--PriceCard"]}>
          <ProductDetailPriceCard productDetailData={productDetailData} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
