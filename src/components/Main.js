import React, { useEffect } from 'react';
import avatar from '../images/Avatar.png';
import avatarButton from '../images/AvatarButton.svg';
import editButton from '../images/EditButton.svg';
import addButton from '../images/AddButton.svg';
import api from '../utils/Api.js';
import Card from './Card.js'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([
      api.getInitialCards(),
      api.getUser()
    ])
      .then((pageData) => {
        setUserName(pageData[1].name);
        setUserDescription(pageData[1].about);
        setUserAvatar(pageData[1].avatar);
        setCards(...cards, pageData[0]);
      })
  }, []);

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__info">
          <button type="button" className="profile__avatar-button button-transparent" onMouseDown={onEditAvatar}>
            <img className="profile__image" src={userAvatar} alt="Аватар" draggable="false" />
            <img className="profile__pencil" src={avatarButton} alt="Кнопка редактирования" draggable="false" />
          </button>
          <div className="profile__info-textbox">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button button-transparent" type="button" onMouseDown={onEditProfile}><img
              className="profile__edit-button-image" src={editButton}
              alt="Кнопка «Редактировать»" /></button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button button-transparent" type="button" onMouseDown={onAddPlace}><img className="profile__add-button-image"
          src={addButton} alt="Кнопка «Добавить»" /></button>
      </section>
      <section className="elements content__elements">
        <ul className="elements__grid">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;


