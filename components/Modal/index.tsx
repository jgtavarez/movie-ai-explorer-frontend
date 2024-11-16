"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DeleteIcon } from "../Icons";

interface Props {
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Modal = ({ title, description, onCancel, onConfirm }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = async () => {
    setIsProcessing(true);
    try {
      await onConfirm();
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        // Overlay
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          {/* Modal */}
          <div className="w-full bg-white inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <DeleteIcon />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p
                      className="text-sm text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                disabled={isProcessing}
                onClick={handleConfirm}
                type="button"
                className="disabled:bg-gray-400 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Confirm
              </button>
              <button
                disabled={isProcessing}
                onClick={onCancel}
                type="button"
                className="disabled:bg-gray-100 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>,
        ref.current as Element
      )
    : null;
};
