import { useState, useEffect } from 'react';
import AddProductForm from './AddProductForm';
import ProductsList from './ProductsList';
import useFetch from './useFetch.jsx';

export default function StoreFront() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');

    return JSON.parse(savedProducts) ?? [];
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validation, setValidation] = useState('');
  const { post } = useFetch('https://api.learnjavascript.online/demo/react/admin/');

  useEffect(() => {
    if (products.length === 0) {
      document.title = 'No products';
    } else if (products.length === 1) {
      document.title = '1 product';
    } else {
      document.title = `${products.length} products`;
    }
  }, [products]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

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

    post('products', { name, description })
      .then((data) => {
        console.log(data);
        if (data) {
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
      })
      .catch((error) => console.error(error));
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
