// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/burgers", function(req, res) {
        db.Burger.findAll().then(function (data) {
            var obj = {burgers: data}
            console.log(obj);
            res.render('index', obj)
        });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/burgers/create", function(req, res) {
    db.Burger.create({'burger_name': req.body.burger_name})
      .then(function(dbBurger) {
        res.redirect('/burgers')
      })
		  .catch(function(err) {
			  res.json(err);
		  });
	  ;
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/burgers/burger/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/burgers/update/:id", function(req, res) {
	  res.send(404);
  });
};


// var express = require("express");
//
// var router = express.Router();
//
// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");
//
// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
//
// router.post("/", function(req, res) {
//   burger.insertOne([
//     "burger_name", "devoured"
//   ], [
//      req.body.name, req.body.devoured
//   ], function() {
//     res.redirect("/");
//   });
// });
//
// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//
//   console.log("condition", condition);
//
//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });
//
//
// // Export routes for server.js to use.
// module.exports = router;
