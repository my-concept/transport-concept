import { ConfirmationButton } from "../ConfirmationButton";

export const DrawerFooter = () => {
  const action = () => console.log("test");
  return <ConfirmationButton buttonAction={action} buttonTitle="Logout" />;
};
