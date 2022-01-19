var mongoose = require("mongoose");
// import mongoosePaginate from 'mongoose-paginate-v2'
var post = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: String,
    author:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },

},
   

);

const J_food = mongoose.model("j_food", j_foodschema);
// const db = mongoose.connection;
// const collection = db.collection('j_food');

// // Creating text index for search
// collection.createIndex({
//     name: "text",
//     description: "text"
// });

module.exports = J_food;