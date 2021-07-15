import { useEffect } from "react";
import { useState } from "react";

import "./ViewRowCard.css";

interface IViewRowCardProps {
  row: any;
}

interface IRow {
  firstName: string;
  lastName: string;
  description: string;
  address: { city: string; state: string; streetAddress: string; zip: string };
}

const ViewRowCard: React.FC<IViewRowCardProps> = ({ row }) => {
  const {
    firstName,
    lastName,
    description,
    address: { city, state, streetAddress, zip },
  }: IRow = row;

  const [desc, setDesc] = useState("");
  const textareaHandler = (item: string) => {
    setDesc(item);
  };

  useEffect(() => {
    if (desc !== description) {
      textareaHandler(description);
    }
  }, [description]);

  return (
    <div className="card p-3">
      <p>
        Выбран пользователь{" "}
        <b>
          {firstName} {lastName}
        </b>
      </p>
      <p>Описание:</p>
      <textarea
        value={desc}
        onChange={() => textareaHandler(description)}
      ></textarea>
      <p>
        Адрес проживания: <b>{streetAddress}</b>
      </p>
      <p>
        Город: <b>{city}</b>
      </p>
      <p>
        Провинция/штат: <b>{state}</b>
      </p>
      <p>
        Индекс: <b>{zip}</b>
      </p>
    </div>
  );
};

export default ViewRowCard;
