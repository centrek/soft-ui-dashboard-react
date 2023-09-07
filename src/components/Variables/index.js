// variables.js

// Vessel details function
export function vesselDetails() {
    return {
        emboli: "",
        mean: "",
        pvsys: "",
        etdial: "",
        notch: "",
        depth: "",
        pi: ""
    };
}

// Vessel object function
export function vesselObject() {
    return {
        M1: vesselDetails(),
        M2: vesselDetails(),
        A1: vesselDetails(),
        C1: vesselDetails(),
        P1: vesselDetails(),
        P2: vesselDetails(),
        OA: vesselDetails(),
        ICAC3: vesselDetails(),
        ICAC4: vesselDetails(),
        ICAEXT: vesselDetails(),
        VA: vesselDetails(),
    };
}

// Initialize patient state
export let patientState = {
    id: "",
    type: "",
    name: "",
    patient: {
        Hospital: "",
        Physician: "",
        DateOfSAH: "",
        DateOfOR: "",
        Name: {
            First: "",
            Middle: "",
            Last: ""
        },
        DOB: "",
        Race: "",
        Gender: "",
        MRN: 0,
        FIN: 0,
        Test: [
            {
                testId: "",
                testType: "",
                testDateTime: "",
                TestStart: "",
                TestEnd: "",
                CDSID: "",
                DayNumber: "",
                Provider: {
                    Provider: "",
                    Role: ""
                },
                Location: {
                    Department: "",
                    Room: ""
                },
                Vitals: {
                    HR: "",
                    MAP: "",
                    PaCO2: "",
                    ICP: "",
                    Hct: "",
                    Temp: ""
                },
                ClinicalObservations: "",
                Vessels: {
                    Right: vesselObject(),
                    Left: vesselObject(),
                    Basilar: vesselDetails()
                }
            }
        ]
    }
};

// Populate patient state with data
export function populatePatientState(data) {
    patientState = { ...patientState, ...data };
}

export function assignPatientVariables(patientData) {
    if (patientData) {
      patientState.patient.Hospital = patientData.Hospital || '';
      patientState.patient.Physician = patientData.Physician || '';
      patientState.patient.DateOfSAH = patientData.DateOfSAH || '';
      patientState.patient.DateOfOR = patientData.DateOfOR || '';
      patientState.patient.Name.First = patientData.Name.First || '';
      patientState.patient.Name.Middle = patientData.Name.Middle || '';
      patientState.patient.Name.Last = patientData.Name.Last || '';
      patientState.patient.DOB = patientData.DOB || '';
      patientState.patient.Race = patientData.Race || '';
      patientState.patient.Gender = patientData.Gender || '';
      patientState.patient.MRN = patientData.MRN || null;
      patientState.patient.FIN = patientData.FIN || null;
      
      // Assuming the Test data in the patientData is an array,
      // you can use a loop to iterate over it and update the Test section accordingly
      patientData.Test.forEach((testData, index) => {
          if (!patientState.patient.Test[index]) {
              patientState.patient.Test.push({});  // Add new Test object if it doesn't exist
          }
          
          patientState.patient.Test[index] = { ...patientState.patient.Test[index], ...testData };
      });
    }
}
