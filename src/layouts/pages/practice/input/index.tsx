// import { useState } from "react";

// // @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// // Material Dashboard 2 PRO React TS components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAlert from "components/MDAlert";
// import MDButton from "components/MDButton";
// import MDSnackbar from "components/MDSnackbar";
// import MDInput from "components/MDInput";
// // Material Dashboard 2 PRO React TS examples components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// function Input() {
//   const [successSB, setSuccessSB] = useState<boolean>(false);
//   const [infoSB, setInfoSB] = useState<boolean>(false);
//   const [warningSB, setWarningSB] = useState<boolean>(false);
//   const [errorSB, setErrorSB] = useState<boolean>(false);

//   const openSuccessSB = () => setSuccessSB(true);
//   const closeSuccessSB = () => setSuccessSB(false);
//   const openInfoSB = () => setInfoSB(true);
//   const closeInfoSB = () => setInfoSB(false);
//   const openWarningSB = () => setWarningSB(true);
//   const closeWarningSB = () => setWarningSB(false);
//   const openErrorSB = () => setErrorSB(true);
//   const closeErrorSB = () => setErrorSB(false);

//   const alertContent = (name: string) => (
//     <MDTypography variant="body2" color="white">
//       A simple {name} alert with{" "}
//       <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
//         an example link
//       </MDTypography>
//       . Give it a click if you like.
//     </MDTypography>
//   );

//   const renderSuccessSB = (
//     <MDSnackbar
//       color="success"
//       icon="check"
//       title="Material Dashboard"
//       content="Hello, world! This is a notification message"
//       dateTime="11 mins ago"
//       open={successSB}
//       onClose={closeSuccessSB}
//       close={closeSuccessSB}
//       bgWhite
//     />
//   );

//   const renderInfoSB = (
//     <MDSnackbar
//       icon="notifications"
//       title="Material Dashboard"
//       content="Hello, world! This is a notification message"
//       dateTime="11 mins ago"
//       open={infoSB}
//       onClose={closeInfoSB}
//       close={closeInfoSB}
//     />
//   );

//   const renderWarningSB = (
//     <MDSnackbar
//       color="warning"
//       icon="star"
//       title="Material Dashboard"
//       content="Hello, world! This is a notification message"
//       dateTime="11 mins ago"
//       open={warningSB}
//       onClose={closeWarningSB}
//       close={closeWarningSB}
//       bgWhite
//     />
//   );

//   const renderErrorSB = (
//     <MDSnackbar
//       color="error"
//       icon="warning"
//       title="Material Dashboard"
//       content="Hello, world! This is a notification message"
//       dateTime="11 mins ago"
//       open={errorSB}
//       onClose={closeErrorSB}
//       close={closeErrorSB}
//       bgWhite
//     />
//   );

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox mt={6} mb={3}>
//         <Grid container spacing={3} justifyContent="center">
//           <Grid item xs={12} lg={8}>
//             <Card>
//               <MDBox p={2}>
//                 <MDTypography variant="h5">Alerts</MDTypography>
//               </MDBox>
//               <MDBox pt={2} px={2}>
//                 <MDAlert color="primary" dismissible>
//                   {alertContent("primary")}
//                 </MDAlert>
//                 <MDAlert color="secondary" dismissible>
//                   {alertContent("secondary")}
//                 </MDAlert>
//                 <MDAlert color="success" dismissible>
//                   {alertContent("success")}
//                 </MDAlert>
//                 <MDAlert color="error" dismissible>
//                   {alertContent("error")}
//                 </MDAlert>
//                 <MDAlert color="warning" dismissible>
//                   {alertContent("warning")}
//                 </MDAlert>
//                 <MDAlert color="info" dismissible>
//                   {alertContent("info")}
//                 </MDAlert>
//                 <MDAlert color="light" dismissible>
//                   {alertContent("light")}
//                 </MDAlert>
//                 <MDAlert color="dark" dismissible>
//                   {alertContent("dark")}
//                 </MDAlert>
//               </MDBox>
//             </Card>
//           </Grid>

//           <Grid item xs={12} lg={8}>
//             <Card>
//               <MDBox p={2} lineHeight={0}>
//                 <MDTypography variant="h5">Notifications</MDTypography>
//                 <MDTypography variant="button" color="text" fontWeight="regular">
//                   Notifications on this page use Toasts from Bootstrap. Read more details here.
//                 </MDTypography>
//               </MDBox>
//               <MDBox p={2}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6} lg={3}>
//                     <MDButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
//                       success notification
//                     </MDButton>
//                     {renderSuccessSB}
//                   </Grid>
//                   <Grid item xs={12} sm={6} lg={3}>
//                     <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
//                       info notification
//                     </MDButton>
//                     {renderInfoSB}
//                   </Grid>
//                   <Grid item xs={12} sm={6} lg={3}>
//                     <MDButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
//                       warning notification
//                     </MDButton>
//                     {renderWarningSB}
//                   </Grid>
//                   <Grid item xs={12} sm={6} lg={3}>
//                     <MDButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
//                       error notification
//                     </MDButton>
//                     {renderErrorSB}
//                   </Grid>
//                   <Grid item xs={12} sm={6} lg={3}>
//                     <Grid item xs={12} sm={3} lg={3}>
//                       <MDInput label="Type here..." multiline rows={5} sx={{ width: "450px" }} />
//                       <MDButton
//                         variant="gradient"
//                         color="success"
//                         onClick={openSuccessSB}
//                         fullWidth
//                         sx={{ width: "100px" }}
//                       >
//                         success notification
//                       </MDButton>
//                       {renderSuccessSB}
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </MDBox>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Input;

import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import FormField from "layouts/pages/users/new-user/components/FormField";

// NewUser page components
// import FormField from "layouts/pages/users/new-user/components/FormField";

function UserInfo({ formData }: any): JSX.Element {
  const { formField, values, errors, touched } = formData;
  const { firstName, lastName, company, email, password, repeatPassword } = formField;
  const {
    firstName: firstNameV,
    lastName: lastNameV,
    company: companyV,
    email: emailV,
    password: passwordV,
    repeatPassword: repeatPasswordV,
  } = values;

  return (
    <MDBox>
      <MDBox lineHeight={0}>
        <MDTypography variant="h5">About me</MDTypography>
        <MDTypography variant="button" color="text">
          Mandatory informations
        </MDTypography>
      </MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={firstName.type}
              label={firstName.label}
              name={firstName.name}
              value={firstNameV}
              placeholder={firstName.placeholder}
              error={errors.firstName && touched.firstName}
              success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={lastName.type}
              label={lastName.label}
              name={lastName.name}
              value={lastNameV}
              placeholder={lastName.placeholder}
              error={errors.lastName && touched.lastName}
              success={lastNameV.length > 0 && !errors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={company.type}
              label={company.label}
              name={company.name}
              value={companyV}
              placeholder={company.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={email.type}
              label={email.label}
              name={email.name}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV.length > 0 && !errors.email}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={password.type}
              label={password.label}
              name={password.name}
              value={passwordV}
              placeholder={password.placeholder}
              error={errors.password && touched.password}
              success={passwordV.length > 0 && !errors.password}
              inputProps={{ autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={repeatPassword.type}
              label={repeatPassword.label}
              name={repeatPassword.name}
              value={repeatPasswordV}
              placeholder={repeatPassword.placeholder}
              error={errors.repeatPassword && touched.repeatPassword}
              success={repeatPasswordV.length > 0 && !errors.repeatPassword}
              inputProps={{ autoComplete: "" }}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default UserInfo;
