export const useRegistrationRequestCard = () => {
  const handleApprove = () => {
    console.log('approved');
  };
  const handleRefuse = () => {
    console.log('refused');
  };

  return { handleApprove, handleRefuse };
};
