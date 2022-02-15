// dar ein navbar bayad tedad mahsolati ke be sabad kharid ezafeh mishavnd ro dashteh bashim
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
// vase estefadeh az sumItems az Cartcontext on ro import mikonim
// context
import { CartContext } from '../context/CartContextProvider';
// icon
import shopIcon from "../assets/icons/shop.svg";
// 
import styles from "./Navbar.module.css";
const Navbar = () => {
    const {state}=useContext(CartContext);


    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"> <img src={shopIcon} alt='shopIcon'/></Link>
                   
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;