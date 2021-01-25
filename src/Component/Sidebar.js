import React from "react";
import icon from "../img/home.png";
import logo from "../img/face1.png";
import logo1 from "../img/f11.jpg";
import logo2 from "../img/twi.png";
import {
  ShoppingCartOutlined,
  TagOutlined,
  ShopOutlined,
  UserOutlined,
  ReadOutlined,
} from "@ant-design/icons";

function Sidebar() {
  return (
    <>
      <div
        style={{
          width: "100%",
          color: "white",
          fontFamily: "poppins",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "100px",
          zIndex: "10",
          position: "sticky",
          top: 0,
        }}
      >
        <div
          style={{
            color: "white",
            marginLeft: "70px",
            marginTop: "-70px",
            fontWeight: "bold",
          }}
        >
          MENU
        </div>
        <div
          style={{
            height: "250px",
            width: "100%",

            justifyContent: "space-around",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "30px",
                width: "30px",
                borderRadius: "20px",
                backgroundColor: "#09C09E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img style={{ height: "20px" }} src={icon} />
            </div>
            <div style={{ marginLeft: "20px" }}>Home</div>
          </div>

          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "30px",
                width: "30px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShoppingCartOutlined style={{ color: "white" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>Sales Order</div>
          </div>

          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "30px",
                width: "30px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TagOutlined style={{ color: "white" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>Purchase</div>
          </div>

          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "30px",
                width: "30px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShopOutlined style={{ color: "white" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>Products</div>
          </div>

          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "30px",
                width: "30px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <UserOutlined style={{ color: "white" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>Customers</div>
          </div>

          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "30px",
                width: "30px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ReadOutlined style={{ color: "white" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>Reports</div>
          </div>
        </div>

        <div
          style={{
            height: "200px",
            width: "100%",

            justifyContent: "space-around",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "100px",
          }}
        >
          <div style={{ fontSize: "12px" }}>SALES CHANNEL</div>
          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
              marginTop: "-100px",
            }}
          >
            <div
              style={{
                height: "15px",
                width: "15px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={logo}
              />
            </div>
            <div style={{ marginLeft: "20px", fontSize: "10PX" }}>FACEBOOK</div>
          </div>
          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
              marginTop: "-100px",
            }}
          >
            <div
              style={{
                height: "15px",
                width: "15px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={logo1}
              />
            </div>
            <div style={{ marginLeft: "20px", fontSize: "10px" }}>
              INSTAGRAM
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "150px",
              alignItems: "center",
              marginTop: "-100px",
            }}
          >
            <div
              style={{
                height: "15px",
                width: "15px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={logo2}
              />
            </div>
            <div style={{ marginLeft: "20px", fontSize: "10px" }}>TWITTER</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
