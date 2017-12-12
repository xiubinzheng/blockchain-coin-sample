var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
//console.log("message: ");
console.log(SHA256("Message"));
//console.log("sha "+SHA256("Message"));

var CryptoJs = require("crypto-js");
console.log(CryptoJs.HmacSHA1("Message","Key"));