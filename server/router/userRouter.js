const userBl = require("../models/usersBL")
const express = require("express");
const router = express.Router();

router.get("/", async function (req, resp) {
    let users = await userBl.getallUsers();
    return resp.json(users);
});

router.get("/:id", async function (req, resp) {
    let id = req.params.id;
    let user = await userBl.getUser(id);
    return resp.json(user);
})

router.post("/", async function (req, resp) {
    let obj = req.body;
    await userBl.addUser(obj);
    return resp.json("Created");
})

router.put("/:id", async function (req, resp) {
    let id = req.params.id;
    let obj = req.body;
    await userBl.updateUser(id,obj);
    return resp.json("Updated");
})

router.delete("/:id", async function (req, resp) {
    let id = req.params.id;
    await userBl.deleteUser(id);
    return resp.json("Deleted");
})


module.exports = router;