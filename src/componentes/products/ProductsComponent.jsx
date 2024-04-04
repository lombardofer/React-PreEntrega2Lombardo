import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../../asyncMock';
import { useEffect, useState } from 'react';
import '../products/ProductsComponent.css';

export default function ProductsComponent() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
    console.log('Recibiendo datos!!!');
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div>
        <h1>Productos disponibles en la tienda</h1>
        <section style={{ display: 'flex', gap: 2 }}>
          {products.map((product) => (
            <article
              key={product.id}
              style={{ border: '1px solid white', padding: 10 }}
            >
              <div class="card">
                <img src={product.image} class="card-img-top" alt={product.title}/>
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Precio ${product.price}</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link"><button onClick={() => handleClick(product.id)}>
                Ver detalles
              </button></a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
