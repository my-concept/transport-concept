import { FormattedMessage, useIntl } from "react-intl";

export const UseTranslate = ({ id }: { id: string }) => {
  return <FormattedMessage id={id} />;
};

export const translate = (id: string) => {
  const intl = useIntl();
  return intl.formatMessage({ id: id });
};
