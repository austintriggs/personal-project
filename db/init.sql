DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name text,
    description text,
    img text,
    price numeric(8,2)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    ship_address text,
    email varchar(30),
    total numeric(8,2)
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    productId INT,
    FOREIGN KEY (productId) REFERENCES products(id),
    orderId INT,
    FOREIGN KEY (orderId) REFERENCES orders(id),
    qty INT,
    unit_price numeric(8,2)
);

INSERT INTO products(name, description, img, price)
VALUES('Whistle 3', 'GPS Pet Tracker & Activity Monitor', 'https://d188n578n8c6rs.cloudfront.net/shopify/w03-grey.png', 79.95),
        ('Whistle 3 - Additional USB Charging Cable', '', 'https://cdn.shopify.com/s/files/1/0231/7673/products/W03_ChargerCable_medium.jpg?v=1484875854', 9.95);