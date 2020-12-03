import React from 'react';

const ProductsTable = (props) => {
    
    const { products,
            loading,
            onEdit,
            canEdit } = props;

    const loadingComponent = () => <p>Carregando...</p>

    const editButton = (productId) => <button onClick={() => onEdit(productId)}>Editar</button>;

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
                    { canEdit? <td>{ editButton(product.id) }</td> : null }
                </tr>
            )
        });
    };

    const productsHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Fabricante</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>P. Promocional</th>
                    <th>Situação</th>
                    { canEdit? <th>Editar</th> : null }
                </tr>
            </thead>
        );
    }

    const productsTable = () => {
        return (
            <table>
                { productsHeader() }
                <tbody>
                    { productsList() }
                </tbody>
            </table>
        );
    }

    return <> {loading? loadingComponent() : productsTable()} </>;
}

export default ProductsTable;