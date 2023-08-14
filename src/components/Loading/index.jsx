import React from "react";
import totoro from "../../assets/images/totorocursor.png";
import { LoadingComponent } from "./styles";

const Loading = () => {
  return (
    <LoadingComponent>
      <img src={totoro} alt="Loading" />
    </LoadingComponent>
  );
};

export default Loading;
