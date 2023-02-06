import React, { useEffect, useContext } from 'react'
import Banner from './Banner/Banner';
import "./Home.scss";
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/context';
import Category from './Category/Category';
import Products from '../Products/Products';

export default function Home() {
  const {products, setProducts, categories, setCategories} = useContext(Context)

  useEffect(() => {
    getProducts();
    getCategories();
}, []);

const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
        setProducts(res);
    });
};
const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
       setCategories(res);
    });
};

return (
  <div>
      <Banner />
      <div className="main-content">
          <div className="layout">
              <Category categories={categories} />
              <Products
                products={products}
                headingText="Popular Products" 
              />
          </div>
      </div>
  </div>
);
}
