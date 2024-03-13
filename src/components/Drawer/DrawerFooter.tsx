import { ConfirmationButton } from "../ConfirmationButton";
import { translate } from "../hooks/useTranslate";

export const DrawerFooter = () => {
  const action = () => console.log("test");
  return (
    <ConfirmationButton
      buttonAction={action}
      buttonTitle={translate("logOut")}
    />
  );
};
