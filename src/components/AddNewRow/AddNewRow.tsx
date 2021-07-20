import { useState } from "react";

import FormInputHook from "../FormInputHook/FormInputHook";

import { useIdInput } from "../../hooks/useIdInput";
import { useNameInput } from "../../hooks/useNameInput";
import { usePhoneInput } from "../../hooks/usePhoneInput";
import { useEmailInput } from "../../hooks/useEmailInput";
import { useEffect } from "react";

interface IAddNewRowProps {
  addNewRow: (item: any) => void;
}

const AddNewRow: React.FC<IAddNewRowProps> = ({ addNewRow }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const id = useIdInput({ value: "", error: "", valided: true, isDirty: true });
  const firstName = useNameInput({ value: "", error: "", valided: true, isDirty: true });
  const lastName = useNameInput({ value: "", error: "", valided: true, isDirty: true });
  const email = useEmailInput({ value: "", error: "", valided: true, isDirty: true });
  const phone = usePhoneInput({ value: "", error: "", valided: true, isDirty: true });
  const [disabledBtn, setDisableBtn] = useState(true)

  useEffect(()=>{
    

    if(
      (id.item.valided === true && id.item.value) &&
      (firstName.item.valided === true && firstName.item.value) &&
      (lastName.item.valided === true && lastName.item.value)&&
      (email.item.valided === true && email.item.value)&&
      (phone.item.valided === true && phone.item.value)
      ){
      setDisableBtn(true)
    }else {
      setDisableBtn(false)
    }
  },[
      id.item.valided, id.item.value, 
      firstName.item.value, firstName.item.valided, 
      lastName.item.valided, lastName.item.value, 
      phone.item.valided, phone.item.value, 
      email.item.valided, email.item.value
    ])

  const addRow = () => {
    const newRow = {
      id: +id.item.value,
      firstName: firstName.item.value,
      lastName: lastName.item.value,
      email: email.item.value,
      phone: phone.item.value,
      description: "",
      address: {
        city: "",
        state: "",
        streetAddress: "",
        zip: "",
      },
    };
    addNewRow(newRow);
    resetForm()
  };

  const resetForm = () => {
    id.resetItem(true);
    firstName.resetItem(true);
    lastName.resetItem(true);
    email.resetItem(true);
    phone.resetItem(true);
  };

  const closeForm = () => {
    setIsOpenForm(false)
    resetForm()
  }

  if (!isOpenForm) {
    return (
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button className="btn btn-primary" onClick={() => setIsOpenForm(true)}>
          Добавить
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "self-start",
      }}
    >
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <FormInputHook itemValue={id} placeholder="Id" maxLength={null} />
        <FormInputHook
          itemValue={firstName}
          placeholder="name"
          maxLength={null}
        />
        <FormInputHook
          itemValue={lastName}
          placeholder="surname"
          maxLength={null}
        />
        <FormInputHook itemValue={email} placeholder="email" maxLength={null} />
        <FormInputHook itemValue={phone} placeholder="phone" maxLength={13} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          className="btn btn-outline-primary"
          style={{ marginBottom: "5px" }}
          onClick={addRow}
          disabled={!disabledBtn}
        >
          Добавить
        </button>
        <button className="btn btn-outline-primary" onClick={closeForm}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default AddNewRow;
