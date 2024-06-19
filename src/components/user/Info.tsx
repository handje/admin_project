import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
const Modal = styled.dialog`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 30%;
`;
const Info = forwardRef<HTMLDialogElement>(({ title }, ref) => {
  return (
    <dialog ref={ref}>
      <div>
        <button
          onClick={() => {
            ref.current.close();
          }}
        >
          X
        </button>
        <h2>Info</h2>
      </div>
      <div>
        <p>This is user's info</p>
        <p>This is user's info</p>
      </div>
    </dialog>
  );
});

export default Info;
