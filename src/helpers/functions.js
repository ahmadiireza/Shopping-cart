// function zirvaseh eineh ke eam ro gerefteh va 2 kalameh aval ro namayesh dahad
const shorten=(title)=>{
    // ebteda matn ro bar asas faseleh beineshan split mikonim
    const splitedTitle=title.split(" ");
    // akonin 1 array darim ba majmoehi az kalamat 
    const newTitle= `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;

} 
// function paeen vaseh ein ast ke check konad mahsole morednazar ma dar sabad kharid ma ast ya kheir
const isInCart=(state,id)=>{
const result=!!state.selectedItems.find(item=>item.id===id)
// ein (!!) true va flase barmigardoneh ageh product ro peyda kard true barmigardoneh va ageh kheir false barmigardoneh
return result;
}
// fuction zir vzseh check kardan einkeh ein mahsol dar sabad kharid ast ya kheir
const quantityCount=(state,id)=>{
    const index=state.selectedItems.findIndex(item=>item.id===id);
    if(index===-1){
        return false;
    }else{
        return state.selectedItems[index].quantity;
    }


}

// be ssorat named export mikonim zira momkeneh chandta digeh ham dashteh bashim
export {shorten,isInCart,quantityCount};