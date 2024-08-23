import mongoose from "mongoose"; 

//2) Para conectar con la base de datos

mongoose.connect("mongodb+srv://maximoperret:coderhouse@cluster0.rclpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then( () => console.log("Conexion exitosa!")) 
    .catch( (error) => console.log("Vamos a morir, tenemos un error", error))