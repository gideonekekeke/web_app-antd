import { Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_f747091150685438ae86d5a98b5df3c60275f367",
};

const onSuccess = (reference) => {
  console.log(reference);
};

const onClose = () => {
  console.log("closed");
};

const Payment = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  const history = useHistory();
  const onSuccess = (refrence) => {
    history.push("/enter");
    console.log(refrence);
  };

  const initializePayment = usePaystackPayment({
    reference: new Date().getTime(),
    email: email,
    amount: amount,
    publicKey: "pk_test_f747091150685438ae86d5a98b5df3c60275f367",
  });
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          <div>your amount is : {amount / 100}</div>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ width: "300px" }}
            placeholder="Email here"
          />
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            style={{ width: "300px", marginTop: "20px" }}
            placeholder="Amounts here"
          />
          <div>
            <Button
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
              style={{
                marginTop: "30px",
                backgroundColor: "#09C09E",
                color: "white",
                width: "120px",
              }}
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
