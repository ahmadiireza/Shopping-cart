// bar asas ein component har mahsol ro dar sabad kharid misazim
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
// component
import Cart from '../shared/Cart';
// context
// maikhahim be maghadir mojood dar sabad khrid dastresi peyda konim
import { CartContext } from '../context/CartContextProvider';
import styles from "./ShopCart.module.css";

const ShopCart = () => {
    const {state,dispatch}=useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
            {state.selectedItems.map(item=><Cart key={item.id} data={item}/>)}
        </div>
         {/* shart mizarim ke fild paeen ro zamani namayesh bedeh ke itemcounts bishtar az 0 bashad
         -vaseh namayesh tedad masolat va gheymat nahaei onhast */}
        {
            state.itemsCounter > 0 && <div className={styles.payments}>
                <p><span>Total Items:</span>{state.itemsCounter}</p>
                <p><span>Total payment:</span>{state.total}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.clear} onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                    <button className={styles.checkout} onClick={()=>dispatch({type:"CHECKOUT"})}>Check out</button>
                    
                </div>
            </div>
        }
         {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                        <h3>Want to buy?</h3>
                        <Link to="/products">Go to shop</Link>
                    </div>
            }
        {/* dar einja shart mizarimke ageh checkout ma true bod va sabad khrideman ra khali krdeh bodim payam zir ro namayesh bedeh */}
        {
            state.checkout && <div className={styles.complete}>
                <h3>checked out Successfully</h3>
                <Link to="/products">by more</Link>

            </div>
        }
        {/* mikhahim zamani ke clear ra mizanim 1 payambe ma namayesh dahad 
        -pas 2 shart mizarim
        1-meghdarsh false bashad ke ba ! ein kar ro anjam midim
        2-itemscounter ash 0 bashad
         */}
         
        </div>
    );
};

export default ShopCart;