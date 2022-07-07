import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from './../redux/reducer/cart';

const Card = ({ initQuantity, id, name }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex' }}>
      <div>{name}</div>
      <button
        onClick={() =>
          dispatch(incrementQuantity({ id, quantity: initQuantity }))
        }
      >
        +
      </button>
      <div>{initQuantity}</div>
      <button
        onClick={() =>
          dispatch(decrementQuantity({ id, quantity: initQuantity }))
        }
      >
        -
      </button>
    </div>
  );
};

const Cart = () => {
  const cartSelector = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fetchCart = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/pub/product');
      dispatch(addToCart(data.data.products));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    setListProduct(cartSelector.items);
  }, [cartSelector.items]);

  return (
    <div>
      <div>Cart</div>
      {listProduct?.map((val) => {
        return (
          <Card
            id={val.id}
            initQuantity={val.quantity}
            name={val.productName}
          />
        );
      })}
    </div>
  );
};

export default Cart;
