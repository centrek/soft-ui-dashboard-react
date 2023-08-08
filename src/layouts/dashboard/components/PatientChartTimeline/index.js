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
import Icon from "@mui/material/Icon";
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Patient Chart Timeline
        </SoftTypography>

      </SoftBox>
      <SoftBox p={2}>
        <TimelineItem
          color="success"
          icon="hail"
          title="Patient Discharged to Home"
          dateTime="03 AUG 7:20 PM"
        />
        <TimelineItem
          color="info"
          icon="poweroff"
          title="TCD Orders Discontinued"
          dateTime="03 AUG 7:20 PM"
        />
        <TimelineItem
          color="secondary"
          icon="spatialtracking"
          title="TCD Performed by Mark McGee"
          dateTime="02 AUG 9:04 AM"
        />
        <TimelineItem
          color="secondary"
          icon="spatialtracking"
          title="TCD Performed by Haley Hutchins"
          dateTime="01 AUG 7:34 AM"
        />
        <TimelineItem
          color="secondary"
          icon="spatialtracking"
          title="TCD Performed by Mark McGee"
          dateTime="31 JUL 7:51 AM"
        />
        <TimelineItem
          color="secondary"
          icon="spatialtracking"
          title="TCD Performed by Mark McGee"
          dateTime="30 JUL 8:54 AM"
        />
        <TimelineItem
          color="error"
          icon="sick"
          title="Patient Record Created"
          dateTime="29 JUL 8:54 AM"
        />
        <TimelineItem color="dark" icon="addchart" title="Initialization #9583120" dateTime="29 JUL 2023" />
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
