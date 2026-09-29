import React, { useState } from "react";

function Counter() {
  const [arr, setArr] = useState([])

  function addPlus() {
    setArr(prevArr => [ ...prevArr, "+" ])
  }

  function addMinus() {
    setArr(prevArr => [ ...prevArr, "-" ])
  }

  return (
    <div>
      <button onClick={addPlus}>+</button>
      <button onClick={addMinus}>-</button>
      {arr.toString()}
    </div>
  )
}

export default Counter;
//   const [cart, setCart] = useState({
//     item: " Apple",
//     quantity: 0,
//   });

//   function addApple() {
//     setCart((prevCart) => ({
//       ...prevCart,
//       quantity: prevCart.quantity + 1,
//     }));
//   }

//   function removeApple() {
//     setCart((prevCart) => ({
//       ...prevCart,
//       quantity: prevCart.quantity - 1,
//     }));
//   }

//   return (
//     <div>
//       <button onClick={removeApple} className="counter__btn">
//         -
//       </button>
//       {cart.quantity}
//       {cart.item}
//       <button onClick={addApple} className="counter__btn">
//         +
//       </button>
//     </div>
//   );
// }



// Use callback to get the previous value
// Spread out all properties of prev state with '...'
// Only change the property you need to change