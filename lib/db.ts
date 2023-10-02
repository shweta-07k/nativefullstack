import mongoose from "mongoose"

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("Mongoose Connected easily");

    } catch (error) {
        console.log("unable to connect mongo url", error);

    }
}
export default db