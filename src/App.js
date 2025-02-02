import { useState } from "react";
import Banner from "./components/banner";
import Products from "./pages/products.js";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

const products = [
  { id: 1, name: "बन्दा", price: 104 },   
  { id: 2, name: "गाजर", price: 65 },   
  { id: 3, name: "लौका", price: 66 },
  { id: 4, name: "प्याज", price: 195 },  
  { id: 5, name: "आलु", price: 39 },    
  { id: 6, name: "टमाटर", price: 33 }, 
  { id: 7, name: "ककडी", price: 93 }, 
  { id: 8, name: "बन्दा", price: 98 }, 
  { id: 9, name: "मुला", price: 85 }, 
  { id: 10, name: "हरियो मिर्च", price: 11 },
  { id: 11, name: "पालुङ्गो", price: 43 }, 
  { id: 12, name: "केराउ", price: 114 } 
];

export default function App(){
  const [sideBarStatus, setSideBar] = useState(false);
  const [productList, setProductList] = useState([]);

  function handleProductList(id){
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd && !productList.some((product) => product.id === id)) {
      setProductList([...productList, productToAdd]);
    }
  }
  
  function handleSideBar(){
    setSideBar(!sideBarStatus);
  }

  function handleRemove(id){
    setProductList(productList.filter((product) => product.id !== id))
  }

  function handleClear(){
    setSideBar(false);
    setProductList([]);
  }

  return (
    <div>
      <Router>
        <Banner onSideBar={handleSideBar} sideBarStatus={sideBarStatus} productList={productList} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products onSideBar={handleSideBar} onProduct={handleProductList} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Sidebar 
        sideBarStatus={sideBarStatus} 
        productList={productList} 
        onRemove={handleRemove} 
        onClear={handleClear}
      />
    </div>
  );
}