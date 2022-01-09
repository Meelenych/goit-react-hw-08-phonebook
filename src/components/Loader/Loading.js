import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loading.module.css";
export default function Loading() {
  return (
    <Loader
      className={s.Loader}
      type="Puff"
      color="rgb(245, 222, 179)"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
