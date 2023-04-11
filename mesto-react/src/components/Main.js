import React from "react";
import Card from "./Card";

function Main(props) {
    return (
        <main className='content'>
            <section className='profile'>
                <div className='profile__data'>
                    <div className='profile__pic'>
                        <button
                            className='profile__pic-button'
                            type='button'
                            onClick={props.onEditAvatar}
                        ></button>
                        <img
                            src={props.userAvatar}
                            alt='Ваш аватар'
                            className='profile__pic-avatar'
                            loading='eager'
                        />
                    </div>
                    <div className='profile__text'>
                        <div className='profile__info'>
                            <h1 className='profile__name'>{props.userName}</h1>
                            <button
                                className='profile__edit-button'
                                type='button'
                                aria-label='Редактировать'
                                onClick={props.onEditProfile}
                            ></button>
                        </div>
                        <p className='profile__about'>{props.userDescription}</p>
                    </div>
                </div>
                <button
                    className='profile__add-button'
                    type='button'
                    aria-label='Добавить'
                    onClick={props.onAddPlace}
                ></button>
            </section>
            <section
                className='gallery'
                aria-label='Секция с фотографиями'
            >
                {props.cards.map((card) =>(
                    <Card key={card.cardId}
                        card={card}
                        onCardClick={props.onCardClick} />
                ))}
            </section>

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