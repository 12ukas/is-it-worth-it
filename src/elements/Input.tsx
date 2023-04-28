import styled from "styled-components";

const LabelStyles = styled.label`
    color: #9e9e9e;
    font-size: 16px;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    transform: translateX(-1.2rem) translateY(55px);
    transition: all 0.2s ease-in-out;
    text-align: right;
`;

const InputStyles = styled.input`
  color: white;
  font-size: 2rem;
  padding: 0;
  padding-bottom: .3em;
  padding-right: .4rem;
  margin: 0.5em;
  text-align: right;
  width: 12rem;
  background: none;
  border: none;
  border-bottom: 2px solid lightgray;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance:textfield;
  outline: none;

  &:focus + ${LabelStyles},
  &:valid + ${LabelStyles} {
    transform: translateX(-1.2rem) translateY(0);
  }
`;

const FormGroupStyles = styled.div`
    position: relative;
    padding: 20px 0;
    max-width: 100%;
    float: left;
    margin-top: 2rem;
`;

interface InputInterface {
  id?: string;
  value: number;
  label?: string
  step?: string;
  setter: React.Dispatch<React.SetStateAction<number>>;
}

function Input({id, value, label, step, setter}:InputInterface) {
  return <FormGroupStyles>
          <InputStyles
              id={id}
              type="number"
              value={value ? value : ""}
              min="0"
              step={step}
              onChange={
                (e) => {
                  setter(parseFloat(e.currentTarget.value))
                }
              }
              required
          />
          <LabelStyles>{label}</LabelStyles>
  </FormGroupStyles>
}

export default Input;