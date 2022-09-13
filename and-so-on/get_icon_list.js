const fs = require("fs");


// JSON.stringify(fs.readFileSync("./recipe_shaped.json"))

const recipes_list = JSON.parse(fs.readFileSync("./recipe_shaped.json"));
let recipes_fest = Object.keys(recipes_list);//recipes_fest.forEach((_,__,___)=>___[__]=_.slice(10));
const recipes_len = recipes_fest.length;
const icon_list = Object.assign(
    JSON.parse(fs.readFileSync("./terrain_texture.json"))["texture_data"],
    JSON.parse(fs.readFileSync("./item_texture.json"))["texture_data"]
);

const blocks_wdnmd_oang = JSON.parse(fs.readFileSync("./blocks.json"));
const blocks_xboy = {};
// console.log(blocks_wdnmd_oang["light_block"]["carried_textures"])
blocks_wdnmd_oang["format_version"] ? delete blocks_wdnmd_oang["format_version"] : 0;
console.log(Object.keys(icon_list).length)
for (let i in blocks_wdnmd_oang) {

    icon_list[i] =
        icon_list[
            blocks_wdnmd_oang[i]["carried_textures"]
            ?(
            !(typeof blocks_wdnmd_oang[i]["carried_textures"] === "object")
            ? blocks_wdnmd_oang[i]["carried_textures"]
            : 0
            || blocks_wdnmd_oang[i]["carried_textures"]["west"]
            || blocks_wdnmd_oang[i]["carried_textures"]["side"]
            || blocks_wdnmd_oang[i]["carried_textures"]["up"]
            || blocks_wdnmd_oang[i]["carried_textures"]["south"]
            || blocks_wdnmd_oang[i]["carried_textures"]["north"]
            || blocks_wdnmd_oang[i]["carried_textures"]["east"]
            || blocks_wdnmd_oang[i]["carried_textures"]["down"]
            ):0
            ||
            !(typeof blocks_wdnmd_oang[i]["textures"] === "object")
            ? blocks_wdnmd_oang[i]["textures"]
            : 0
            || blocks_wdnmd_oang[i]["textures"]["west"]
            || blocks_wdnmd_oang[i]["textures"]["side"]
            || blocks_wdnmd_oang[i]["textures"]["up"]
            || blocks_wdnmd_oang[i]["textures"]["south"]
            || blocks_wdnmd_oang[i]["textures"]["north"]
            || blocks_wdnmd_oang[i]["textures"]["east"]
            || blocks_wdnmd_oang[i]["textures"]["down"]

        ]
}
// Object.assign(
//     icon_list,
//     blocks_xboy
// );
console.log(Object.keys(icon_list).length)
fs.writeFileSync("./icon_list_2.json",JSON.stringify(icon_list))

const target_id = recipes_fest["minecraft:quartz_stairs"];
// const target_id = recipes_fest[Math.floor(Math.random() * recipes_len)];
console.log(
    target_id
)
const target_rec = recipes_list[target_id];
// const target_pat = target_rec["pattern"];
const target_key = {};
Object.keys(target_rec["key"]).forEach(_ => {
    // _ = String(_);
    // console.log(
    //     '0 =>',
    //     target_rec["key"][_]["item"],
    //     '\n1',
    //     target_rec["key"][_]["item"].replace("minecraft:","").split(":")[0],
    //     '\n2',
    //     icon_list[target_rec["key"][_]["item"].replace("minecraft:","").split(":")[0]]
    // )

    console.log("tex=>", target_rec["key"][_]["item"].replace("minecraft:", "").split(":")[0], icon_list[target_rec["key"][_]["item"].replace("minecraft:", "").split(":")[0]])    // const tex = icon_list[target_rec["key"][_]["item"].slice(10)]["textures"];//你猜猜我为什么不用slice了
    const tex = icon_list[target_rec["key"][_]["item"].replace("minecraft:","").split(":")[0]]["textures"];

    // target_key[String(_)] = Array.isArray(tex) ? tex[icon_list[target_rec["key"][_]["data"]||0]] : tex;//你猜我为什么不只判断data了
    target_key[String(_)] = Array.isArray(tex) ? tex[
        icon_list[
            target_rec["key"][_]["data"]
         ||  +target_rec["key"][_]["item"].replace("minecraft:","").split(":")[1] 
         || 0
            ]
        ] : tex;
});



let xpattern = [];
target_rec["pattern"].forEach(_=>{
    const temp = _;
    _ = _.split("");
    _.forEach((_,__,___)=>{
        ___[__] = target_key[_] ? target_key[_] : "###"
        console.log(_,target_key[_],target_key)
    });
    if(!_[0])console.log("undefined=>",temp.split(""))
    xpattern.push(_)
});
console.log(
    target_id,
    xpattern
    )


