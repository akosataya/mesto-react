import React, {useState} from "react";
import '../index.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import {api} from '../utils/Api';

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

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() =>{
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([user, cards]) => {
          setUserName(user.name);
          setUserDescription(user.about);
          setUserAvatar(user.avatar);

          // cardsSection.renderItems(cards);
        })
        .catch((err) => console.log(err));
  })

  return (
    <div className='App'>
      <div className='page'>
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            userName={userName}
            userDescription={userDescription}
            userAvatar={userAvatar}
        />
        <Footer />

        <PopupWithForm
          name='name'
          className='edit'
          isOpen={isEditProfilePopupOpen}
          title='Редактировать профиль'
          onClose={closeAllPopups}
        >
          <input
              defaultValue={userName}
              id='name-input'
              className='popup__input popup__input_edit_name'
              type='text'
              placeholder='Имя'
              name='name'
              minLength='2'
              maxLength='40'
              required
          />
          <span className='popup__text-error name-input-error'></span>
          <input
              defaultValue={userDescription}
              id='about-input'
              className='popup__input popup__input_edit_about'
              type='text'
              placeholder='О себе'
              name='about'
              minLength='2'
              maxLength='200'
              required
          />
          <span className='popup__text-error about-input-error'></span>
          <button
              className='popup__save'
              type='submit'
              aria-label='Сохранить'
          >Сохранить
          </button>
        </PopupWithForm>

        <PopupWithForm
          className='update'
          isOpen={isEditAvatarPopupOpen}
          title='Обновить аватар'
          onClose={closeAllPopups}
        >
          {/*Попап обновления аватара*/}
          {/*<div className='popup popup_update'>*/}

          <input
              defaultValue={userAvatar}
              id='avatar-input'
              className='popup__input popup__input_update'
              type='url'
              placeholder='Ссылка на картинку'
              name='avatar'
              required
          />
          <span className='popup__text-error avatar-input-error'></span>
          <button
              className='popup__save'
              type='submit'
              aria-label='Сохранить'
          >Сохранить
          </button>
        </PopupWithForm>

        <PopupWithForm
          className='add'
          isOpen={isAddPlacePopupOpen}
          title='Новое место'
          onClose={closeAllPopups}
        >
          {/*Попап добавления фотокарточки*/}
          {/*<div className='popup popup_add'>*/}

          <input
              id='add-name-input'
              className='popup__input popup__input_add_name'
              type='text'
              placeholder='Название'
              name='placeName'
              minLength='2'
              maxLength='30'
              required
          />
          <span className='popup__text-error add-name-input-error'></span>
          <input
              id='add-link-input'
              className='popup__input popup__input_add_link'
              type='url'
              placeholder='Ссылка на картинку'
              name='placeLink'
              required
          />
          <span className='popup__text-error add-link-input-error'></span>
          <button
              className='popup__save'
              type='submit'
              aria-label='Создать'
          >Создать
          </button>
        </PopupWithForm>

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
