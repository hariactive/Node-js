//filesystem
// files -> create, update, delete,read
const { dir } = require("console");
let fs = require("fs");
// read
let buffer = fs.readFileSync("abc.js");
// console.log("binary" + buffer);
//create
// fs.openSync("abc.txt","w");
// fs.writeFileSync("abc.txt","writeing first few lines in the file");
// fs.appendFileSync("abc.txt","why not happy");
// fs.mkdirSync("new folder");
// fs.writeFileSync("new folder/newfile.txt","Write here")
// let content =fs.readdirSync("new folder");
// console.log(content);
// for(let i=0;i<content.length;i++){
//     console.log("file ",content[i], " is removed");
//     fs.unlinkSync("new folder/" + content[i]); //to remove file
// }
//     fs.rmdirSync("new folder"); //to remove folder 

//fs.existSync -> if a file exist at a path -> true /false
//fs.lstatSync -> 
// let doesPathexits = fs.existsSync("abc.txt");
// console.log(doesPathexits);
// doesPathexits = fs.existsSync("abcnd.txt");
// console.log(doesPathexits);
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

for(let i=1;i<10;i++){
    let dirpathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirpathToMake);
    fs.writeFileSync(dirpathToMake + "\\" + "readme.md", `# readme for ${dirpathToMake}`);
}











