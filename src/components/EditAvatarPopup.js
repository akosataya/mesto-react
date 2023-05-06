import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, onLoading}) {
    const avatarRef = useRef();

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
            defaultValue=''
            id='avatar-input'
            className='popup__input popup__input_update'
            type='url'
            placeholder='Ссылка на картинку'
            name='avatar'
            required
            ref={avatarRef}
        />
        <span className='popup__text-error avatar-input-error'></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;