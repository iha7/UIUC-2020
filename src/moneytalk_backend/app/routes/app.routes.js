module.exports = app => {
    const Data = require("../controllers/Data.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Data
    router.post("/", Data.create);
  
    // Retrieve all Data
    router.get("/", Data.findAll);
  
    // Retrieve all published Data
    router.get("/published", Data.findAllPublished);
  
    // Retrieve a single Data with id
    router.get("/:id", Data.findOne);
  
    // Update a Data with id
    router.put("/:id", Data.update);
  
    // Delete a Data with id
    router.delete("/:id", Data.delete);
  
    // Delete all Data
    router.delete("/", Data.deleteAll);
  
    app.use('/api/home', router);
  };