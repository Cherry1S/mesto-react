import React, { useEffect, useState, useContext } from 'react';
import avatarButton from '../images/AvatarButton.svg';
import editButton from '../images/EditButton.svg';
import addButton from '../images/AddButton.svg';
import api from '../utils/Api.js';
import Card from './Card.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
  // const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

//   function handleCardLike(card) {
//     const isLiked = card.likes.some(like => like._id === currentUser._id);

//     api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
//         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
//     });
// }

// function handleCardDelete(card) {
//   api.deleteCard(card._id).then(() => {
//       setCards((state) => state.filter((c) => c._id !== card._id));
//   });
// }

//   useEffect(() => {
//     Promise.all([
//       api.getInitialCards(),
//     ])
//       .then((pageData) => {
//         setCards(...cards, pageData[0]);
//       })
//   }, []);

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__info">
          <button type="button" className="profile__avatar-button button-transparent" onMouseDown={onEditAvatar}>
            <img className="profile__image" src={currentUser.avatar} alt="Аватар" draggable="false" />
            <img className="profile__pencil" src={avatarButton} alt="Кнопка редактирования" draggable="false" />
          </button>
          <div className="profile__info-textbox">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button button-transparent" type="button" onMouseDown={onEditProfile}><img
              className="profile__edit-button-image" src={editButton}
              alt="Кнопка «Редактировать»" /></button>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button button-transparent" type="button" onMouseDown={onAddPlace}><img className="profile__add-button-image"
          src={addButton} alt="Кнопка «Добавить»" /></button>
      </section>
      <section className="elements content__elements">
        <ul className="elements__grid">
          {cards.map((card) => (
            <Card card={card} onCardLike={onCardLike} onCardDelete={onCardDelete} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;


