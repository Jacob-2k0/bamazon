var mysql = require("mysql");
var inquirer = require("inquirer");
var passing1;
var newQuantity;
var total;

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayProducts();
});

function displayProducts() {
    console.log("Products available on Bamazon...\n");
    connection.query("SELECT item_id, product_name, price FROM products;", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      for (var i = 0; i < res.length; i++) {
        console.log(
          "Position: " +
            res[i].item_id +
            " || Product: " +
            res[i].product_name +
            " || Price: " +
            res[i].price
        );
      }
      order();
    });
}
  
  function order() {
    inquirer
    .prompt([
      {
        name: "itemID",
        type: "input",
        message: "Enter the ID of the product you would like to purchase. ",
      },
      {
          name: "quantity",
          type: "input",
          message: "How many units would you like to purchase?"
      }
    ])
    .then(function(answer) {
      var query = "SELECT price,stock_quantity FROM products WHERE item_id = ?";
      var temp = answer.itemID;
      connection.query(query, [temp], function(err, res) {
        console.log(res);
        if ( answer.quantity > res[0].stock_quantity ) {
            console.log("Insufficient Quantity!");
            order();
        } else if ( answer.quantity < res[0].stock_quantity ) {
            console.log("Processing order...");
            passing1 = answer.itemID;
            newQuantity = res[0].stock_quantity - answer.quantity;
            total = res[0].price * answer.quantity;
            placeOrder();
        }
        //console.log(res[1]);
      });
    });
  }

  function placeOrder() {
    var query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
    connection.query(query, [newQuantity, passing1], function(err, res) {
        if (err) throw err;
        console.log("Your order has been placed!");
        console.log("Your total is: ", total);
        
    });
    connection.end();
  }