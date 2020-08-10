require("dotenv").config();
const fs = require("fs");
const db = require("../server/knex.js");

(async()=>{
    try{
        const addreeses = JSON.parse(fs.readFileSync("./data/address.json"));
        for(const address of addresses){
            const id//???

            const result = await db("addresses").insert({
                id,//???
            });
            console.log("id",id);
            console.log(result);
        }
    } catch (err) {
        console.error("Error inserting records",err);
    }
})();