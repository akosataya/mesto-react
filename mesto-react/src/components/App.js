import React, {useState} from "react";
import '../index.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const closeAllPopups = (evt) => {
    if (
        evt.target.classList.contains('popup_opened') ||
        evt.target.classList.contains('popup__close-button')
    ) {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
    }
  }

  return (
    <div className='App'>
      <div className='page'>
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
        />
        <Footer />

        <template className='gallery__photos'>
          <li className='gallery__item'>
            <img
                className='gallery__photo'
                alt='Фотокарточка'
            />
              <div className='gallery__description'>
                <h2 className='gallery__title'></h2>
                <div className='gallery__like'>
                  <button
                      className='gallery__like-button'
                      type='button'
                      aria-label='Лайк'
                  ></button>
                  <p className='gallery__like-counter'></p>
                </div>
              </div>
              <button
                  className='gallery__delete-button'
                  type='button'
                  aria-label='Мусорка'
              ></button>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
