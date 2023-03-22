function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
      <li className="elements__card">
        <button className="elements__delete-button button-transparent" type="button"><img
          src="<%=require('./images/DeleteButton.svg')%>" alt="Кнопка «Удалить»" /></button>
        <img className="elements__card-image" src={card.link} alt={`Изображение ${card.name}`} onMouseDown={handleClick} />
        <div className="elements__text-container">
          <h2 className="elements__card-text">{card.name}</h2>
          <div>
            <button className="elements__card-like button-transparent" type="button"></button>
            <p className="elements__likes-number">{card.likes.length}</p>
          </div>
        </div>
      </li>
  );
}

export default Card;
