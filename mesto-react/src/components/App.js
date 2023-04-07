import '../index.css';
import logoPath from '../images/header-logo.svg';

function App() {
  return (
    <div className='App'>
      <body className='page'>
        <header className='header'>
          <img
              src={logoPath}
              alt='Логотип'
              className='header__logo'
              loading='eager'
          />
        </header>
        <main className='content'>
          <section className='profile'>
            <div className='profile__data'>
              <div className='profile__pic'>
                <button
                    className='profile__pic-button'
                    type='button'
                ></button>
                <img
                    src="<%=require('./images/profile-image.jpeg')%>"
                    alt='Ваш аватар'
                    className='profile__pic-avatar'
                    loading='eager'
                />
              </div>
              <div className='profile__text'>
                <div className='profile__info'>
                  <h1 className='profile__name'>Жак-Ив Кусто</h1>
                  <button
                      className='profile__edit-button'
                      type='button'
                      aria-label='Редактировать'
                  ></button>
                </div>
                <p className='profile__about'>Исследователь океана</p>
              </div>
            </div>
            <button
                className='profile__add-button'
                type='button'
                aria-label='Добавить'
            ></button>
          </section>
          <section
              className='gallery'
              aria-label='Секция с фотографиями'
          ></section>
        </main>
        <footer className='footer'>
          <p className='footer__copyright'>&copy;&nbsp;2022 Mesto Russia &amp;&nbsp;Анастасия Косатая</p>
        </footer>
        <div className='popup popup_edit'>
          <div className='popup__container'>
            <button
                className='popup__close-button popup__close-edit'
                type='button'
                aria-label='Закрыть'
            ></button>
            <h3 className='popup__title'>Редактировать профиль</h3>
            <form className='popup__form popup__edit-form' name='edit-form' noValidate>
              <input
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
            </form>
          </div>
        </div>
        <div className='popup popup_update'>
          <div className='popup__container'>
            <button
                className='popup__close-button popup__close-update'
                type='button'
                aria-label='Закрыть'
            ></button>
            <h3 className='popup__title'>Обновить аватар</h3>
            <form className='popup__form popup__update-form' name='update-form' noValidate>
              <input
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
            </form>
          </div>
        </div>
        <div className='popup popup_add'>
          <div className='popup__container'>
            <button
                className='popup__close-button popup__close-add'
                type='button'
                aria-label='Закрыть'
            ></button>
            <h3 className='popup__title'>Новое место</h3>
            <form className='popup__form popup__add-form' name='add-form' noValidate>
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
            </form>
          </div>
        </div>
        <div className='popup popup_place-photo'>
          <div className='popup__photo-container'>
            <button
                className='popup__close-button popup__close-photo'
                type='button'
            ></button>
            <figure className='popup__photo-item'>
              <img
                  className='popup__photo'
                  src='mesto-react/src/components/App#'
                  alt
              />
              <figcaption className='popup__photo-caption'></figcaption>
            </figure>
          </div>
        </div>
        <div className='popup popup_confirm'>
          <div className='popup__container'>
            <button
                className='popup__close-button popup__close-edit'
                type='button'
                aria-label='Закрыть'
            ></button>
            <h3 className='popup__title-confirm'>Вы уверены?</h3>
            <form className='popup__form' name='confirm-form' noValidate>
              <button
                  className='popup__save'
                  type='submit'
                  aria-label='Да'
              >Да
              </button>
            </form>
          </div>
        </div>
        <template className='gallery__photos'>
          <li className='gallery__item'>
            <img className='gallery__photo' />
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
      </body>
    </div>
  );
}

export default App;
