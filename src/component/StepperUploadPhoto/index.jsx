import { Box, Button, Skeleton, Step, StepLabel, Stepper, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import UploadPhoto from "../UploadPhoto";
import { useTranslation } from "react-i18next";
const steps = ["انتخاب عکس", "آپلود عکس"];
const StepperUploadPhoto = ({ activeStep, setFileUpload, setActiveStep, setImage, handleUpload }) => {
  const [dataUrl, setDataUrl] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();
  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  console.log("dataUrl", dataUrl);

  useEffect(() => {
    setImage(dataUrl);
  }, [dataUrl]);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box
          sx={{
            width: "85%",
            height: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <>
            {activeStep === 0 ? (
              <UploadPhoto setDataUrl={setDataUrl} setFileUpload={setFileUpload} setActiveStep={setActiveStep} />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  height: "100%",
                  mt: 1,
                }}
              >
                <Box sx={{ overflow: "hidden", maxWidth: theme.breakpoints.values.sm }}>
                  {dataUrl ? (
                    <img
                      src={dataUrl}
                      alt="image"
                      style={{ objectFit: "contain", borderRadius: theme.shape.borderRadius }}
                      height="250px"
                    />
                  ) : (
                    <Skeleton variant="rectangular" height="250px" width="500px" />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <Button onClick={handleUpload} color="success">
                    {t("Next Step and Upload")}
                  </Button>
                  <Button onClick={() => setActiveStep((prev) => prev - 1)} color="error">
                    {t("Prev Step")}
                  </Button>
                </Box>
              </Box>
            )}
          </>
        </Box>
      </Box>
    </>
  );
};

export default StepperUploadPhoto;

{
  /* <Box
sx={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
  height: "100%",
  gap: 2,
}}
>
<Box
  sx={{
    borderRadius: "10px",
    overflow: "hidden",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {Image.isLoading || Image.isRefetching ? (
    <Skeleton variant="rectangular" height="250px" width="500px" />
  ) : (
    <img src={Image.data} alt="imageFromServer" height="250px" />
  )}
</Box>
<Box sx={{ display: "flex", justifyContent: "center" }}>
  <Button onClick={handleReset} color="error">
    {t("Select Photo")}
  </Button>
</Box>
</Box> */
}
