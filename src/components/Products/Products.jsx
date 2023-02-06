import React from 'react'
import Product from './Product/Product' 
import './Products.scss'

export default function Products({ products, innerPage, headingText }) {
  return (
    <div className="products-container">
    {!innerPage && <div className="sec-heading">{headingText}</div>}
    <div className={`products ${innerPage ? "innerPage" : ""}`}>
        {products?.data?.map((item) => (
            <Product
                key={item.id}
                id={item.id}
                data={item.attributes}
            />
        ))}
    </div>
</div>
  )
}
