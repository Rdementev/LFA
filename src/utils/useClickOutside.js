import { useEffect } from "react";


export const useOnClickOutside = (ref, buttonRef=null, handler) => {
    useEffect(
        () => {
            const listener = event => {
                if ( (!ref.current || ref.current.contains(event.target)) // если не модалка или модалка не содержит event.target
                    || (buttonRef && (!buttonRef?.current || buttonRef?.current.contains(event.target)) ) // если не кнопка всплытия модалки или кнопка не содержит event.target
                ) {
                    return;
                }
                handler(event);
            };
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },[ref, handler, buttonRef]);
}

