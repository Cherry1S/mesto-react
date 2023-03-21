function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <button className="elements__delete-button button-transparent" type="button"><img
        src="<%=require('./images/DeleteButton.svg')%>" alt="Кнопка «Удалить»" /></button>
      <img className="elements__card-image" src={props.card.link} alt={`Изображение ${props.card.name}`} onMouseDown={handleClick} />
      <div className="elements__text-container">
        <h2 className="elements__card-text">{props.card.name}</h2>
        <div>
          <button className="elements__card-like button-transparent" type="button"></button>
          <p className="elements__likes-number">{props.card.likes.length}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
