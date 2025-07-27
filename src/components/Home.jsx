import React from 'react';
import Card from "./Card"; 
import productData from '../data/productData';

export default function Home() {

  return (
    <div className="flex flex-wrap justify-center gap-16 mt-6">
      {productData.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.image}
        />
      ))}
    </div>
  );
}