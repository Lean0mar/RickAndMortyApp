const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharByDetail = require("../controllers/getCharByDetail");
const favsRouter = require("./favsRouter");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharByDetail);

router.use("/fav", favsRouter)

module.exports = router;