const { Router } = require("express");
let favs = require("../utils/favs");
const favsRouter = Router();

favsRouter.post("/", (req, res) => {
    favs.push(req.body);
    res.status(200).json({ status: "ok" });
  });
  
favsRouter.get("/", (req, res) => {
    res.status(200).json(favs);
  });
  
favsRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    favs = favs.filter((char) => char.id != id);
    res.status(200).json({ status: "ok" });
  });

  module.exports = favsRouter;