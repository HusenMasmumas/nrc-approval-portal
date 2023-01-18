import React, { FC } from "react";
import { Outlet } from "react-router-dom";
type Props = {
  children?: React.ReactNode;
};

const ContentLayout: FC<Props> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ContentLayout;
