CREATE DATABASE wspin;

CREATE TABLE wpis( 
    id SERIAL PRIMARY KEY,
    info VARCHAR(255),
    data TIMESTAMP
)

/**INSERT INTO warunki (info,data) VALUES ('xxx',current_timestamp);*//