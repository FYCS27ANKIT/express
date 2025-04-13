const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/c2_node")
.then(() => {
    console.log("connectde");
}).catch((err) => {
    console.log(err); 
});

const empSchema = new mongoose.Schema({
    id:Number,
    name : String,
    sal : Number
})

const empModel = mongoose.model("c2_node", empSchema);

const addEmp = async() => {
    const data = new empModel(
        {
            id : 1,
            name : "Ankit",
            sal : 12900
        }
    )
    const result = await data.save();
    console.log(result);
}
// addEmp();

const updateEmp = async() => {
    const result = await empModel.updateOne({id : 1}, {$set : {sal : 2290}});
    console.log(result);
}
// updateEmp()

const showEmp = async() => {
    const result = await empModel.find();
    console.log(result);
}
//showEmp();

const deleteEmp = async() => {
    const result = await empModel.deleteOne({id : 1});
    console.log(result);
}
deleteEmp()
