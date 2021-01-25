import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import pic from "../img/t.png";
import pic1 from "../img/t1.png";
import pic2 from "../img/t2.png";
import pic3 from "../img/t4.png";
import pic4 from "../img/t4.png";
import pic5 from "../img/t8.png";
import "./style.css";

function Sellingcards() {
  return (
    <div style={{ fontFamily: "poppins" }}>
      <div style={{ height: "100%", width: "100%", fontFamily: "poppins" }}>
        <div style={{ color: "black", marginLeft: "60px", fontWeight: "bold" }}>
          Top selling products
        </div>
        <div
          style={{
            display: "flex",

            height: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Link style={{ textDecoration: "none" }} to="payment">
                  <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                    Buy Now
                  </Button>
                </Link>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic1}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                  Buy Now
                </Button>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic2}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                  Buy Now
                </Button>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic3}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                  Buy Now
                </Button>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic4}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                  Buy Now
                </Button>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic5}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                  Buy Now
                </Button>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                  Buy Now
                </Button>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <div
              style={{
                height: "350px",
                width: "270px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "3px 3px 3px 3px #aaaaaa",
                borderRadius: "5px",
              }}
            >
              <div
                className="checking"
                style={{
                  height: "180px",
                  width: "180px",

                  borderRadius: "90px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pic}
                />
              </div>
              <div>
                <h3 style={{ marginTop: "20px" }}>
                  Gucci(the classical watch)
                </h3>
              </div>
              <hr />
              <div
                style={{
                  height: "1px",
                  width: "260px",
                  color: "black",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div style={{ color: "#09C09E" }}>
                  Price
                  <div style={{ fontWeight: "bold" }}>$50.0</div>
                </div>
                <Button style={{ marginTop: "10px", fontFamily: "poppins" }}>
                  Buy Now
                </Button>
                <div>
                  Total sale
                  <div style={{ fontWeight: "bold" }}>$104.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellingcards;
