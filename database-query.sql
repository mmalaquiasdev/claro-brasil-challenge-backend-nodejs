DROP SCHEMA IF EXISTS claro_brasil_nodejs;

CREATE SCHEMA `claro_brasil_nodejs` ;

USE `claro_brasil_nodejs`;

CREATE TABLE `device` (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name TEXT,
    model TEXT
);

--INSERT INTO device (user_id, name, model) VALUES (1, 'IPHONE SE (GSM)', 'IOS');
--INSERT INTO device (user_id, name, model) VALUES (1, 'SM-G920F', 'ANDROID');
