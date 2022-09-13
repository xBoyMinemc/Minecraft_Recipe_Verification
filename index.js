const fs = require("fs");


const recipes_list = JSON.parse(fs.readFileSync("./recipe_shaped.json"));
const recipes_fest = Object.keys(recipes_list);
const recipes_len = recipes_fest.length;
const icon_list = JSON.parse(fs.readFileSync("./icon_list_2.json"));

// const target_id = "minecraft:redstone_torch";
const target_id = recipes_fest[Math.floor(Math.random() * recipes_len)];


const target_rec = recipes_list[target_id];
const sb = {
     "dye" : "dye_powder",//五块钱买来的教训，希望下次扁平mj‘s m的时候能扁平彻底
     "redstone" : "redstone_dust",
     "compass" : "compass_item",
     "slime_ball" : "slimeball",
     "lodestone_compass" : "lodestonecompass_item",
     "book" : "book_normal",
     "bow" : "bow_pulling",//bow_standby
     "netherstar" : "nether_star",

     "wooden_shovel" : "shovel:0",
     "stone_shovel" : "shovel:1",
     "iron_shovel" : "shovel:2",
     "gold_shovel" : "shovel:3",
     "diamond_shovel" : "shovel:4",
     "netherite_shovel" : "shovel:5",
     
     "wooden_axe" : "axe:0",
     "stone_axe" : "axe:1",
     "iron_axe" : "axe:2",
     "gold_axe" : "axe:3",
     "diamond_axe" : "axe:4",
     "netherite_axe" : "axe:5",
     
     "wooden_hoe" : "hoe:0",
     "stone_hoe" : "hoe:1",
     "iron_hoe" : "hoe:2",
     "gold_hoe" : "hoe:3",
     "diamond_hoe" : "hoe:4",
     "netherite_hoe" : "hoe:5",
     
     "wooden_sword" : "sword:0",
     "stone_sword" : "sword:1",
     "iron_sword" : "sword:2",
     "gold_sword" : "sword:3",
     "diamond_sword" : "sword:4",
     "netherite_sword" : "sword:5",
     
     "wooden_pickaxe" : "pickaxe:0",
     "stone_pickaxe" : "pickaxe:1",
     "iron_pickaxe" : "pickaxe:2",
     "gold_pickaxe" : "pickaxe:3",
     "diamond_pickaxe" : "pickaxe:4",
     "netherite_pickaxe" : "pickaxe:5",
     
     
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
    // "axe": {
    //     "textures": [
    //         "textures/items/wood_axe",
    //         "textures/items/stone_axe",
    //         "textures/items/iron_axe",
    //         "textures/items/gold_axe",
    //         "textures/items/diamond_axe",
    //         "textures/items/netherite_axe"
    //     ]
    // },
    
    // "hoe": {
    //     "textures": [
    //         "textures/items/wood_hoe",
    //         "textures/items/stone_hoe",
    //         "textures/items/iron_hoe",
    //         "textures/items/gold_hoe",
    //         "textures/items/diamond_hoe",
    //         "textures/items/netherite_hoe"
    //     ]
    // },
   
};
// console.log(
//     target_id,
//     target_rec["key"]
// )


// const target_pat = target_rec["pattern"];
const target_key = {};
const get_icon = (_)=>{
    
    let item =  target_rec["key"][_]["item"].replace("minecraft:", "").split(":")[0];
    if(sb[item])item = sb[item];
        item = item.replace("minecraft:", "").split(":")[0];
    let data = target_rec["key"][_]["data"]
        || +target_rec["key"][_]["item"].replace("minecraft:", "").split(":")[1]
        || 0;

    const tex = icon_list[item]["textures"];
    target_key[String(_)] = Array.isArray(tex) ? (tex[data] ? tex[data] : tex[0]) : tex;

};
const get_icon_i = (item,data)=>{
    try {
        
    item = item.replace("minecraft:", "").split(":")[0];
    if(sb[item])item = sb[item];
    item = item.replace("minecraft:", "").split(":")[0];
    data = data
    || +item.replace("minecraft:", "").split(":")[1]
    || 0;
    const tex = icon_list[item]["textures"];
return Array.isArray(tex) ? (tex[data] ? tex[data] : tex[0]) : tex
    } catch (error) {
        console.log("error==>",item)
    }
};
Object.keys(target_rec["key"]).forEach(_ => {
    get_icon(_)
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
console.log(
    target_id,
    get_icon_i(target_rec["result"].length ? target_rec["result"][0]["item"]:target_rec["result"]["item"],target_rec["result"].length ? target_rec["result"][0]["data"]:target_rec["result"]["data"] || 0),
    xpattern
)


