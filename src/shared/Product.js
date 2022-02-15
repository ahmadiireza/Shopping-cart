import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// 1 ghieb az mahsol ro misazim va az on dar map products ha estefadeh konim
// function zir ro vaseh kotah kardan esm mahsol import mikonim
// context
import { CartContext } from '../context/CartContextProvider';
// vaseh check kardan va kam va ziyad kardan sabad kharid ast

import { shorten,isInCart,quantityCount } from '../helpers/functions';
// icon
import  tarshIcon from "../assets/icons/trash.svg";
import styles from "./Product.module.css";

const Product = ({productData}) => {
    // dar () productData ro az props destructior mikonim
    // dar einja ba estefadeh az useContext amaliyat hayeh mojood dar cartcontext estefadeh mikonim va meghdar state va dispatch ro haminja destructior mikonim
   const {state,dispatch}= useContext(CartContext);
//    daron state itemhyeh sabad kharid ast

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='product' style={{width:"250px" }}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div className={styles.buttonContainer}>
                {quantityCount(state,productData.id)>1 && <button  className={styles.smallButton} onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
                {quantityCount(state,productData.id)===1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"REMOVE_ITEMS",payload:productData})}><img src={tarshIcon} alt='trashIcon' style={{width:"20px"}}/></button>}
                 {quantityCount(state,productData.id)>0 && <span className={styles.counter}>{quantityCount(state,productData.id)}</span>}
                {isInCart(state,productData.id)?
            <button className={styles.smallButton} onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>
                :
                <button onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>Add To Cart</button>
                }

                </div>
            </div>
        </div>
    );
};

export default Product;