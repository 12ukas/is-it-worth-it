interface InputInterface {
  id?: string;
  value?: number;
  step?: string;
  setter: React.Dispatch<React.SetStateAction<number>>;
}

function Input({id, value, step, setter}:InputInterface) {
  return <input
            id={id}
            type="number"
            value={value}
            className=""
            min="0"
            step={step}
            onChange={
              (e) => {
                setter(parseFloat(e.currentTarget.value))
              }
            }
          />;
}

export default Input;