const mongoose = require("mongoose");



const url = "mongodb://127.0.0.1:27017/fruitDB";


mongoose.connect(url,{useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,

    },
    rating:{
        type: Number,
        required:true,

    },
    review:{
        type:String,
        lowercase: true
    }
    
});

const Fruit = mongoose.model("Fruit",fruitSchema);

// const papaya = new Fruit({
//     name: "Papaya",
//     rating: 8,
//     review: "So gooood!"
// });

// papaya.save();



// const personSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         uppercase:true
//     },
//     age:{
//         type:Number,
//         required:true
//     },
//     contact:{
//         type:Number,
//         required:true
//     }
// });
// const Person = mongoose.model("person",personSchema);

// const Abhay = new Person({
//     name: "Abhay kumar",
//     age: 22,
//     contact: 6299001122
// });

// Abhay.save();

// const orange = new Fruit({
//     name: "Orange",
//     rating: 8,
//     review:"One of the best fruits to have."
// });
// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review:"Eat banana daily."
// });

// Fruit.insertMany([orange,banana]);

//For hint ,go to "https://stackoverflow.com/questions/75649330/mongooseerror-model-findone-no-longer-accepts-a-callback-at-function"
//---Also see: "E:\fullStackWebDev\Database1\app.js"
async function readFunc(){
    try{
        const result = await Fruit.find();
        if(result){
            result.forEach((obj)=>{
                console.log(obj.name + " ");
            });
        }
    }catch(err){
        console.log("Error in reading data. ",err)
    }
}
readFunc();

// async function updateFun(){
//     try{
//         const result = await Fruit.updateMany({name:"Banana"},{review:"Most famous fruit in my opinion."}) ;
//         console.log(result);
//     }catch(err){
//         console.log("Error in updating data. ",err);
//     }finally{
//         mongoose.connection.close();
//     }
// }
// updateFun();

// async function deleteFun(){
//     try{
//         const result = await Fruit.deleteMany({name:"Banana"});
//         console.log("Successfully deleted. ",result);
//     }catch(err){
//         console.log(err);
//     }finally{
//         mongoose.connection.close();
//     }
// }

// deleteFun();

// readFunc();
