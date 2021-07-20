import React, { useState } from "react";

export const useNameInput = (init: any) => {
  const [item, setItem] = useState(init);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentValue = e.target.value;

    const regexp = new RegExp(/^[a-zA-Zа-яА-Я ,.'-]+$/i);
    const match = currentValue.match(regexp);

    setItem({ ...item, value: currentValue });

    if (currentValue.length <= 0) {
      setItem({
        ...item,
        value: currentValue,
        error: "Поле не может быть пустым",
        valided: false,
        isDirty: true
      });
    } else {
      if (!match) {
        setItem({
          ...item,
          value: currentValue,
          error: "Некорректный формат",
          valided: false,
          isDirty: true
        });
      }
      if (match) {
        setItem({ ...item, value: currentValue, error: "", valided: true, isDirty: false });
      }
    }
  };

  const resetItem = (detail: boolean) => {
    if (detail === true) {
      setItem({ ...item, value: "", error: "", valided: true });
    }
  };

  const onBlur:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(!item.valided) {
        setItem({...item, isDirty: true})
    } else if (item.value === '') {
        setItem({...item, error: 'Поле не может быть пустым', valided: false, isDirty: true})
    } else {
        setItem({...item, isDirty: false})
    }
}

  return {
    item,
    onChange,
    resetItem,
    onBlur
  };
};
