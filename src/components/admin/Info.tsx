import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ModalProps } from "../../util/interfaces";

const Info = ({ open, onClose, loginedInfo }: ModalProps) => {
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

  return (
    <>
      <dialog ref={dialog} onClose={onClose}>
        <Header>
          <h2>Admin</h2>
          <button onClick={onClose}>X</button>
        </Header>
        <div>
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
        </div>
        <ButtonContainer>
          <button onClick={handleLogout}>logout</button>
        </ButtonContainer>
      </dialog>
    </>
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
