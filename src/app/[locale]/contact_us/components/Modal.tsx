import React from 'react';
import ClickAwayListener from 'react-click-away-listener';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFollow: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onFollow }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={()=>onClose()}>
    <div className="absolute left-[50%] top-[50%] bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Location Information</h2>
        <p className="mb-4">Would you like to follow this location on Google Maps?</p>
        <div className="flex justify-end">
          <button className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 rounded" onClick={onFollow}>
            Follow
          </button>
        </div>
      </div>
    </div>
    </ClickAwayListener>
  );
};

export default Modal;