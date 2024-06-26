import { useEffect, useRef } from "react";
import styled from "styled-components";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Info = ({ open, onClose }: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  console.log(open);
  useEffect(() => {
    if (open) {
      if (dialog.current === null) return;
      console.log("open");
      dialog.current.showModal();
    } else {
      if (dialog.current === null) return;
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog ref={dialog} onClose={onClose}>
      <Header>
        <h2>User</h2>
        <button onClick={onClose}>X</button>
      </Header>
      <div>
        <p>NAME : Admin</p>
        <p>DEPT : DEV</p>
        <p>NUM : 000000000</p>
        <p>EMAIL : aaa@gamil.com</p>
      </div>
    </dialog>
  );
};
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export default Info;
