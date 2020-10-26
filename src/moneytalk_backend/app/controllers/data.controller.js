const db = require("../models");
const Data = db.Data;
const Op = db.Sequelize.Op;

// Create and Save a new data
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a data
  const data = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save data in the database
  Data.create(data)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the data."
      });
    });
};

// Retrieve all datas from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Data.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Datas."
        });
      });
};

// Find a single Data with an id
exports.findOne = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Data.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Datas."
        });
      });
};

// Update a Data by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Data.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Data was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Data with id=" + id
        });
      });
};

// Delete a Data with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Data.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Data was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Data with id=${id}. Maybe Data was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Data with id=" + id
        });
      });
};

// Delete all Datas from the database.
exports.deleteAll = (req, res) => {
    Data.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Datas were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Datas."
          });
        });
};

// Find all published Datas
exports.findAllPublished = (req, res) => {
    Data.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Datas."
      });
    });
};