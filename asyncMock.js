const products = [
    {
      id: 1,
      title: 'Termo Stanley Azul',
      price: '89000',
      category: 'Termos',
      description: 'El Termo Mate Stanley Azul Classic 950 ml con Asa y tapon cebador es un producto icónico que ha acompañado a los aventureros al aire libre durante generaciones permitiéndoles disfrutar de bebidas calientes y frías mientras crean recuerdos inolvidables.',
      image:
        '../public/termo1.jpg',
    },
    {
      id: 2,
      title: 'Termo Stanley Rojo',
      price: '123000',
      category: 'Termos',
      description: 'Con su construcción robusta y aislamiento al vacío, este termo puede manejar cualquier situación y mantener tus bebidas a la temperatura deseada durante 24 horas.',
      image:
        '../public/termo2.jpg',
    },
    {
      id: 3,
      title: 'Termo Stanley Rosa 3lts',
      price: '123000',
      category: 'Termos',
      description: 'Su tapón giratorio permite un vertido suave y la tapa aislada también sirve como taza para beber.',
      image:
        '../public/termo3.jpg',
    },
    {
        id: 4,
        title: 'Mate Stanley Survival',
        price: '12000',
        category: 'Mates',
        description: 'El mate Stanley mantiene la temperatura durante toda la cebada. Es práctico e higiénico. Si el producto es comprado en Argentina la garantía es de por vida; siempre y cuando cumpla con los requisitos solicitados.',
        image:
          '../public/mate1.jpg',
      },
      {
        id: 5,
        title: 'Bombilla Acero',
        price: '4500',
        category: 'Accesorios',
        description: 'Bombilla ACERO INOX QUIRURGICO 304 desarmable',
        image:
          '../public/bombilla1.jpg',
      },
      {
        id: 6,
        title: 'Bombilla Acero Pr',
        price: '4500',
        category: 'Accesorios',
        description: 'Bombilla chata de acero inoxdiable, con dije dorado y filtro ranurado, ideal para mates pequeños y medianos.',
        image:
          '../public/bombilla2.jpg',
      },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
      console.log('Enviando datos!!!');
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  