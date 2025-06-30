import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './cardPageStyle.css';
const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const Items = useSelector((state: any) => state.cardItem.items);
  // const subtotal = product.price * quantity;

  return (
    <div className='cart-summary'>
      {Items.map((item: any, index: number) => {
        const subtotal = item.price * quantity;
        return (
          <div key={index} className='cart-item'>
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className='quantity-controls'>
              <button onClick={decreaseQuantity} className='buttonQuantity'>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity} className='buttonQuantity'>
                +
              </button>
            </div>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <button className='remove-button'>Remove Item</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;

{
  /* <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <div className="quantity-controls">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <button onClick={() => onRemove(product.id)}>Remove Item</button> */
}
