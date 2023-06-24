import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const Toaster = ({ data }) => {
  const { message, type, heading } = data;
  const [show, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(!show);
  }, [data]);

  return (
    <ToastContainer position="bottom-end" className="me-2 mb-2">
      <Toast show={show} bg={type} onClose={() => setShowToast(false)}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{heading}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
