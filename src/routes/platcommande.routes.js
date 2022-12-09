const router = require("express").Router();
const platComController = require("../controllers/platcommande.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, platComController.getAllPlatsCommandes);
router.get("/byid/:id", auth, platComController.getPlatCommandeById);
router.post("/create", auth, platComController.createPlatCommande);
router.put("/update/:id", auth, platComController.updatePlatCommande);
router.delete("/delete/:id", auth, platComController.deletePlatCommande);
router.get("/from-commande/:id", platComController.getByCommande);

module.exports = router;
