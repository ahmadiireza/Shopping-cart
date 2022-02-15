// mikhahi etelaat ro az be sorat context gerefteh va onharo dore projeh wrap koneh(ghara bede)
import React,{useEffect, useState,createContext} from 'react';
// api
import { getProducts } from '../services/api';

export const ProductsContext=createContext();
const ProductContextProvider = ({children}) => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
         // function zir ro vaseh gerftan etelaat az getproducts gerefteh va dar state mored nazar  ghara midahim,
        const fetchAPI=async()=>{
        setProducts(await getProducts());
        // aknon az fetchAPI dar useEffect estefadeh mikonim
    }
        fetchAPI();
    },[]);
   
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;