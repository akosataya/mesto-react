import React from "react";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    userName,
    userDescription,
    userAvatar
}) {
    return (
        <main className='content'>
            <section className='profile'>
                <div className='profile__data'>
                    <div className='profile__pic'>
                        <button
                            className='profile__pic-button'
                            type='button'
                            onClick={onEditAvatar}
                        ></button>
                        <img
                            src={userAvatar}
                            alt='Ваш аватар'
                            className='profile__pic-avatar'
                            loading='eager'
                        />
                    </div>
                    <div className='profile__text'>
                        <div className='profile__info'>
                            <h1 className='profile__name'>{userName}</h1>
                            <button
                                className='profile__edit-button'
                                type='button'
                                aria-label='Редактировать'
                                onClick={onEditProfile}
                            ></button>
                        </div>
                        <p className='profile__about'>{userDescription}</p>
                    </div>
                </div>
                <button
                    className='profile__add-button'
                    type='button'
                    aria-label='Добавить'
                    onClick={onAddPlace}
                ></button>
            </section>
            <section
                className='gallery'
                aria-label='Секция с фотографиями'
            ></section>

            {/*Попап открытия фотокарточки*/}
            {/*<div className='popup popup_place-photo'>*/}
            {/*    <div className='popup__photo-container'>*/}
            {/*        <button*/}
            {/*            className='popup__close-button popup__close-photo'*/}
            {/*            type='button'*/}
            {/*        ></button>*/}
            {/*        <figure className='popup__photo-item'>*/}
            {/*            <img*/}
            {/*                className='popup__photo'*/}
            {/*                src='mesto-react/src/components/App#'*/}
            {/*                alt='Фотокарточка'*/}
            {/*            />*/}
            {/*            <figcaption className='popup__photo-caption'></figcaption>*/}
            {/*        </figure>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*Попап подтверждения удаления фотокарточки*/}
            {/*<div className='popup popup_confirm'>*/}
            {/*    <div className='popup__container'>*/}
            {/*        <button*/}
            {/*            className='popup__close-button popup__close-edit'*/}
            {/*            type='button'*/}
            {/*            aria-label='Закрыть'*/}
            {/*        ></button>*/}
            {/*        <h3 className='popup__title-confirm'>Вы уверены?</h3>*/}
            {/*        <form className='popup__form' name='confirm-form' noValidate>*/}
            {/*            <button*/}
            {/*                className='popup__save'*/}
            {/*                type='submit'*/}
            {/*                aria-label='Да'*/}
            {/*            >Да*/}
            {/*            </button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </main>
    )
}

export default Main;