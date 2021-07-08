import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name: 'Poke Card', description: 'Charmander'},
    {id: 2, name: 'Sports Card', description: 'Basketball'}
];

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;