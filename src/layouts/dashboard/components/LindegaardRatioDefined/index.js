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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/ivancik.jpg";
import lrimage from "assets/images/lrimage.jpg"

function LindegaardRatioDefined() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.9),
                rgba(gradients.dark.state, 0.9)
              )}, url(${lrimage})`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
              The Lindegaard Ratio
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography variant="body2" color="white">
            Lindegaard ratio (LR): The LR is a calculated value that normalizes the MCA velocity to the ICA. A normal LR is considered &lt;3, mild vasospasm 3.0-4.5, moderate vasospasm 4.5-6.0 and severe vasospasm &gt;6.0.
            </SoftTypography>
          </SoftBox>
          <SoftTypography
            component="a"
            href="https://www.ncbi.nlm.nih.gov/books/NBK570636/#:~:text=Lindegaard%20ratio%20(LR)%3A%20The,true%20vasospasm%20on%20TCD%20study"
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Read More
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

//https://www.ncbi.nlm.nih.gov/books/NBK570636/#:~:text=Lindegaard%20ratio%20(LR)%3A%20The,true%20vasospasm%20on%20TCD%20study.
//Lindegaard ratio (LR): The LR is a calculated value that normalizes the MCA velocity to the ICA. This is calculated by the mean velocity of the MCA divided by the mean velocity of the ICA. This ratio is important for differentiating hyperemia from true vasospasm on TCD study. The idea is if the patient has an elevated velocity on examination, this could be related to hyperemia causing increased velocity. If the MCA is increased at a higher proportion than the ICA, it indicates vasospasm as the source of the elevated velocity. A normal LR is considered < 3, mild vasospasm 3.0-4.5, moderate vasospasm 4.5-6.0 and severe vasospasm >6.0.[11]
//Bonow RH, Young CC, Bass DI, Moore A, Levitt MR. Transcranial Doppler ultrasonography in neurological surgery and neurocritical care. Neurosurg Focus. 2019 Dec 01;47(6):E2. [PubMed] [Reference list]
export default LindegaardRatioDefined;
