import Menu from "./Components/Menu";
import {useState} from "react";
import  "./App.css";
import ProductItem from "./Components/ProductItem";
import Categories from "./Components/Categories";


const AllProducts = ["All", ...new Set(Menu.map((currPro) =>  currPro.category))]

function App() {
  const [products, setProducts] = useState(Menu);
  const [catProduct, setCatProduct] = useState(AllProducts)

  const filterProduct = (category) => {
    if(category === "All") {
      setProducts(Menu)
      return
    }
    const updateProduct = Menu.filter((catProduct) => {
      return catProduct.category === category;
    });
    setProducts(updateProduct);
  }

  return (
    <>
    <h2>Your Products</h2>
    <hr />
    <Categories filterProduct= {filterProduct} catProduct= {catProduct} />
    <hr />
    <ProductItem products= {products} setProducts={setProducts}/>
      </>
  )
}

export default App;
