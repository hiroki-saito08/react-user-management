import { memo, type FC, type ReactNode } from "react";
import { Header } from "../organisms/Layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});
