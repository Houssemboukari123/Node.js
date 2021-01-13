var fs = require("fs");
fs.readFile('filetwo.txt',function(err,data){
    if(!err) {
       console.log(data.toString());
    }
});
console.log("something else");