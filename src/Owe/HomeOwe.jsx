import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ReadOwedDataComp from "./ReadOwedDataComp";
import WriteOwedComp from "./WriteOwedComp";

export default function HomeOwe() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Read" />
        <Tab label="Write" />
      </Tabs>

      {value == 1 ? <WriteOwedComp />  : <ReadOwedDataComp />}
    </>
  );
}
