import React, {useState} from "react";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from '../utils/Api';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setIsCardPopupOpen(true);
    setSelectedCard(card);
  }

  const closeAllPopups = (evt) => {
    if (
        evt.target.classList.contains('popup_opened') ||
        evt.target.classList.contains('popup__close-button')
    ) {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsCardPopupOpen(false);
    }
  }

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  React.useEffect(() =>{
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([user, cards]) => {
          setUserName(user.name);
          setUserDescription(user.about);
          setUserAvatar(user.avatar);
          setCurrentUser(user);


          setCards([...cards]);
        //       cards.map((card) => ({
        //         cardId: card._id,
        //         cardName: card.name,
        //         cardImg: card.link,
        //         cardLikes: card.likes,
        //         cardOwner: card.owner._id,
        //       }))
        //   )
        })
        .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    const cardId = card._id;
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));
      });
  }

  function handleUpdateUser(newUserInfo) {
    api
      .setNewUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
        setIsEditProfilePopupOpen(false);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              cards={cards}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
          />
          <Footer />

          {/* Edit profile popup */}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          {/* Update profile avatar popup */}
          <PopupWithForm
            className='update'
            isOpen={isEditAvatarPopupOpen}
            title='Обновить аватар'
            onClose={closeAllPopups}
            buttontext='Сохранить'
          >
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
          </PopupWithForm>

          {/* Add place photo popup */}
          <PopupWithForm
            className='add'
            isOpen={isAddPlacePopupOpen}
            title='Новое место'
            onClose={closeAllPopups}
            buttontext='Создать'
          >
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
          </PopupWithForm>

          <ImagePopup
            isOpen={isCardPopupOpen}
            card={selectedCard}
            onClose={closeAllPopups}
          >
          </ImagePopup>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
