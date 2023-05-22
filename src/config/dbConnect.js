import mongoose from "mongoose"

mongoose.connect("mongodb+srv://diasjo1992:Joana20121992@joana-node.lkmwkka.mongodb.net/joana-node")

let db = mongoose.connection;

export default db;
