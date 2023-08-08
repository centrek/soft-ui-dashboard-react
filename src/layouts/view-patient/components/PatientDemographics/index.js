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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import MiniStatisticsCardIconLeft from "examples/Cards/StatisticsCards/MiniStatisticsCardIconLeft";
import MiniStatisticsCardNoIcon from "examples/Cards/StatisticsCards/MiniStatisticsCardNoIcon";


// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function BuildByDevelopers() {
  return (
    <Card>
              <SoftBox py={3}>

        <SoftBox mb={3}>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MiniStatisticsCardIconLeft
                title={{ text: "Patient Name" }}
                count="LASTNAME, FIRSTNAME"
                percentage={{ color: "info", text: "03/05/1947 (76years)" }}
                icon={{ color: "info", component: "sick" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCardNoIcon
                title={{ text: "Date of SAH" }}
                count="07/24/2023"
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCardNoIcon
                title={{ text: "Date of Surgery" }}
                count="07/2/2023"
              />
            </Grid>
          </Grid>
        </SoftBox>
        </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
