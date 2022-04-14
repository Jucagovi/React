import React from "react";
import { useParams } from "react-router-dom";

const View = () => {
  console.log("Hoa");
  const params = useParams();
  console.log(params);
  return (
    <React.Fragment>
      <h2>View</h2>
      <h3>{params.id}</h3>
    </React.Fragment>
  );
};

export default View;
