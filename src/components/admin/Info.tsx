import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// localStorage.setItem(
//   "login_admin",
//   JSON.stringify({
//     name: "admin",
//     depart: "Dev",
//     num: "DEV011",
//     email: "admin@store.co.kr",
//   })
// );

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Info = ({ open, onClose }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const admin = JSON.parse(localStorage.getItem("login_admin"));
  const [loginAdmin, setLoginAdmin] = useState(admin);

  useEffect(() => {
    if (open) {
      if (dialog.current === null) return;
      dialog.current.showModal();
    } else {
      if (dialog.current === null) return;
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog ref={dialog} onClose={onClose}>
      <Header>
        <h2>Admin</h2>
        <button onClick={onClose}>X</button>
      </Header>
      <div>
        <p>NAME : {loginAdmin.name}</p>
        <p>DEPT : {loginAdmin.depart}</p>
        <p>NUM : {loginAdmin.num}</p>
        <p>EMAIL : {loginAdmin.email}</p>
      </div>
      <ButtonContainer>
        <button>logout</button>
      </ButtonContainer>
    </dialog>
  );
};
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 15px;
  & > button {
    font-weight: bold;
  }
`;
export default Info;
