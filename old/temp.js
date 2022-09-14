const fs = require("fs");


const icon_list = Object.assign(
    JSON.parse(fs.readFileSync("./terrain_texture.json"))["texture_data"],
    JSON.parse(fs.readFileSync("./item_texture.json"))["texture_data"]
);

 
const a = JSON.parse(fs.readFileSync("./blocks.json"));

let b  = Object.keys(a).concat(Object.keys(icon_list));

console.log(
    Object.keys(icon_list).length,
    Object.keys(b).length,
(new Set( b)).size,

)


