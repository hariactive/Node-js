let path = require("path");

// for(let i=1;i<10;i++){
//     let dirpathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirpathToMake);
//     fs.writeFileSync(path.join(dirpathToMake +  "readme.md"), ` # readme for ${dirpathToMake}`);
// }

let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("extension -> ",ext);

let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname,"abc.js"));
console.log(name); 
