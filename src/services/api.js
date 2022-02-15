// etelaat chand mahsol ro barayeh ma barmigardanad
import axios from "axios";
// vaseh gereftan etelaat az api import mikonim
// url man ro dar moteghayer paeen mizaream va end point(/products) ro be nesbatniyaz dar amliyat ezafeh mikonim
const BASE_URL="https://fakestoreapi.com";
const getProducts= async ()=>{
    // vaseh einkeh function ro be sorat async a waite benevisim esafeh mikonim(hame etealat ro migirh bad on ro be amaliyat ezafeh mikoneh)
    const response=await axios.get(`${BASE_URL}/products`);
    // await migeh sabr kon va be khat bad naro ta data hato daryaft koneh 
    return response.data;


}

export {getProducts};
// be sorat named export mikonim zira momkeneh function hayeh digeh ham dashteh bashim
