var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "program1",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;

  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  // Log all results of the SELECT statement
  for (var i = 0; i < res.length; i++) {
  console.log("ID: " + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Stock: " + res[i].stock);
}
});
setTimeout(function(){

  inquirer.prompt([

    {
      type: "input",
      message: "Choose an item ID to buy an item...",
      name: "items"
    },

    {
      type: "input",
      message: "How many would you like to buy?",
      name: "stock"
    }

  ]).then(function(answer){

    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;

        if(answer.stock <= res[answer.items - 1].stock){
          connection.query("SELECT stock FROM products WHERE item_id = " + answer.items + ";", function(err, res){
            if (err) throw err;

            var total = res[0].stock - answer.stock;
            connection.query("UPDATE products SET stock = " + total + " WHERE item_id = " + answer.items + ";", function(err, res){
              if (err) throw err;

              console.log("purchase complete...");
              console.log("stock units decreased to " + total);
              connection.end();
            });
          });
          console.log("You have bought " + answer.stock + " " + res[answer.items - 1].product_name);
          console.log("Your total:" + "\nPrice:" + res[answer.items - 1].price * answer.stock + "\n---------------");
        }
        else{
          console.log("We only have " + res[answer.items - 1].stock + " available. Terminating purchase..." + "\n----------------");
          connection.end();
        }

    });


  });

},200);

});
