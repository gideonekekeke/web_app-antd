import { Button } from "antd";
import React from "react";

import { useHistory } from "react-router-dom";

function Enter() {
  const history = useHistory();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "poppins",
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "600px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 10px",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <div style={{ fontSize: "20px" }}>SUCCESSFULL 👍</div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "poppins",
            width: "400px",
          }}
        >
          YOUR PRODUCT WILL BE DELIVERED IN TWO DAYS
        </div>
        <div>Thanks for patronizing me...</div>
        <Button
          onClick={() => {
            history.push("/");
          }}
          style={{ marginTop: "50px" }}
        >
          GO BACK HOME
        </Button>
      </div>
    </div>
  );
}

export default Enter;
