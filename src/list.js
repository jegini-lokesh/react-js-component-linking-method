import { render } from "@testing-library/react";
import React from "react";

const List = () => {
  return (
    <div className="listitem">
      <ul>
        <li>lokesh</li>
        <li>murali</li>
        <li>suresh</li>
        <li>jaga</li>
        <li>vasanth</li>
      </ul>
    </div>
  );
};
export default List;