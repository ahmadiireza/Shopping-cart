import React,{useContext} from 'react';
// vaseh estefadeh az dispatch mojod dar cartContext useContext ro import mikonim
// context
import { CartContext } from '../context/CartContextProvider';
// function
// fuction zir vaseh namayesh 2  kalameh aval title ast
import { shorten } from '../helpers/functions';
// icons
import  trashIcon from "../assets/icons/trash.svg";
import styles from "./Cart.module.css";

const Cart = (props) => {
    const {dispatch}=useContext(CartContext);
    // maghdirmoredniyaz ro distructior mikonim
    const {image,title,quantity,price}=props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product'/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} >-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEMS", payload: props.data})} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} >+</button>
            </div>

        </div>
    );
};

export default Cart;