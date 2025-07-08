import React, { useState, useEffect } from 'react';
import Product from './Product';

function ProductList({setCart,isLoggedIn,setShowSignup,addToCart,searchTerm}) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
const categories = [...new Set(products.map((p) => p.category))];
  const handleAddToCart = (product) =>{
    setCart(prevcart => [...prevcart, product]);
  };
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json.products);
        setProducts(json.products);
      })
      .catch(error => {
        console.error('Failed to fetch products:', error);
      });
  }, []);
const filteredProducts = products.filter((product) =>
  (selectedCategory === '' || product.category === selectedCategory) &&
  (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
   product.description.toLowerCase().includes(searchTerm.toLowerCase()))
);
  return (
    <>
    <div className='text-center text-4xl font-bold mt-8 pb-6' id='productsec'>Product</div>
     <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded shadow-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.length === 0 ? (
          <h1>Loading...</h1>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full mt-4">
            No products match your search.
          </p>
        ) : (
          filteredProducts.map((product, index) => (
            <Product
              key={product.id || index}
              name={product.title}
              imagesrc={product.thumbnail}
              price={product.price}
              desc={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))
        )}
      </div>

</> 

  );

}

export default ProductList;