import React, { useState } from "react"


export const usePhoneInput = (init: any) => {
    const [item, setItem] = useState(init)

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const currentValue = e.target.value;
        
        const maskedValue = currentValue.replace(/(\d{3})(\d{3})(\d{4})/,"($1)$2-$3")

        const regexp = new RegExp(/^\(\d{3}\)\s?\d{3}-\d{4}$/);
        const match = maskedValue.match(regexp)
        
        setItem({...item, value: currentValue});


        if (!currentValue) {
            setItem({...item, value: currentValue, error: 'Поле не может быть пустым', valided: false})
        } else {
            if (match) {
                setItem({...item, value: maskedValue, error: '', valided: true})
            } else {
                if (item.value.length > 12) {
                    setItem({...item, value: maskedValue, error: 'Некорректный формат', valided: false})
                } else {
                    setItem({...item, value: maskedValue, error: 'Некорректный формат', valided: false})
                }
            }
        }
    }

    return{
        item,
        onChange
    }
}