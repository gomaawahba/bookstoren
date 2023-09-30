import mongoose from "mongoose";

export let connect = async function connectdb() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BookStoreMERN')
        console.log(`connction mongo db`)
    } catch (error) {
        console.log((error))
    }

};
// module.exports = {
//         connect

// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log(`connction mongo db`))
//     .catch((error) => console.log(error));