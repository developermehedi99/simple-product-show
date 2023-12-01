import { useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))

    return (
        <div className='grid grid-cols-3 gap-6 bg-[#4c4c4c] mb-0'>
          {
            products.map((product, index) => <Product 
            key={index}
            product={product}
            ></Product>)
          }
        </div>
    );
};

export default Products;