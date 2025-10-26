const CardPizza = ({ name, price, ingredients, img }) => {
  const formattedPrice = price.toLocaleString('es-CL');
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Ingredientes: {ingredients.join(', ')}</p>
      <p>Precio: ${formattedPrice}</p>
      
      <button>Ver Más</button>
      <button>Añadir</button>
    </div>
  );
};
export default CardPizza;