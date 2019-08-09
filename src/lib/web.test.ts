import * as web from './web';
import fs from "fs";

var docu = web.fetch("http://localhost:5432/hello/url?url=https://baike.baidu.com/item/%E5%88%98%E5%BE%B7%E5%8D%8E/114923");
fs.writeFileSync("./src/data/001.txt", docu);