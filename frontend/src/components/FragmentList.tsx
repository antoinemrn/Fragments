import React from "react";
import FragmentModel from "../models/FragmentModel";
import Fragment from "./Fragment";

interface FragmentListProps {
  fragments: FragmentModel[];
}

const FragmentList = ({ fragments }: FragmentListProps) => {
  return (
    <>
      {fragments.map((x: FragmentModel) => (
        <Fragment fragment={x} key={x.id} />
      ))}
    </>
  );
};
export default FragmentList;
