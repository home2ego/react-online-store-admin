import Product from './Product';
import { useState } from 'react';

export default function StoreFront() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);
  const [validation, setValidation] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name) {
      setValidation('Please enter a name');
      return;
    }

    if (!description) {
      setValidation('Please enter a description');
      return;
    }

    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: name,
        description: description,
      },
    ]);

    setName('');
    setDescription('');
    setValidation('');
  }

  function handleDeleteClick(deleteId) {
    setProducts(products.filter((product) => product.id !== deleteId));
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter the name"
            className="textfield"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Enter the description"
            className="textfield"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation-message">{validation}</div>
          <input type="submit" className="btn btn-primary" value="Add product" />
        </div>
      </form>
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ul className="store-front">
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button className="btn-outline btn-delete" onClick={() => handleDeleteClick(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
