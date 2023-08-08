// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";


export default function data() {


  return {
    
    columns: [
      { id: "rightvessel", name: "Vessel", align: "center"},
      { id: "rightemboli", name: "Emboli", align: "center" },
      { id: "rightmean",  name: "Mean", align: "center" },
      { id: "rightpi",  name: "PI", align: "center" },
      { id: "rightdepth",  name: "Depth", align: "center" },
      { id: "righthpv",  name: "HPV", align: "center" },
      { id: "leftvessel", name: "Vessel", align: "center"},
      { id: "leftemboli", name: "Emboli", align: "center" },
      { id: "leftmean",  name: "Mean", align: "center" },
      { id: "leftpi",  name: "PI", align: "center" },
      { id: "leftdepth",  name: "Depth", align: "center" },
      { id: "lefthpv",  name: "HPV", align: "center" },
    ],

    rows: [
      {
        Vessel: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            M1
          </SoftTypography>
        ),
        Emboli: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            -
          </SoftTypography>
        ),
        Mean: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            31
          </SoftTypography>
        ),
        PI: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            1.7
          </SoftTypography>
        ),
        Depth: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            51
          </SoftTypography>
        ),
        HPV: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            90
          </SoftTypography>
        ),
      },

      {
        Vessel: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            M2
          </SoftTypography>
        ),
        Emboli: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            -
          </SoftTypography>
        ),
        Mean: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            34
          </SoftTypography>
        ),
        PI: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            0.7
          </SoftTypography>
        ),
        Depth: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            42
          </SoftTypography>
        ),
        HPV: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            50
          </SoftTypography>
        ),
      },

      {
        Vessel: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            A1
          </SoftTypography>
        ),
        Emboli: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            -
          </SoftTypography>
        ),
        Mean: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            46
          </SoftTypography>
        ),
        PI: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            1.3
          </SoftTypography>
        ),
        Depth: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            68
          </SoftTypography>
        ),
        HPV: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            85
          </SoftTypography>
        ),
      },

      {
        Vessel: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            C1
          </SoftTypography>
        ),
        Emboli: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            -
          </SoftTypography>
        ),
        Mean: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            40
          </SoftTypography>
        ),
        PI: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            1.4
          </SoftTypography>
        ),
        Depth: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            62
          </SoftTypography>
        ),
        HPV: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            85
          </SoftTypography>
        ),
      },

      {
        Vessel: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            ICA EXT
          </SoftTypography>
        ),
        Emboli: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            -
          </SoftTypography>
        ),
        Mean: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            19
          </SoftTypography>
        ),
        PI: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            0.9
          </SoftTypography>
        ),
        Depth: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            40
          </SoftTypography>
        ),
        HPV: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            31
          </SoftTypography>
        ),
      },

      {
        Vessel: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            VA
          </SoftTypography>
        ),
        Emboli: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            -
          </SoftTypography>
        ),
        Mean: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            22
          </SoftTypography>
        ),
        PI: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            0.9
          </SoftTypography>
        ),
        Depth: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            68
          </SoftTypography>
        ),
        HPV: (
          <SoftTypography variant="button" color="text" fontWeight="bold">
            33
          </SoftTypography>
        ),
      },
      
    ],
  };
}