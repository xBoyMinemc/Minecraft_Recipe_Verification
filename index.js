const fs = require("fs");


const MCV_Object = JSON.parse(fs.readFileSync("./MCV.json"));
const MCV_keys = Object.keys(MCV_Object);
const MCV_keys_length = MCV_keys.length;






const MCV = {
    list : MCV_Object,
    keys : Object.keys(MCV_Object),
    length : MCV_keys.length,
    random : ()=>MCV.list[MCV.keys[Math.floor(Math.random()*MCV.length)]]
}//给自己找个对象


console.log(MCV.random())