import React from 'react';
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import styles from './index.module.css';
import { mockProducts } from './data/products'; 

const Home: React.FC = () => {
  
  return (
    <Container
      className={styles.background} 
      style={{
        padding: '20px',
        color: '#fff',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        href="/admin"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
      >
        Acessar
      </Button>

      <Typography variant="h1" gutterBottom align="center" className={styles.boldShadow}>
        Bem-vindo à nossa loja!
      </Typography>
      <Typography variant="h5" gutterBottom align="center" className={styles.boldShadow}>
        Explore nossos produtos incríveis.
      </Typography>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {mockProducts.map((product) => (
          <Grid item xs={12} key={product.id}>
            <Card className="product-card" style={{ transition: 'transform 1.3s', width: '200px', margin: '0 auto' }}> {/* Definindo a largura do Card */}
              <CardMedia
                component="img"
                height="150" 
                image={`/imagens/${product.id}.jpg`} 
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" className={styles.boldShadow}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  R$ {product.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;