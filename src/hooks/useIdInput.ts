import React, { useState } from "react";


export const useIdInput = (init: any) => {
    const [item, setItem] = useState(init);


    const onChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const currentValue = e.target.value;
        setItem({...item, value: currentValue})

        if (!currentValue) {
            setItem({...item, value: currentValue, error: 'Поле не может быть пустым', valided: false, isDirty: true})
        } else {
            if (typeof currentValue !== 'number') {
                setItem({...item, value: currentValue, error: 'Некорректный ввод', valided: false, isDirty: true })
            }
            if (+currentValue) {
                setItem({...item, value: currentValue, error: '', valided: true ,isDirty: false})
            }
        }
    }

    const resetItem = (detail: boolean) => {
        if(detail === true){
            setItem({...item, value: '', error: '', valided: true})
        }
    }

    const onBlur:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(!item.valided) {
            setItem({...item, isDirty: true})
        } else if (item.value === '') {
            setItem({...item, error: 'Поле не может быть пустым', valided: false, isDirty: true})
        } else {
            setItem({...item, isDirty: false})
        }
    }

    return{
        item,
        onChange,
        resetItem,
        onBlur
    }
};
