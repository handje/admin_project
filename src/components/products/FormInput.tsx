import { styled } from "styled-components";

interface LabelProps {
  id: string;
  name: string;
  type?: string;
  defaultValue?: string | number;
  step?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const FormInput = ({ children, id, ...props }: LabelProps) => {
  return (
    <CustomInput>
      <label htmlFor={id}>{id.toUpperCase()}</label>
      {children ? children : <input id={id} {...props} required />}
    </CustomInput>
  );
};

export default FormInput;

const CustomInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > label {
    font-size: 15px;
    font-weight: 600;
    margin-right: 10px;
  }
  & > input {
    width: 70%;
    padding: 5px 10px;
    font-size: 15px;
    border: 2px solid ${({ theme }) => theme.colors.border300};
  }
  & > select {
    width: fit-content;
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.colors.border300};
  }
`;
