import React from "react";

function Card ({card, onCardClick}) {
    function handleCardClick() {
        onCardClick(card);
    }

    return (
        // <template className='gallery__photos'>
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
        // </template>
    )
}

export default Card;