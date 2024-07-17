import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

import Info from "./Info.tsx";

const UserIcon = () => {
  const [isUserModalOpen, setIsUSerModalOpen] = useState(false);
  const admin = localStorage.getItem("login_admin");

  const handleOpenModal = () => {
    setIsUSerModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUSerModalOpen(false);
  };
  return (
    <>
      <Info open={isUserModalOpen} onClose={handleCloseModal} />
      <button onClick={handleOpenModal} disabled={!admin}>
        <BsPersonCircle />
      </button>
    </>
  );
};

export default UserIcon;
