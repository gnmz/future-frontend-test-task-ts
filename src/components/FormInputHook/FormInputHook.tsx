interface IFormInputHookProps {
  placeholder: string;
  itemValue: {
    item: {
      value: string;
      error: string;
      valided: boolean;
      isDirty: boolean;
    };
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
  };
  maxLength: number | any
}

const FormInputHook: React.FC<IFormInputHookProps> = ({ itemValue, placeholder, maxLength }) => {
  const {
    item: { value, error, valided, isDirty },
    onChange,
    onBlur
  } = itemValue;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
      <input
        type="text"
        value={value}
        className={
          (error && !valided) || (isDirty && error) ? "form-control is-invalid" : "form-control"
        }
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        onBlur={onBlur}
      />
      {((error && !valided)|| isDirty) && (
        <p style={{ fontSize: "10px", color: "red" }}>{error}</p>
      )}
    </div>
  );
};

export default FormInputHook;
