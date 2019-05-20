DROP TABLE `Data1`;

CREATE TABLE IF NOT EXISTS `Data1` (
	`id` int(10) NOT NULL auto_increment,
	`created_at` datetime,
	`first_name` varchar(255),
	`last_name` varchar(255),
	`email` varchar(255),
	`latitude` varchar(255),
	`longitude` varchar(255),
	`ip` varchar(255),
	PRIMARY KEY( `id` )
);

DROP TABLE `Data2`;

CREATE TABLE IF NOT EXISTS `Data2` (
	`id` int(10) NOT NULL auto_increment,
	`created_at` datetime,
	`first_name` varchar(255),
	`last_name` varchar(255),
	`email` varchar(255),
	`latitude` varchar(255),
	`longitude` varchar(255),
	`ip` varchar(255),
	PRIMARY KEY( `id` )
);