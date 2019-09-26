import React, { Fragment } from "react";
import useOnScreen from "./components/IntersectionObserver";
import MainDiv from "./components/MainDiv";
import SecondaryDiv from "./components/SecondaryDiv";

export default () => {
  const [setRef, visible] = useOnScreen({ rootMargin: "-300px" });
  return (
    <Fragment>
      <MainDiv />
      <SecondaryDiv setRef={setRef} visible={visible} />
    </Fragment>
  );
};
