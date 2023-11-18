import { useCart } from "./CartContext";

export default function Twenty() {
  const { cartState, cartDispatch } = useCart();

  const addToCart = (item) => {
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingCartItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    }
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemId, quantity },
      });
    }
  };
  const removeFromCart = (itemId) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
  ];

  return (
    <div>
      <h2>SHOPPING CART</h2>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} {item.quantity}
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="inline-block rounded bg-blue-500 hover:bg-blue-700 px-1 py-1 mx-1 my-1 text-white text-xs"
              >
                +
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="inline-block rounded bg-blue-500 hover:bg-blue-700 px-1 py-1 mx-1 my-1 text-white text-xs"
              >
                -
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="inline-block rounded bg-red-500 hover:bg-red-700 px-1 py-1 mx-1 my-1 text-white text-xs"
              >
                REMOVE
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2>product list</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button
              onClick={() => addToCart(product)}
              className="inline-block rounded bg-blue-500 hover:bg-blue-700 px-2 py-2 my-1 text-white"
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
