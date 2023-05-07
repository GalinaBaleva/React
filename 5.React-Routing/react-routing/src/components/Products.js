import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Products = () => {
    const [starship, setStarships] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://swapi.dev/api/starships/${params.productId}`)
            .then(res => res.json())
            .then(result => {
                setStarships(result);
            });
    }, [params.productId]);

    const nextProductHandler = () => {
        // TODO: Redirect to next product
        navigate(`/products/${Number(params.productId) +1 }`);
    };

    return (
        <>
            <h2>Products Page</h2>

            <h3>Product {params.productId} Specification</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
            </ul>

            <button onClick={nextProductHandler}>Next</button>
        </>
    );
};

export default Products;