import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

import Info from "./Info.tsx";

const UserIcon = () => {
  const [isUserModalOpen, setIsUSerModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsUSerModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUSerModalOpen(false);
  };
  return (
    <>
      <Info open={isUserModalOpen} onClose={handleCloseModal} />
      <button onClick={handleOpenModal}>
        <BsPersonCircle />
      </button>
    </>
  );
};

export default UserIcon;
