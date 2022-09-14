const fs = require("fs");
const recipes = {};

fs.readdir("./recipes/", (err, files) => {
    // console.log(file )
    // const fot = new Set();
    files.forEach(file =>
        fs.readFile("./recipes/" + file, {}, (err, data) => {
            // (JSON.parse(String(data)).format_version !== "1.12" && JSON.parse(String(data)).format_version !== "1.16") ? console.log(file) : 0;
            //  !JSON.parse(String(data))["minecraft:recipe_shaped"] ? console.log(file) : 0;
            if (!JSON.parse(String(data))["minecraft:recipe_shaped"]) return;
            if (!JSON.parse(String(data))["minecraft:recipe_shaped"]["result"]) return;
            const rec = JSON.parse(String(data))["minecraft:recipe_shaped"];
            if (!rec["pattern"]) return;
            recipes[rec["description"]["identifier"]] = {
                pattern : rec.pattern,
                key : rec.key,
                result : rec.result
            }

            // const _ = JSON.parse(String(data))["minecraft:recipe_shaped"].tags;
            // // Object.keys(JSON.parse(String(data))).forEach(_=>{
            // fot.has(_) ? 0 : fot.add(_);
            // // })

            // console.log(recipes[rec["description"]["identifier"]],rec["description"]["identifier"])
        })
    )
})

module.exports = recipes;

// const tttttttt = {
//     'format_version': ['1.12', '1.16', '1.14'],
//     'minecraft:recipe_shaped': "crafting_table",
//     'minecraft:recipe_shapeless': [
//         'crafting_table',
//         'cartography_table',//制图台
//         'stonecutter',//切石机
//         'smithing_table'//锻造台
//     ]
//     ,
//     'minecraft:recipe_brewing_mix': "brewing_stand",
//     'minecraft:recipe_brewing_container': "brewing_stand",
//     'minecraft:recipe_furnace': "furnace"
// }