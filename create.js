
let cp = require("child_process");
console.log("trying to open calc");
cp.execSync("start chrome https:\\www.facebook.com");
console.log("opend");
let output = cp.execSync("node abc.js");
console.log("output" + output); 
  