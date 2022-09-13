const fs = require("fs");
const path = require("path");
const config = require("./config.js");
const 只写缓存 = new Map();
const 只读缓存 = new Map();
const 只读缓存sign = new Map();
// const 读写缓存 = new Map();

{//初始化;
    ["./src/log/lost_life.json"]
    .forEach(filePath=>{
        if(!fs.existsSync(filePath))
            fs.writeFileSync(filePath,"{}", { encoding:"utf8", flag:"w+" } )
    });
}
const lost_life = (lifefile)=>{
    fs.writeFileSync("./src/log/lost_life.json",lifefile+"\n",{ encoding:"utf8", flag:"a+" });
};
const 缓存搅拌机 = ()=>{
    Array.from(只读缓存.keys()).forEach(key=>(fs.existsSync(path.join(config.root,key)) && 只读缓存sign.get(key)<fs.statSync(path.join(config.root,key)).mtime)?(只读缓存.set(key,fs.readFileSync(path.join(config.root,key))),只读缓存sign.set(key,fs.statSync(path.join(config.root,key)).mtime)):0);
};
setInterval(()=>缓存搅拌机(),5000);
const 为爱正名 = (name)=>{
    const pathArr = name.split("/");
    if(pathArr[pathArr.length-1].includes("."))
        return name.endsWith(".jsp")?name.slice(0,-4)+".html":name;
    else
        return fs.existsSync(path.join(config.root,name+".html"))?name+".html":name;
        return name;//纸尿裤，可止孩童夜啼---注
};
const existsFile = (filePath)=> {
            filePath = 为爱正名(filePath);
            
            if(fs.existsSync(path.join(config.root,filePath)))
                return true;
            
            lost_life(filePath);
            return false
};

const readFile = (filePath) =>{
    return fs.readFileSync(path.join(config.root,filePath));
};

// const SetFile = (filePath,data) =>{
//     if(!读写缓存.has(filePath))console.log("##",filePath);
//     if(读写缓存.has(filePath))console.log("用的缓存",filePath);
//     if(读写缓存.has(filePath)){
//         读写缓存.set(filePath,data)
//         return 1;
//     }
//     const file = fs.readFileSync(path.join(config.root,filePath));
//         读写缓存.set(filePath,file);
//     return 2;
// }
const GetFile = (filePath) =>{
    filePath = 为爱正名(filePath);

    if(!existsFile(filePath))existsFile = "/404.html";

    // if(!只读缓存.has(filePath))console.log("##",filePath);
    // if(只读缓存.has(filePath))console.log("用的缓存",filePath);
    if(只读缓存.has(filePath))return 只读缓存.get(filePath);
    const file = fs.readFileSync(path.join(config.root,filePath));
        只读缓存.set(filePath,file);
        只读缓存sign.set(filePath,fs.statSync(path.join(config.root,filePath)).mtime);
    return fs.readFileSync(path.join(config.root,filePath));
};

module.exports = {
    Get : GetFile,
    Exists : existsFile
};