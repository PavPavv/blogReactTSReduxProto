import { Typography } from "@material-ui/core";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps): JSX.Element => {
  return (
    <Typography variant="h1">{title}</Typography>
  );
};

export default PageTitle;