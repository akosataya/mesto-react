import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, onLoading}) {
    const avatarRef = useRef();
    const [input, setInput] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
        className='update'
        isOpen={isOpen}
        title='Обновить аватар'
        onClose={onClose}
        buttontext={onLoading ? 'Сохранение...' : 'Сохранить'}
        onSubmit={handleSubmit}
        >
        <input
            value={input}
            id='avatar-input'
            className='popup__input popup__input_update'
            type='url'
            placeholder='Ссылка на картинку'
            name='avatar'
            required
            ref={avatarRef}
            onChange={evt => setInput(evt.target.value)}
        />
        <span className='popup__text-error avatar-input-error'></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;