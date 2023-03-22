import React, { useState } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'
import Footer from './Footer.js'
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  // function handleDeleteCardClick() {
  //   setDeleteCardPopupOpen(true);
  // }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true)
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setDeleteCardPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }


  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name='popup-edit'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          submitText='Сохранить'
          onClose={closeAllPopups}>
          <>
            <input id="text-input-name" name="name" type="text" className="popup__input-text" placeholder="Имя" minLength="2" maxLength="30" required />
            <span className="popup__input-text-error text-input-name-error"></span>
            <input id="text-input-about" name="about" type="text" className="popup__input-text" placeholder="Профессия" minLength="2" maxLength="200" required />
            <span className="popup__input-text-error text-input-about-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm
          name='popup-avatar'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          submitText='Сохранить'
          onClose={closeAllPopups}>
          <>
            <input id="text-input-avatar" name="avatar" type="url" className="popup__input-text" placeholder="Ссылка на изображение" required />
            <span className="popup__input-text-error text-input-avatar-error" id="avatar-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm
          name='popup-add'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          submitText='Создать'
          onClose={closeAllPopups}>
          <>
            <input id="text-input-place" name="place" type="text" className="popup__input-text" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__input-text-error text-input-place-error"></span>
            <input id="text-input-link" name="link" type="url" className="popup__input-text" placeholder="Ссылка на изображение" required />
            <span className="popup__input-text-error text-input-link-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm
          name='popup-delete'
          title='Вы уверены?'
          isOpen={isDeleteCardPopupOpen}
          submitText='Да'
          submitId='delete-confirm'
          onClose={closeAllPopups}>
        </PopupWithForm>

        <ImagePopup
          selectedCard={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
