import React, { useState } from "react";

export const useEmailInput = (init: any) => {
  const [item, setItem] = useState(init);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentValue = e.target.value;

    const regexp = new RegExp(/\S+@\S+\.\S+/);
    const match = currentValue.match(regexp);

    setItem({ ...item, value: currentValue });

    if (currentValue.length <= 0) {
      setItem({
        ...item,
        value: currentValue,
        error: "Поле не может быть пустым",
        valided: false,
      });
    } else {
      if (!match) {
        setItem({
          ...item,
          value: currentValue,
          error: "Некорректный формат",
          valided: false,
        });
      }
      if (match) {
        setItem({ ...item, value: currentValue, error: "", valided: true });
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
