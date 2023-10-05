const handleError = (error: string | { reason: string }) => {
  if (typeof error === 'string') {
    alert(error);
  } else if (Object.prototype.hasOwnProperty.call(error, 'reason')) {
    alert(error.reason);
  }
};

export default handleError;
