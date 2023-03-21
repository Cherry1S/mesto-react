import closeButton from '../images/CloseButton.svg';

function ImagePopup(props) {
  return (
    <div className={`popup popup_dark ${props.isOpen ? 'popup_opened' : ''}`} id="popup-view">
      <div className="popup__image-container">
        <button type="button" className="popup__close button-transparent" id="image-close-button" onMouseDown={props.onClose}><img
          className="popup__close-icon" src={closeButton} alt="Кнопка «Закрыть»" /></button>
        <img src={props.selectedCard.link} alt={props.selectedCard.name} className="popup__image" />
        <h2 className="popup__image-caption">{props.selectedCard.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
