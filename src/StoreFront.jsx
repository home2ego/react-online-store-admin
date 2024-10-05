import { useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductsList from './ProductsList';

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validation, setValidation] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();

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

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleDeleteClick(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        name={name}
        description={description}
        validation={validation}
        onFormSubmit={handleFormSubmit}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
      />
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>
  );
}
