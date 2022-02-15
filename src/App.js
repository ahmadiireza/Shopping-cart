import './App.css';
import { Routes, Navigate ,Route} from 'react-router-dom';
// context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from './context/CartContextProvider';
// component
import Store from './components/Store';
import PdroductDetails from './components/PdroductDetails';
import Navbar from './shared/Navbar';
import ShopCart from './components/ShopCart';
function App() {
  return (
    <ProductContextProvider>
    
     <CartContextProvider>
       <Navbar/>
     <Routes>
     <Route path="/products/:id" element={<PdroductDetails/>}  />

       <Route path="/products" element={<Store/>}  />
       <Route path="/cart" element={<ShopCart/>}  />
       
       <Route path="/*" element={ <Navigate to="/products"/>}/>
     </Routes>
     </CartContextProvider>
     </ProductContextProvider>
  );
}

export default App;
