interface IFormInputHookProps {
  placeholder: string;
  itemValue: {
    item: {
      value: string;
      error: string;
      valided: boolean;
    };
    onChange: (e: any) => void;
  };
  maxLength: number | any
}

const FormInputHook: React.FC<IFormInputHookProps> = ({ itemValue, placeholder, maxLength }) => {
  const {
    item: { value, error, valided },
    onChange,
  } = itemValue;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "18%" }}>
      <input
        type="text"
        value={value}
        className={
          error && !valided ? "form-control is-invalid" : "form-control"
        }
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      />
      {error && !valided && (
        <p style={{ fontSize: "10px", color: "red" }}>{error}</p>
      )}
    </div>
  );
};

export default FormInputHook;
