import React from "react";
// import styled from "styled-components";
// import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import TextField from "@mui/material/TextField";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Card from "layouts/applications/kanban/components/Card";
import FormField from "layouts/pages/account/components/FormField";
import { Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(" ~ file: Registration.jsx ~ line 11 ~ Registration ~ values", values);
      action.resetForm();
    },
  });
  console.log("🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors", errors);

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type="name"
              label="Name"
              name="name"
              value={values.name}
              placeholder="Enter Your Name"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && touched.name}
              success={values.name.length && !errors.name}
            />
            {errors.name && touched.name ? (
              // <p className="form-error">{errors.name}</p>
              <MDTypography variant="caption" fontWeight="regular" color="error">
                {errors.name}
              </MDTypography>
            ) : null}
          </Grid>
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Registration;
