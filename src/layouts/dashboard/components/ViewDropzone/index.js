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

import React, { useState, use } from "react";
import Modal from "@mui/material/Modal";
import SuiDropzone from "components/SoftDropzoneViewPatient";
import PropTypes from "prop-types";

// <SuiDropzone options={{ addRemoveLinks: true }} />

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";



const styles = {
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "100%",
    height: "100%",
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  dropzoneContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    border: "2px dashed #ccc",
  },
};


function ViewDropzone({ open, onClose, onFileUpload }) {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      // Handle file upload here
      setFileUploaded(true);
      onFileUpload(acceptedFiles[0]);
    }
  };

  const handleCloseModal = () => {
    setFileUploaded(false);
    onClose();
  };
  ViewDropzone.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onFileUpload: PropTypes.func.isRequired,
  };

  return (
    <Modal open={open} onClose={handleCloseModal} style={styles.modal}>
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>

          <SoftTypography variant="h6" gutterBottom>
            <SuiDropzone options={{ addRemoveLinks: true }} />
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
    </Modal>
  );
}

export default ViewDropzone;
