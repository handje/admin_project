import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ModalProps } from "../../util/types";
import { createPortal } from "react-dom";

const Modal = ({ open, onClose, loginedInfo }: ModalProps) => {
  const navigate = useNavigate();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      if (dialog.current === null) return;
      dialog.current.showModal();
    } else {
      if (dialog.current === null) return;
      dialog.current.close();
    }
  }, [open]);

  const handleLogout = () => {
    onClose();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      <Header>
        <h2>Admin</h2>
        <button onClick={onClose}>X</button>
      </Header>
      <Container>
        {loginedInfo ? (
          <>
            <p>NAME : {loginedInfo.name}</p>
            <p>DEPT : {loginedInfo.depart}</p>
            <p>NUM : {loginedInfo.num}</p>
            <p>EMAIL : {loginedInfo.email}</p>
          </>
        ) : (
          <p>no data</p>
        )}
      </Container>
      <ButtonContainer>
        <button onClick={handleLogout}>logout</button>
      </ButtonContainer>
    </dialog>,
    document.getElementById("modal") || document.body
  );
};
const Container = styled.div`
  width: 350px;
  height: 150px;
  font-size: 25px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  & > button {
    font-weight: bold;
    font-size: 20px;
  }
`;
export default Modal;
