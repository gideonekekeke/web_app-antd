import React from "react";
import picture from "../img/un2.svg";
import back from "../img/f1.gif";
import side from "../img/s1.gif";
import "./style.css";
import Sellingcards from "./Sellingcards";

function Body() {
  return (
    <div>
      <div
        style={{
          height: "900px",
          fontFamily: "poppins",
          width: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",

            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "20px",
              justifyContent: "space-around",
              marginRight: "90px",
              width: "1900px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "50px",
                marginTop: "40px",
              }}
            >
              <h2> HELLO GIDEON, </h2>
              <h2
                style={{
                  marginLeft: "160px",
                  color: "#09c09e",
                  fontFamily: "italic",
                  marginTop: "-43PX",
                }}
              >
                GOOD MORNING
              </h2>
              <h3 style={{ width: "300px", fontWeight: "300" }}>
                Here is what is happening in your store today
              </h3>
            </div>

            <img
              style={{
                height: "300px",
                marginTop: "-20px",
                marginLeft: "200px",
              }}
              src={picture}
            />
          </div>
          <div
            className="trail"
            style={{
              height: "70px",
              width: "500px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              marginTop: "px",
              flexWrap: "wrap",
              marginLeft: "65px",
              marginTop: "-100px",
            }}
          >
            <div
              className="trail"
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: "bold", color: "#09C09E" }}>
                $40, 000
                <div>Today's sales</div>
              </div>
              <div style={{ fontWeight: "bold", color: "#5395CE" }}>
                600
                <div syle={{ fontSize: "px" }}>Total stock</div>
              </div>
              <div style={{ fontWeight: "bold", color: "#F33616" }}>
                20,890
                <div>Available products</div>
              </div>
            </div>
          </div>
          <div style={{ height: "100%", width: "100%", display: "flex" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  height: "300px",
                  width: "700px",
                }}
              >
                <img
                  style={{ height: "100%", width: "100%", marginLeft: "-20px" }}
                  src={back}
                />
              </div>
              <div
                style={{
                  height: "200px",
                  width: "300px",
                }}
              >
                <img
                  src={side}
                  style={{
                    height: "100%",
                    marginLeft: "-70px",
                    width: "100%",
                    marginTop: "100px",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "-500px",
              height: "800px",
              width: "100%",
            }}
          >
            <Sellingcards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
