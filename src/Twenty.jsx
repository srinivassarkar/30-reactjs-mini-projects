export default function Twenty() {
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
    { id: 5, name: "Product E" },
    { id: 6, name: "Product F" },
    { id: 7, name: "Product G" },
  ];

  return (
    <div>
      <h2>SHOPPING CART</h2>
      <h2>product list</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} <button className="inline-block rounded bg-blue-500 px-3 py-2 my-2 text-white text-sm">Add to cart</button></li>
          
        ))}
      </ul>
    </div>
  );
}
