import React from "react";
// Material Dashboard 2 React Components
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
const Btn = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <p>hjuerql</p>
      <MDInput type="text" label="Text" value="John Smith" />
      <MDInput type="search" label="Search" value="Creative Tim" />
      <MDInput type="email" label="Email" value="someone@example.com" />
      <MDInput type="url" label="URL" value="www.creative-tim.com" />
      <MDInput type="tel" label="Phone" value="40-(770)-888-444" />
      <MDInput type="password" label="Password" value="password" />
      <MDInput type="number" label="Number" value="123456789" />
      <MDInput type="datetime" label="Date time" value="2018-11-23T10:30:00" />
      <MDInput type="date" label="Date" value="2018-11-23" />
      <MDInput type="month" label="Month" value="2018-11" />
      <MDInput type="week" label="Week" value="2018-W23" />
      <MDInput type="time" label="Time" value="10:30:00" />
      <MDInput type="color" label="Color" value="#17c1e8" />
      <div>
        <MDInput variant="outlined" label="Type here..." />
      </div>
      <MDButton variant="gradient" color="info">
        <Icon>favorite</Icon>&nbsp; Button
      </MDButton>
      <MDInput label="Type here..." multiline rows={5} />

      <MDButton variant="gradient" color="info">
        <Icon>favorite</Icon>
      </MDButton>

      <MDButton variant="gradient" color="info" iconOnly>
        <Icon>favorite</Icon>
      </MDButton>
    </div>
  );
};

export default Btn;
