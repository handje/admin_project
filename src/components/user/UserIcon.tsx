import { useRef } from "react";
import { BsPersonCircle } from "react-icons/bs";

import { Info } from ".";

const UserIcon = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current === null) return;
    dialogRef.current.showModal();
  };

  return (
    <>
      <Info ref={dialogRef} />
      <button onClick={openDialog}>
        <BsPersonCircle />
      </button>
    </>
  );
};

export default UserIcon;
