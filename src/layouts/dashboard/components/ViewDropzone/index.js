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

import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import SuiDropzone from "components/SoftDropzone";
import PropTypes from "prop-types";

// <SuiDropzone options={{ addRemoveLinks: true }} />

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Tests/data";
import SuiPagination from "components/SoftPagination";


const styles = {
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "60%",
    height: "60%",
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  dropzoneContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100px",
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
            Tests Performed
          </SoftTypography>
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
