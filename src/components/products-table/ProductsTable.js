import React from 'react';

const ProductsTable = ({ products, loading }) => {
    
    const loadingComponent = () => <p>Carregando...</p>

    const productsTable = () => {
        return (
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Fabricante</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>P. Promocional</th>
                    <th>Situação</th>
                </tr>
                { productsList() }
            </table>
        );
    }

    const productsList = () => {
        
        return products.map(product => {
            return (
                <tr key={product.id}>
                    <td>{ product.nome }</td>
                    <td>{ product.fabricante }</td>
                    <td>{ product.categoria?.nome }</td>
                    <td>{ product.preco }</td>
                    <td>{ product.precoPromocional }</td>
                    <td>{ product.situacao }</td>
                </tr>
            )
        });
    };
    
    return <> {loading? loadingComponent() : productsTable()} </>;
}

export default ProductsTable;