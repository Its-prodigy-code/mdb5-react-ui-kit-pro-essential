import React, { useState } from "react";
import { MDBSelect, MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  const [selectData, setSelectData] = useState([
    { text: "One", value: 1 },
    { text: "Two", value: 2 },
    { text: "Three", value: 3, selected: true },
    { text: "Four", value: 4 },
    { text: "Five", value: 5 },
    { text: "Six", value: 6 },
    { text: "Seven", value: 7 },
    { text: "Eight", value: 8 },
  ]);
  return (
    <>
      <MDBSelect data={selectData} />
      <MDBBtn
        onClick={() =>
          setSelectData([
            { text: "xd", value: 11 },
            { text: "xdd", value: 22 },
            { text: "xddd", value: 73, selected: true },
            { text: "xdddd", value: 81 },
          ])
        }
      >
        Click
      </MDBBtn>
    </>
  );
}
