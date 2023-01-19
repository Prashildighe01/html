express=require("express")
bodyparser=require("body-parser");
mongose=require("mongoose")
mongose.connect()
app=express();
app.use(bodyparser.jeson())

app.use(bodyparser.urlencoded({Extended:false}))
app.use("/",routes);
app.listen(3000);
console.log("listening");