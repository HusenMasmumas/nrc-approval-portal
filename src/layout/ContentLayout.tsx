import React, { FC } from "react";
import { Outlet } from "react-router-dom";
type Props = {
  children?: React.ReactNode;
};

const ContentLayout: FC<Props> = () => {
  return (
    <div className=" mt-10">
      <Outlet />
    </div>
  );
};

export default ContentLayout;
