const fs = require("fs");


const recipes_list = JSON.parse(fs.readFileSync("./recipe_shaped.json"));
const recipes_fest = Object.keys(recipes_list);
const recipes_len = recipes_fest.length;
const icon_list = JSON.parse(fs.readFileSync("./icon_list_2.json"));
const aaa = (target_id)=>{

// const target_id = "minecraft:redstone_torch";
// const target_id = recipes_fest[Math.floor(Math.random() * recipes_len)];


const target_rec = recipes_list[target_id];
const sb = {
     "dye" : "dye_powder",//五块钱买来的教训，希望下次扁平mj‘s m的时候能扁平彻底
     "redstone" : "redstone_dust",
     "compass" : "compass_item",
     "slime_ball" : "slimeball",
     "wooden_shovel" : "shovel",
     "lodestone_compass" : "lodestonecompass_item",
     "book" : "book_normal",
     "bow" : "bow_pulling",//bow_standby
     "netherstar" : "nether_star",
    //  "shovel" : {
    //     "textures" : [
    //        "textures/items/wood_shovel",
    //        "textures/items/stone_shovel",
    //        "textures/items/iron_shovel",
    //        "textures/items/gold_shovel",
    //        "textures/items/diamond_shovel",
    //        "textures/items/netherite_shovel"
    //     ]
    //  },
   
};
// console.log(
//     target_id,
//     target_rec["key"]
// )


// const target_pat = target_rec["pattern"];
const target_key = {};
Object.keys(target_rec["key"]).forEach(_ => {

    let item = target_rec["key"][_]["item"].replace("minecraft:", "").split(":")[0];
    if(sb[item])item = sb[item];
    let data = target_rec["key"][_]["data"]
        || +target_rec["key"][_]["item"].replace("minecraft:", "").split(":")[1]
        || 0;

    // console.log(
    //     item,
    //     data,
    //     icon_list[item]
    // )
    
try {
    const tex = icon_list[item]["textures"];
  // target_key[String(_)] = Array.isArray(tex) ? tex[icon_list[target_rec["key"][_]["data"]||0]] : tex;//你猜我为什么不只判断data了
    target_key[String(_)] = Array.isArray(tex) ? (tex[data] ? tex[data] : tex[0]) : tex;

} catch (error) {
 console.log(target_id,"+==>",item,sb[item],error)   
}
  });



let xpattern = [];
target_rec["pattern"].forEach(_ => {
    const temp = _;
    _ = _.split("");
    _.forEach((_, __, ___) => {
        ___[__] = target_key[_] ? target_key[_] : "###"
        // console.log(_, target_key[_], target_key)
    });
    // if (!_[0]) console.log("undefined=>", temp.split(""))
    xpattern.push(_)
});
// console.log(
//     target_id,
//     xpattern
// )



}
recipes_fest.forEach(_=>aaa(_))