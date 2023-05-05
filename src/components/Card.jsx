import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card ({card, onCardClick}) {
    const currentUser = useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Далее в разметке используем переменную для условного рендеринга
    {
        isOwn && <button className='gallery__delete-button' onClick={handleDeleteClick} />
    }

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
    `gallery__like-button ${isLiked && 'gallery__like-button_active'}`
    );

    function handleCardClick() {
        onCardClick(card);
    }

    return (
        <li className='gallery__item' key={card.cardId}>
            <img
                className='gallery__photo'
                alt={card.cardName}
                src={card.cardImg}
                onClick={handleCardClick}
            />
            <div className='gallery__description'>
                <h2 className='gallery__title'>{card.cardName}</h2>
                <div className='gallery__like'>
                    <button
                        className='gallery__like-button'
                        type='button'
                        aria-label='Лайк'
                    ></button>
                    <p className='gallery__like-counter'>{card.cardLikes.length}</p>
                </div>
            </div>
            <button
                className='gallery__delete-button'
                type='button'
                aria-label='Мусорка'
            ></button>
        </li>
    )
}

export default Card;