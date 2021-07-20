import React, { useState } from "react";


export const useIdInput = (init: any) => {
    const [item, setItem] = useState(init);


    const onChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const currentValue = e.target.value;
        setItem({...item, value: currentValue})

        if (!currentValue) {
            setItem({...item, value: currentValue, error: 'Поле не может быть пустым', valided: false})
        } else {
            if (typeof currentValue !== 'number') {
                setItem({...item, value: currentValue, error: 'Некорректный ввод', valided: false })
            }
            if (+currentValue) {
                setItem({...item, value: currentValue, error: '', valided: true})
            }
        }
    }

    const resetItem = (detail: boolean) => {
        if(detail === true){
            setItem({...item, value: '', error: '', valided: true})
        }
    }

    return{
        item,
        onChange,
        resetItem
    }
};
