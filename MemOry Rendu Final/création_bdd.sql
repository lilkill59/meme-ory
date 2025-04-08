CREATE DATABASE IF NOT EXISTS memory;
USE memory;

CREATE TABLE IF NOT EXISTS utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,   
    pseudo VARCHAR(255) NOT NULL,         
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);

CREATE TABLE IF NOT EXISTS scores (
    id INT AUTO_INCREMENT PRIMARY KEY,    
    utilisateur_id INT,                   
    niveau INT NOT NULL,                  
    temps INT NOT NULL,                 
    coups INT NOT NULL,                   
    date_partie TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    score INT NOT NULL, 
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE 
);
