import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://jokwa:y4g4t0n4m1@cluster0.ey0l9.mongodb.net/todo-app')
    console.log("DB Connected");
}