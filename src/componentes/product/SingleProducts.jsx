import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../../asyncMock';
import '../product/SingleProduct.css';


export default function SingleProduct() {
  const { prodId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);

  return (
    <>
      <section>
        <div className='card container'>
          <img src={product.image} class="card-img-top" alt={product.title}/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Categoría: {product.category}</li>
            <li className="list-group-item">Precio: {product.price}</li>
            <li className="list-group-item">Id: {prodId}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Click para agregar al carrito</a>
          </div>
        </div>
      </section>

      
    </>
  );
}
