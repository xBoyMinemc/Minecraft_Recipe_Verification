const fs = require("fs");
// const TGA = require('tga');
const tga2png = require("tga2png");

const MCV_Object = JSON.parse(fs.readFileSync("./MCV.json"));
const icon_need = new Set();
const icon = {};
for (const rec in MCV_Object) {
    // console.log(rec)
    String(MCV_Object[rec]["pattern"]).split(",").forEach(icon => icon_need.add(icon));
    icon_need.add(MCV_Object[rec]["result"]);
};
icon_need.delete("###");
icon_need.forEach(_ => {
    if (fs.existsSync("./" + _ + ".png"))
        icon[_] = fs.readFileSync("./" + _ + ".png").toString("base64")
    else
        tga2png("./" + _ + ".tga").then(buf => {
            console.log("tga2png==>",_);
            icon[_] = buf.toString("base64")
        }, err => {
            console.log('error', err);
        });


})
// fs.readFileSync("")

//
setTimeout(()=>{
     fs.writeFileSync("./icon_base64.json",JSON.stringify(icon))

console.log(
    Object.keys(icon).length
    // Array.from(icon_need)//.length
)

}
,1000)

