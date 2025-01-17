// pages/admin/index.tsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button } from '@mui/material';
import ProductForm from '../componets/ProductForm';
import ProductList from '../componets/ProductList';
import { mockProducts, Product } from '../data/products';
import { useRouter } from 'next/router'; // Importando useRouter

const Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const router = useRouter(); // Inicializando o router

  const handleAddProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Painel Administrativo</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '20px' }}>
              <ProductForm onAdd={handleAddProduct} />
              <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => router.push('/')} // Redirecionando para a landing page
                style={{ marginTop: '20px' }}
              >
                Voltar para a Landing Page
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: '20px' }}>
              <ProductList products={products} onDelete={handleDeleteProduct} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Admin;