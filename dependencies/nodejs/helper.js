const jwt = require("jsonwebtoken");
module.exports.getToken = (event) => {
  try {
    const payload = {
      randomKey: Math.random(),
      exp: Math.floor(new Date().getTime() / 1000) + 1200,
      iat: Date.now(),
    };
    return jwt.sign(payload, "someKey");
  } catch (err) {
    console.error(err);
    return { error: true };
  }
};
