DROP SCHEMA IF EXISTS claro_brasil_nodejs_test;

CREATE SCHEMA claro_brasil_nodejs;

USE claro_brasil_nodejs;

CREATE TABLE device (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name TEXT NOT NULL,
    model TEXT NOT NULL
);

-- SQLITE TEST DATABASE
/*CREATE TABLE device (
    id      INTEGER PRIMARY KEY AUTOINCREMENT
                    NOT NULL,
    user_id INTEGER NOT NULL,
    name    TEXT    NOT NULL,
    model   TEXT    NOT NULL
);

*/
