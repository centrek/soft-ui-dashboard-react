/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Footer() {
  return (
    <SoftBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SoftBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            
          <SoftBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize="small"
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with
        <SoftBox fontSize="medium" color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </SoftBox>
        by
        
          <SoftTypography fontSize="small" fontWeight="medium">
            &nbsp;Tom & Matt&nbsp;
          </SoftTypography>
      
        for better patient care.
      </SoftBox> 

          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <SoftBox display="flex" justifyContent="center" mt={1} mb={3}>
            <SoftBox mr={3} color="secondary">
            </SoftBox>
            <SoftBox mr={3} color="secondary">
            </SoftBox>
            <SoftBox mr={3} color="secondary">
            </SoftBox>
            <SoftBox mr={3} color="secondary">
            </SoftBox>
            <SoftBox color="secondary">
            </SoftBox>
          </SoftBox>
        </Grid>
        
      </Grid>
    </SoftBox>
  );
}

export default Footer;
