import React from 'react';
import { useSelector } from 'react-redux';

const TotalCart = () => {
  const cartSelector = useSelector((state) => state.cart);

  return <div>total: {cartSelector.items.length}</div>;
};
export default TotalCart;
