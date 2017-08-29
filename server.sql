DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price float(10, 2) NULL,
  stock int(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("xbox", "gaming", 249.99, 15);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("kobe 9 elite", "clothing", 174.35, 3);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("4k Television", "entertainment", 349.99, 8);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Electric Guitar", "music", 549.99, 5);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Halo: The Masterchief Edition", "gaming", 39.99, 20);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Guitar Amp", "music", 50, 3);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Burton Snowboard", "sports", 649.99, 7);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Burton Bindings", "sports", 149.99, 7);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Roku", "entertainment", 49, 25);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("2010 Lakers Championship Hat", "clothing", 129, 2);
