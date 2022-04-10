use first_database;

create table if not exists users(
	id varchar(100) primary key comment 'user login ID',
    name varchar(100) not null comment 'user name',
    age tinyint unsigned not null comment 'user age, maximum 65,000 years old',
    password varchar(300) not null comment 'login password(encrypted)'
);
