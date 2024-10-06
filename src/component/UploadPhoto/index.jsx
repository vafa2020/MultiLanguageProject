import { useTheme } from "@emotion/react";
import { Alert, Box, Button, Card, CardContent, Skeleton, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from "react-image-crop";
import setCanvasPreview from "./setCanvasPreview";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
const MIN_WIDTH = 300;
const aspect = 1 / 1;
const UploadPhoto = ({ setDataUrl, setFileUpload, setActiveStep }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState("");
  const [crop, setCrop] = useState({
    unit: "%", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;
      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_WIDTH || naturalHeight < MIN_WIDTH) {
          setError("image must be at least 300 * 300 pixels.");
          return setImageSrc("");
        }
      });
      setImageSrc(imageUrl);
    });

    reader.readAsDataURL(file);
  };
  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_WIDTH / width) * 100;
    const crop = makeAspectCrop(
      {
        unit: "%", // Can be 'px' or '%'
        width: cropWidthInPercent,
      },
      aspect,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    setFileUpload(new File([u8arr], filename, { type: mime }));
  }
  // console.log("imageRef_current", imageRef.current);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.grey[200],
          padding: "20px",
          display: imageSrc.length > 0 ? "none" : "initial",
        }}
      >
        <CardContent
          sx={{
            backgroundColor: theme.palette.grey[100],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            borderStyle: "dashed",
            borderColor: theme.palette.primary.dark,
          }}
        >
          <Stack gap={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CloudDownloadIcon sx={{ fontSize: "3rem", color: "blue" }} />
            <Alert variant="standard" color="info" sx={{ mb: 1 }}>
              {t("At in part you can select your photo")}
            </Alert>
          </Stack>
          <input
            type="file"
            id="crop"
            accept="image/*"
            onChange={onSelectFile}
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </CardContent>
      </Card>
      {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
      {imageSrc && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 2,
            mt: 1,
          }}
        >
          <ReactCrop crop={crop} keepSelection aspect={aspect} minWidth={MIN_WIDTH} onChange={(c) => setCrop(c)}>
            {imageSrc ? (
              <img
                ref={imageRef}
                src={imageSrc}
                alt="image"
                onLoad={onImageLoad}
                style={{ objectFit: "contain", width: "100%", height: "300px" }}
              />
            ) : (
              <Skeleton variant="rectangular" height="300px" width="300px" />
            )}
          </ReactCrop>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              color="error"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setImageSrc("");
              }}
            >
              {t("Select Photo")}
            </Button>
            <Button
              color="success"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setCanvasPreview(
                  imageRef.current,
                  previewCanvasRef.current,
                  convertToPixelCrop(crop, imageRef.current.width, imageRef.current.height)
                );
                const dataUrl = previewCanvasRef.current.toDataURL();
                dataURLtoFile(dataUrl, "test");
                setDataUrl(dataUrl);
                setActiveStep((prev) => prev + 1);
              }}
            >
              {t("Next Step")}
            </Button>
          </Box>
        </Box>
      )}
      {crop && (
        <canvas
          ref={previewCanvasRef}
          style={{
            marginTop: 2,
            border: "1px solid black",
            objectFit: "contain",
            width: "5px",
            height: "5px",
            opacity: 0,
            position: "absolute",
            left: 0,
          }}
        />
      )}
    </Box>
  );
};

export default UploadPhoto;
