import { useState } from "react";

import FormInputHook from "../FormInputHook/FormInputHook";

import { useIdInput } from "../../hooks/useIdInput";
import { useNameInput } from "../../hooks/useNameInput";
import { usePhoneInput } from "../../hooks/usePhoneInput";
import { useEmailInput } from "../../hooks/useEmailInput";

interface IAddNewRowProps {
  addNewRow: (item: any) => void;
}

const AddNewRow: React.FC<IAddNewRowProps> = ({ addNewRow }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const id = useIdInput({ value: "", error: "", valided: true });
  const firstName = useNameInput({ value: "", error: "", valided: true });
  const lastName = useNameInput({ value: "", error: "", valided: true });
  const email = useEmailInput({ value: "", error: "", valided: true });
  const phone = usePhoneInput({ value: "", error: "", valided: true });

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
  };

  const resetForm = () => {
    // id.resetItem(true)
  };

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
        >
          Добавить
        </button>
        <button className="btn btn-outline-primary" onClick={resetForm}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default AddNewRow;
