import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductPage = () => {
    let [query, setQuery] = useSearchParams();
    console.log("qqqq를 들고와줘", query.get('q'))
  return (
    <div>
        <h1>Show All ProductPage!!!</h1>
    </div>
  )
}

export default ProductPage