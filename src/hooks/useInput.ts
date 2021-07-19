import React, { useState } from "react";

export default function useInput(init: any) {
  const [item, setItem] = useState(init);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setItem(e.target.value);
  };

  return {
    item,
    onChange,
  };
}
