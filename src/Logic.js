import React, { useState, useEffect } from "react";
import Display from "./Display";
import Button from "./Button";

//imported for offline use and cors issues
//let snackersData = require("./data/snackers.json");
//let stockData = require("./data/stock.json");

var gis = require("g-i-s-j");

function Logic() {
  const [snackers, setSnackers] = useState(null);
  const [stock, setStock] = useState(null);
  const [beavers, setBeavers] = useState(null);

  const verbs = [
    "chomps",
    "chews",
    "gnaws",
    "bites",
    "munches",
    "nibbles",
    "crunches",
  ];

  const [snackerIndex, setSnackersIndex] = useState(0);
  const [stockIndex, setStockIndex] = useState(0);
  const [beaverIndex, setBeaverIndex] = useState(0);
  const [verbIndex, setVerbIndex] = useState(0);

  // fetches snack data
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/misc-file-snack/MOCK_SNACKER_DATA.json")
      .then((response) => response.json())
      .then((data) => setSnackers(data))
      .catch((error) => {
        console.error("Error:", error);
      });

    // fetches product list
    fetch("https://cors-anywhere.herokuapp.com/https://ca.desknibbles.com/products.json?limit=250")
      .then((response) => response.json())
      .then((data) => {
        setStock(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //fetch beaver urls
    const logBeaverResults = (error, results) => {
      if (error) {
        console.log(error);
      } else {
        setBeavers(results);
      }
    };
    gis("beaver", logBeaverResults);
  }, []);

  const generateIndices = () => {
    const getRandomInt = (max) => {
      let min = 0;
      return Math.floor(Math.random() * (max - min)) + min;
    };
    setSnackersIndex(getRandomInt(snackers.length));
    setStockIndex(getRandomInt(stock.products.length));
    setVerbIndex(getRandomInt(verbs.length));
    setBeaverIndex(getRandomInt(beavers.length));
  };

  return (
    <>
      {snackers && stock && beavers && (
        <>
          <Display
            snacker={snackers[snackerIndex]}
            product={stock.products[stockIndex]}
            verb={verbs[verbIndex]}
            beaverUrl={beavers[beaverIndex].url}
          />
          <Button generateIndices={generateIndices} />
        </>
      )}
    </>
  );
}

export default Logic;
