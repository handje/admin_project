import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

import Modal from "./modal";

const UserIcon = () => {
  const [isUserModalOpen, setIsUSerModalOpen] = useState(false);

  const admin = localStorage.getItem("token");
  const loginedInfo = admin ? JSON.parse(admin) : undefined;

  const handleOpenModal = () => {
    setIsUSerModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUSerModalOpen(false);
  };
  return (
    <>
      <Modal
        open={isUserModalOpen}
        onClose={handleCloseModal}
        loginedInfo={loginedInfo}
      />
      <button onClick={handleOpenModal} disabled={!admin}>
        <BsPersonCircle />
      </button>
    </>
  );
};

export default UserIcon;
