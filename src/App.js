import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactFirebaseImageUploader from "react-firebase-image-upload-control";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHqIm6nHzVI8vs8FabZDRVLk01rHq3puM",
  storageBucket: "gatsby-firebase-simple-a-fbe63.appspot.com"
});

console.log(firebase.apps.length);

const App = (props) => {
  var box2 = document.getElementById("root");

  return (
    <div className="App">
      <h1>React Firebase Image Uploader Test</h1>
      <div style={{ marginTop: 40 }}>
        <div>
          <h4>Vanilla Example</h4>
          {/* <ReactFirebaseImageUploader
            firebaseApp={firebaseApp}
            storageFolder="rfiu-test"
            multiple
          /> */}
        </div>
        <div style={{ marginTop: "40px" }}>
          <h4>Material with Circular Progress Bar Example</h4>
          <ReactFirebaseImageUploader
            firebaseApp={firebaseApp}
            storageFolder="test"
            progressControl={CircularProgressbar}
            checkboxControl={Checkbox}
            buttonControl={Button}
            uploadButtonIcon={CloudUploadIcon}
            removeButtonIcon={DeleteIcon}
            options={{
              styles: {
                imgPreview: { maxWidth: "50px" },
                imgPreviewLabel: { fontSize: "12px" },
                progressControlWrapper: { height: "40px", width: "40px" }
              }
            }}
            uploadCompleteCallback={(statusObj) => {
              console.log(
                "uploadCompleteCallback triggered, and we're done!, statusObj",
                statusObj
              );
              console.log("downloadUrl", statusObj.files[0].downloadUrl);
              box2.insertAdjacentHTML(
                "beforebegin",
                statusObj.files[0].downloadUrl
              );
              <div>{statusObj.files[0].downloadUrl}</div>;
            }}
            multiple
          />
        </div>
      </div>
    </div>
  );
};

export default App;
