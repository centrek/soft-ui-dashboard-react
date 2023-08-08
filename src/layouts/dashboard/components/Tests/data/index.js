// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    
    columns: [
      { name: "RightVessel", align: "center" },
      { name: "Emboli", align: "center" },
      { name: "Mean", align: "center" },
      { name: "PI", align: "center" },
      { name: "Depth", align: "center" },
      { name: "HPV", align: "center" },
      { name: "Left Vessel", align: "center" },
      { name: "Emboli", align: "center" },
      { name: "Mean", align: "center" },
      { name: "PI", align: "center" },
      { name: "Depth", align: "center" },
      { name: "HPV", align: "center" },
    ],

    rows: [
      {
        RightVessel: (
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
        RightVessel: (
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
        RightVessel: (
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
        RightVessel: (
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
        RightVessel: (
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
        RightVessel: (
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
