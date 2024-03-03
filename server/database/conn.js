import mongoose from "mongoose";

async function connect() {
  const atlasURI = "mongodb+srv://qwerty123:qwerty123@cluster0.oojujoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

  mongoose.set('strictQuery', true);

  try {
    const db = await mongoose.connect(atlasURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; 
  }
}

export default connect;
