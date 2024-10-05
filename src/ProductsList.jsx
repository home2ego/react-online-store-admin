import Product from './Product';

export default function ProductsList({ products, onDeleteClick }) {
  return (
    <ul className="store-front">
      {products.map((product) => (
        <li key={product.id}>
          <Product details={product} />
          <button className="btn-outline btn-delete" onClick={() => onDeleteClick(product.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
