// maikhahim zamanike royeh more detailes 1  mahsole clickkardetelaat marbot be on ro namayesh bedim 
import React,{useContext} from 'react';
// vaseh daryaftetelaat az server be vasileh productcontext usecontext ro import mikonim
import { Link,useParams } from 'react-router-dom';
// context
import { ProductsContext } from '../context/ProductContextProvider';
import styles from "./ProductDetails.module.css";

const PdroductDetails = (props) => {
    // be sorat zir id ro az props migirim
    // vaseh estefadeh az proms ha dar v6 bayad az useparams estefadeh konim
    const params=useParams();
const id=params.id;
    //v5-> const id=props.match.params.id;
    const data=useContext(ProductsContext);
    // vaseh einkeh index az 0 shro misheh hamishe 1 adad kamtar az id aast pas zamanike mikhahim 1 mahsolro daryaft konim 1 adad az id on kam mikonim
    const product=data[id-1];
    // aknon etelaati ke niyaz darim ro destructior mikonim
    const {image,title,description,price,category}=product;

    return (
        <div className={styles.container}>
        <img className={styles.image} src={image} alt="product" />
        <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}><span>Category:</span> {category}</p>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to="/products">Back to Shop</Link>
            </div>
        </div>
    </div>
    );
};

export default PdroductDetails;