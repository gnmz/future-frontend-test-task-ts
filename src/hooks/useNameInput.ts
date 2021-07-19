import React, { useState } from "react";


export const useNameInput = (init: any) => {
  const [item, setItem] = useState(init);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentValue = e.target.value;

    const regexp = new RegExp(/^[a-zA-Zа-яА-Я ,.'-]+$/i);
    const match = currentValue.match(regexp);

    setItem({...item, value: currentValue});

    if (currentValue.length <= 0) {
        setItem({...item, value: currentValue, error: 'Поле не может быть пустым', valided: false})
    } else {
        if (!match) {
            setItem({...item, value: currentValue, error: 'Некорректный формат', valided: false})
        }
        if (match) {
            setItem({...item, value: currentValue, error: '', valided: true})
        }
    }
    
  };

  return {
    item,
    onChange,
  };
};
