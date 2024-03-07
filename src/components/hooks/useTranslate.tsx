import { FormattedMessage } from "react-intl";

export const UseTranslate = ({ id }: { id: string }) => {
  return <FormattedMessage id={id} />;
};

export const translate = (id: string) => <UseTranslate id={id} />;
