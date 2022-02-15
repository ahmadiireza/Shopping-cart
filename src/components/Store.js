// dar ein file hameh mahsolat ro namayesh bedim
import React,{useContext, useEffect} from 'react';
// usecontext ro import mikonim ke be vasileh on be masolati ke dar productContext mojood ast dastresi dashteh bashim
// products context(vaseh estefadeh az context hayeh mojood dar on)
import { ProductsContext } from '../context/ProductContextProvider';
import Product from '../shared/Product';
import styles from "./Store.module.css";

const Store = () => {
    const products=useContext(ProductsContext);
    // ein ro be onvan vrodi usecontext midim ta az context hayeh dakheli on estefadeh konim


    return (
        <div className={styles.container} >
            {products.map(product=><Product 
            key={product.id} 
            productData={product}/>)}
            
        </div>
    );
};

export default Store;