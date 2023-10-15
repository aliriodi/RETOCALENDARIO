import mongoose from 'mongoose'


// const dbConnect = async () => mongoose.connect(process.env.DB_URI);

// export default dbConnect;


const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(DB_URI, options);
    console.log("******CONEXION CORRECTA*******");
  } catch (error) {
    console.log(error, "******ERROR DE CONEXIÓN*******");
  }

};

export default dbConnect;
