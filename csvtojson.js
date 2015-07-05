var fs = require("fs");
var Converter = require("csvtojson").Converter;
var converter = new Converter({constructResult:true});
var readStream = fs.createReadStream("./eating_in_ntut.csv");
var writeStream = fs.createWriteStream("./eating_in_ntut.json", { flags: 'w' });
readStream.pipe(converter).pipe(writeStream);
converter.on("end_parsed", function (jsonObj) {
   console.log(jsonObj); //here is your result json object 
});
