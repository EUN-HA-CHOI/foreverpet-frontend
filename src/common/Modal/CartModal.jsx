import styles from '../../styles/css/commons/CartModal.module.css'
import { IoMdClose } from "react-icons/io";
import Image from '../Img/Image';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, increase, decrease } from '../../store/Slice/CartSlice';

const CarModal = () => {
  const cartData = useSelector((state) => { return state.cart.cartItem })
  const dispatch = useDispatch()

  return <>
    <div className={styles['container']}>
      <div className={styles['cart-container']}>
        <p>장바구니</p>
        {
          cartData.length == 0 ?
            <div className={styles['empty-modal']}>
              장바구니가 비었습니다.
            </div> :
            cartData.map((d) => {
              const formattedPrice = (d.price * d.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              return (
                <div key={d.id} className={styles['cart-container__insideBg']}>
                  <IoMdClose onClick={() => dispatch(removeCart(d))} className={styles['cart-container__insideBg--icon']}></IoMdClose>
                  <div className={styles['cart-container__insideBg--content']}>
                    <div className={styles['cart-container__insideBg--content__img']}>
                      <Image src={d.img} className="bagModal-img"></Image>
                    </div>
                    <div className={styles['cart-container__insideBg--content__text']}>
                      <p>{d.brand}</p>
                      <h3>{d.productName}</h3>
                    </div>
                  </div>
                  <div className={styles['cart-container__insideBg--bottomContent']}>
                    <div className={styles['cart-container__insideBg--bottomContent__left']}>
                      <button onClick={() => {
                        dispatch(decrease(d))
                      }}>-</button>
                      <span>{d.count}</span>
                      <button onClick={() => {
                        dispatch(increase(d))
                      }}>+</button>
                    </div>
                    <div></div>
                    <span style={{ fontSize: '20px' }}>{formattedPrice}원</span>
                  </div>
                </div>
              )
            })
        }



      </div>
    </div>
  </>
}

export default CarModal