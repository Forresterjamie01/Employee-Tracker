-- DROP DATABASE IF EXISTS
DROP DATABASE IF EXISTS EMPLOYEES_DB;
-- CREATE DATABASE 
CREATE DATABASE EMPLOYEES_DB;
-- USE DATABASE; 
USE EMPLOYEES_DB;

-- *************************** CREATE QUERIES ***********************

-- CREATE TABLE department

CREATE TABLE department(
  DEPARTMENT_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(30)
); 

-- CREATE TABLE ROLE


CREATE TABLE role(
  ROLE_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  TITLE VARCHAR(30),
  SALARY DECIMAL,
  DEPARTMENT_ID INT
); 

-- CREATE TABLE employee 

CREATE TABLE employee(
   EMPLOYEE_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   
    FIRST_NAME VARCHAR(30),
   
    LAST_NAME VARCHAR(30), 
   
    ROLE_ID INT,
   
    MANAGER_ID INT
);



