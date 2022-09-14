const fs = require("fs");


const recipes_list = JSON.parse(fs.readFileSync("./recipe_shaped.json"));
const recipes_fest = Object.keys(recipes_list);
const recipes_len = recipes_fest.length;
const icon_list = JSON.parse(fs.readFileSync("./icon_list_2.json"));
recipes_fest.forEach(target_id=>{
// const target_id = "minecraft:redstone_torch";
// const target_id = recipes_fest[Math.floor(Math.random() * recipes_len)];


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
     "golden_apple" : "apple_golden",
     "golden_carrot" : "carrot_golden",
     "horsearmorleather" : "leather_horse_armor",
     "horsearmoriron" : "iron_horse_armor",
     "horsearmorgold" : "gold_horse_armor",
     "horsearmordiamond" : "diamond_horse_armor",
     "carrotonastick" : "carrot_on_a_stick",
     "crossbow" : "crossbow_pulling",//crossbow_standby
     "glass_bottle" : "potion_bottle_empty",
     "melon_seeds" : "seeds_melon",
     "seeds_melon" : "melon_speckled",
     "mangrove_boat" : "boat:6",
     "clock" : "clock_item",
     "pumpkin_seeds" : "seeds_pumpkin",
     "speckled_melon" : "melon_speckled",
     "minecart" : "minecart_normal",
     "sealantern" : "seaLantern",//WDNMD
     "emptymap" : "map_empty",

     "banner" : "bed",//我说是就是

     "wooden_shovel" : "shovel:0",
     "stone_shovel" : "shovel:1",
     "iron_shovel" : "shovel:2",
     "golden_shovel" : "shovel:3",
     "diamond_shovel" : "shovel:4",
     "netherite_shovel" : "shovel:5",
     
     "wooden_axe" : "axe:0",
     "stone_axe" : "axe:1",
     "iron_axe" : "axe:2",
     "golden_axe" : "axe:3",
     "diamond_axe" : "axe:4",
     "netherite_axe" : "axe:5",
     
     "wooden_hoe" : "hoe:0",
     "stone_hoe" : "hoe:1",
     "iron_hoe" : "hoe:2",
     "golden_hoe" : "hoe:3",
     "diamond_hoe" : "hoe:4",
     "netherite_hoe" : "hoe:5",
     
     "wooden_sword" : "sword:0",
     "stone_sword" : "sword:1",
     "iron_sword" : "sword:2",
     "golden_sword" : "sword:3",
     "diamond_sword" : "sword:4",
     "netherite_sword" : "sword:5",
     
     "wooden_pickaxe" : "pickaxe:0",
     "stone_pickaxe" : "pickaxe:1",
     "iron_pickaxe" : "pickaxe:2",
     "golden_pickaxe" : "pickaxe:3",
     "diamond_pickaxe" : "pickaxe:4",
     "netherite_pickaxe" : "pickaxe:5",
     
     
    "leather_helmet" : "helmet:0",
    "chainmail_helmet" : "helmet:1",
    "iron_helmet" : "helmet:2",
    "golden_helmet" : "helmet:3",
    "diamond_helmet" : "helmet:4",
    "netherite_helmet" : "helmet:5",
    
    "leather_chestplate" : "chestplate:0",
    "chainmail_chestplate" : "chestplate:1",
    "iron_chestplate" : "chestplate:2",
    "golden_chestplate" : "chestplate:3",
    "diamond_chestplate" : "chestplate:4",
    "netherite_chestplate" : "chestplate:5",

    "leather_leggings" : "leggings:0",
    "chainmail_leggings" : "leggings:1",
    "iron_leggings" : "leggings:2",
    "golden_leggings" : "leggings:3",
    "diamond_leggings" : "leggings:4",
    "netherite_leggings" : "leggings:5",
     
    "leather_boots" : "boots:0",
    "chainmail_boots" : "boots:1",
    "iron_boots" : "boots:2",
    "golden_boots" : "boots:3",
    "diamond_boots" : "boots:4",
    "netherite_boots" : "boots:5",
     
     
     

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
// console.log(
//     target_id,
    get_icon_i(target_rec["result"].length ? target_rec["result"][0]["item"]:target_rec["result"]["item"],target_rec["result"].length ? target_rec["result"][0]["data"]:target_rec["result"]["data"] || 0)
//     xpattern
// )


})