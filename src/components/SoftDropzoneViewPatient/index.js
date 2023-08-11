import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";
import SoftBox from "components/SoftBox";
import SoftDropzoneRoot from "components/SoftDropzoneViewPatient/SoftDropzoneRoot";

function SoftDropzoneViewPatient({ options, handleFileDrop }) {
  const dropzoneRef = useRef();

  useEffect(() => {
    Dropzone.autoDiscover = false;

    function createDropzone() {
      return new Dropzone(dropzoneRef.current, {
        ...options,
        url: "#",
        autoProcessQueue: false,
      });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz) => dz.destroy());
    }

    const dropzone = createDropzone();

    dropzone.on("addedfile", (file) => {
      handleFileDrop(file);
    });

    return () => removeDropzone();
  }, [options, handleFileDrop]);

  return (
    <SoftDropzoneRoot
      component="form"
      ref={dropzoneRef}
      className="form-control dropzone"
    >
      <SoftBox className="fallback">
        <SoftBox component="input" name="file" type="file" multiple />
      </SoftBox>
    </SoftDropzoneRoot>
  );
}

SoftDropzoneViewPatient.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  setFieldsData: PropTypes.func.isRequired, // Add this line
  setInitialFieldsData: PropTypes.func.isRequired,
};

export default SoftDropzoneViewPatient;
