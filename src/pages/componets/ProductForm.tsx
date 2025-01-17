// pages/componets/ProductForm.tsx
import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Product } from '../data/products';

interface ProductFormProps {
  onAdd: (product: Product) => void;
  onUpdate?: (product: Product) => void; // Adicionando a prop onUpdate
  product?: Product | null; // Adicionando a prop product
}

const ProductForm: React.FC<ProductFormProps> = ({ onAdd, onUpdate, product }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
    } else {
      setName('');
      setPrice(0);
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: product ? product.id : Date.now(), // Se for um produto existente, mantém o ID
      name,
      price,
    };

    if (product) {
      onUpdate?.(newProduct); // Chama onUpdate se o produto estiver definido
    } else {
      onAdd(newProduct); // Caso contrário, chama onAdd
    }

    // Limpa o formulário após a adição ou atualização
    setName('');
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nome do Produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Preço do Produto"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
        {product ? 'Atualizar Produto' : 'Adicionar Produto'}
      </Button>
    </form>
  );
};

export default ProductForm;