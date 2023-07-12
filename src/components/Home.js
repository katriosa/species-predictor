import React, { useState } from "react";
import HomeStyles from "./HomeStyles";
import * as settings from "../settings";
import axios from "axios";
import { connect } from "react-redux";

function Home(props) {
  console.log(props); //только isAuthenticated: false
  // React hook state variable - Dimensions
  const [dimensions, setDimensions] = useState({
    sepal_length: 6,
    sepal_width: 0,
    petal_length: 0,
    petal_width: 0,
  });
  // React hook state variable - Prediction
  const [prediction, setPrediction] = useState(null);

  // Function to update the Dimensions state upon slider value change
  const handleSliderChange = (name) => (event, newValue) => {
    setDimensions({
      ...dimensions,
      ...{ [name]: newValue },
    });
  };

  // Function to make the predict API call and update the state variable - Prediction
  const handlePredict = (event) => {
    // Submit Iris Flower measured dimensions as form data
    let irisFormData = new FormData();
    irisFormData.append("sepal length (cm)", dimensions.sepal_length);
    irisFormData.append("sepal width (cm)", dimensions.sepal_width);
    irisFormData.append("petal length (cm)", dimensions.petal_length);
    irisFormData.append("petal width (cm)", dimensions.petal_width);

    //Axios variables required to call the predict API
    let headers = { Authorization: `Token ${props.token}` };
    let url = settings.API_SERVER + "/api/predict/";
    let method = "post";
    let config = { headers, method, url, data: irisFormData };

    //Axios predict API call
    axios(config)
      .then((res) => {
        setPrediction(res.data["Predicted Iris Species"]);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <HomeStyles
        handleSliderChange={handleSliderChange}
        handlePredict={handlePredict}
        prediction={prediction}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(Home);
