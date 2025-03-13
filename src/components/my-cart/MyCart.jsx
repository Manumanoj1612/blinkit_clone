import React, { useEffect, useState } from 'react';
// import { CartItemList } from '../Card-items/CartItemList';
import './MyCart.css';

function MyCart() {
  

  // const [cartItems, setCartItems] = useState(CartItemList);
  const [item,setItem]=useState()
  const handleRemove = (indexToRemove) => {
    const updatedCart = item.filter((item, index) => index !== indexToRemove);
    setItem(updatedCart);
    localStorage.setItem("manoj",JSON.stringify(updatedCart))
  };
  const items=()=>{
      let arr = JSON.parse(localStorage.getItem("manoj"))
      // localStorage.setItem("cartitem",JSON.stringify(arr))

      setItem(arr)
      console.log("hi",arr)
      console.log(item)
  }
  useEffect(()=>{
    items()
  },[])


  return (
    <>
      {/* <div>
                Total:{totalPrice}
              </div> */}
      <div>

        {item && item.length > 0 ? (
          item.map((item, index) => {
            return (
              <>
                <div className="cart-item" key={index}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <h4>Price: ₹{item.price}</h4>
                  </div>
                  {/* Add the Remove button */}
                  <button className="remove-button" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </div>
              </>
            );


          })
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}

export default MyCart;
