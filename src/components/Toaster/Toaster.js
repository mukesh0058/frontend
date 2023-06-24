import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const Toaster = ({ data }) => {
  const { message, type } = data;
  

  return (
    <ToastContainer position="bottom-end" className="me-2 mb-2">
      <Toast show={!!data} bg={type.toLowerCase()}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{type}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
