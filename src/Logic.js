import React, { useState, useEffect, useRef } from "react";
import Display from "./Display";
var gis = require("g-i-s");

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
    fetch("https://s3.amazonaws.com/misc-file-snack/MOCK_SNACKER_DATA.json")
      .then((response) => response.json())
      .then((data) => setSnackers(data));

    // fetches product list
    fetch("https://ca.desknibbles.com/products.json?limit=250")
      .then((response) => response.json())
      .then((data) => {
        setStock(data);
      });
    //fetch beaver urls

    const logBeaverResults = (error, results) => {
      if (error) {
        console.log(error);
      } else {
        setBeavers(results);
        /*function toDataURL(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
              callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
          };
          xhr.open("GET", url);
          xhr.responseType = "blob";
          xhr.send();
        }
        let dataArr = [];
        results.forEach((beaver) => {
          toDataURL(beaver.url, function (dataUrl) {
            dataArr = [...dataArr, dataUrl];
            console.log(dataArr);
          });
          console.log(dataArr);
        });
        console.log(dataArr);
      }*/
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
        <Display
          snacker={snackers[snackerIndex]}
          product={stock.products[stockIndex]}
          verb={verbs[verbIndex]}
          beaverUrl={beavers[beaverIndex].url}
          generateIndices={generateIndices}
        />
      )}
    </>
  );
}

export default Logic;
