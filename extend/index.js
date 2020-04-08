"use strict";
const utils = require("/opt/nodejs/helper.js");

module.exports.handler = async (event, context) => {
  const token = utils.getToken();

  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  };
};
