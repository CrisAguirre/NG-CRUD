const Producto = require("../models/Producto");

exports.crearProducto = async (req, res)=>{
  
    //console.log(req.body);    
    try {
        let producto
        //creamos producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerProductos = async (req, res)=>{
    try {
        const productos = await Producto.find();
        res.json(productos);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}