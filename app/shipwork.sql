CREATE DATABASE IF NOT EXISTS `shipwork`;
USE `shipwork`;

CREATE TABLE IF NOT EXISTS `wrecks` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `timestamp` int(11) NOT NULL,
    `ip` text NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;