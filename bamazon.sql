DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("12ft Pool", "Outdoors", 197.59, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pineapple Crush (12 Pack)", "Food/Drink", 12.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TimHortons Hot Chocolate Mix", "Food/Drink", 4.98, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoverboard", "Transportation", 350.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HyperX Cloud II", "Electronics", 89.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Airpods", "Electronics", 307.73, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Snowball ICE", "Electronics", 105.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sports", 12.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skates", "Sports", 150.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dishwasher", "Appliances", 450.00, 15);