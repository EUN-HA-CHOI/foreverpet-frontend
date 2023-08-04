import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Compoennts
import ProductItem from '../Card/ProductItem';

//css
import styles from '../../styles/css/components/Home/BestItem.module.css';



//메인 홈 - 베스트 아이템 
const BestItem = (props) => {
  const [best, setBest] = useState([]);
  // const {id} = useParams();

  useEffect(() => {
    const url = `http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/products/best`;
    const data = async () => {
      try {
        const res = await axios.get(url);
        const randomBestItem = [];
        while(true){
          if(randomBestItem.length==4){
            break;
          }
          const random = Math.floor(Math.random() * res.data.length);
          if(randomBestItem.filter(item => item.id===random + 1).length ===0){
            randomBestItem.push(res.data[random]);
          }
        }
        // console.log(randomBestItem);
        setBest(randomBestItem);
      }catch(error) {
        console.log(error);
      }
    }
    data();
  },[]);


  return (
    <div className={styles.bestitem}>
      <div className={styles.header_text}>
        <h2>지금 핫한 이 상품 어때요?</h2>
      </div>
      <div className={styles.product}>
        <ProductItem data={best} className='container-4columns'/>
      </div>
    </div>
    
  );
};

export default BestItem;