import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Image from '../../common/Img/Image';

// Compoennts
import NavListData from '../Card/NavListArr';
import NavList from '../Card/NavList';
import usePathMove from '../../hooks/usePathMove';
import SearchInput from './SearchInput';

//css 
import styles from '../../styles/css/pages/NavBar.module.css';

//icon
import { RxTextAlignJustify } from "react-icons/rx";
import { BiUser ,BiBasket } from "react-icons/bi";
import { GoSearch} from "react-icons/go";



//햄버거 버튼 메뉴 리스트
const NavListArr = () => { 
  const pathMove = usePathMove();
  const [currentTab , setTab] = useState(0);
  const selectNavHandler = (index) => {
    setTab(index);  
  };
  
  //api호출 
  // const getProducts = async (myCategories,myTitle) => {
  //   const res = await axios.get('http://ec2-15-164-206-172.ap-northeast-2.compute.amazonaws.com/products');
  //   return res.data.filter(item=>item.categories == myCategories);
  //   console.log(data);
  // }
 
  return ( 
     <div className={styles.nav_list}>
       {NavListData.map((props , index) => {
        return(
          <div key={index} className={styles.nav_list_item} onClick={() => selectNavHandler(index)}>
             <div to={props.url} className={styles.listItem_name}
              onClick={()=>pathMove(props.url, {"title": props.title}, true)}>{props.title}
              </div>
            <Image src={props.img} className='nav_list_img'/>
          </div>
        )
       })}
        </div>
          
  )
}

//검색창


//네비바 햄버거 버튼 옆 메뉴 
const NavBar = () => {
  const [list, setList] =useState(false);
  const [currentNav , setNav] = useState(0);
 

  const NavHandler = (index) => {
    setNav(index);
  }



  return (
    <div className={styles.nav}>
      <nav className={styles.nav_menu}>
      <div className={`${styles.nav_menu_pro} ${styles.nav_menu1}`} onClick = {() => {setList(!list)}} >
         <RxTextAlignJustify className={styles.nav_menu_icon}/>
         {list && <NavListArr/>}
      </div>
      {NavList.map((tap , index) => {
        return(
          <div key={index} className={styles.nav_menu_pro} onClick={() => NavHandler(index)} >
            {tap.name}
          </div>
        )
       })}
      </nav>
    <div className={styles.navbar_box}>
      <SearchInput/>
      {/* <div className={styles.navbar_box_input}>
        <Input ref={} type="text" placeholder="우리 댕냥 알러지 없는 사료" className="searchInput" />
         <button><GoSearch className={styles.icon1}/></button>
      </div> */}
      <div>
        <Link to="/member/modify" className={styles.navbar_box_icon}>
          <BiUser/>
        </Link>
      </div>
      <div>
        <Link to="/member/order" className={styles.navbar_box_icon}>
          <BiBasket/> 
        </Link>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
