import React from "react";
import { Typography, Slider, Button, Box } from "@mui/material";

function HomeStyles({ handleSliderChange, handlePredict, prediction }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <Box
        display="flex"
        flexDirection={"row"}
        flex={0.8}
        bgcolor="lightgrey"
        borderRadius={2}
        p={2}
        my={2}
      >
        <Box display="flex" flexDirection={"column"} flex={1}>
          <Box bgcolor="white" borderRadius={2} p={2} paddingLeft={5} mb={2}>
            <Typography variant="h5" align="left" color="primary">
              Iris Flower Dimensions
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            py={2}
            px={5}
            bgcolor="white"
            borderRadius={2}
          >
            <Box flex={1} width={"100%"}>
              <Typography variant="subtitle1" mb={4}>
                Sepal length (cm)
              </Typography>
              <Slider
                defaultValue={6}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="on"
                color="secondary"
                sx={{
                  "& .MuiSlider-valueLabel": {
                    background: "transparent",
                    color: "black",
                  },
                }}
                onChange={handleSliderChange("sepal_length")}
              />
            </Box>
            <Box flex={1} width={"100%"}>
              <Typography variant="subtitle1" mb={4}>
                Sepal width (cm)
              </Typography>
              <Slider
                defaultValue={0}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="on"
                color="secondary"
                sx={{
                  "& .MuiSlider-valueLabel": {
                    background: "transparent",
                    color: "black",
                  },
                }}
                onChange={handleSliderChange("sepal_width")}
              />
            </Box>
            <Box flex={1} width={"100%"}>
              <Typography variant="subtitle1" mb={4}>
                Petal length (cm)
              </Typography>
              <Slider
                defaultValue={0}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="on"
                color="secondary"
                sx={{
                  "& .MuiSlider-valueLabel": {
                    background: "transparent",
                    color: "black",
                  },
                }}
                onChange={handleSliderChange("petal_length")}
              />
            </Box>
            <Box flex={1} width={"100%"}>
              <Typography variant="subtitle1" mb={4}>
                Petal width (cm)
              </Typography>
              <Slider
                defaultValue={0}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="on"
                color="secondary"
                sx={{
                  "& .MuiSlider-valueLabel": {
                    background: "transparent",
                    color: "black",
                  },
                }}
                onChange={handleSliderChange("petal_width")}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flex={1}
          flexDirection="row"
          paddingLeft={5}
          justifyContent={"space-between"}
        >
          <Box display="flex" alignItems="center">
            <Button variant="contained" color="primary" onClick={handlePredict}>
              Predict
            </Button>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body1"
              bgcolor={"white"}
              py={2}
              px={4}
              borderRadius={2}
              m={2}
              textAlign={"center"}
              color="primary"
            >
              Predicted Iris Species:{" "}
              <span style={{ fontWeight: "bold" }}>
                {/* value */}
                {prediction}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeStyles;
