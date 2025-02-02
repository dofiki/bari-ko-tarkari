import Footer from "../components/footer";
import Product from "../components/product";

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

export default function Products({onProduct}){

    return (
        <>
        <div className="products-w">
        <div className="productTitle">
          <h2>Products list:</h2>
        </div>
        <div className="products">
            {products.map((product)=>{
             return <Product 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              onProduct={onProduct}
               />
            })}
        </div>
    </div>

    <Footer />
        </>
    )
  
  }