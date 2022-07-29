import { Alert } from 'antd';
import React from 'react';

const AlertModal = ({message,visible, setVisible}) => {

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {visible ? (
        <Alert message={message} type="success" closable afterClose={handleClose} />
      ) : null}
      <p></p>
    </div>
  );
};

export default AlertModal;