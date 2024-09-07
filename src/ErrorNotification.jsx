import React from 'react';

const ErrorNotification = ({ message }) => {
  if (!message) return null;

  return (
    <div className="error-notification">
      <p>{message}</p>
    </div>
  );
};

export default ErrorNotification;
