-- INSERT INTO DEPARTMENT TABLE
INSERT INTO DEPARTMENT (NAME, DEPARTMENT_ID) VALUES ('Sales', 1);
INSERT INTO DEPARTMENT (NAME, DEPARTMENT_ID) VALUES('Engineering', 2);
INSERT INTO DEPARTMENT (NAME, DEPARTMENT_ID) VALUES('Finance', 3);
INSERT INTO DEPARTMENT (NAME, DEPARTMENT_ID) VALUES('Legal', 4);




-- INSERT INTO ROLE TABLE
INSERT INTO ROLE (TITLE, SALARY, DEPARTMENT_ID)
VALUES ("Sales Lead", 100000, 1); 
INSERT INTO ROLE (TITLE, SALARY, DEPARTMENT_ID)
VALUES ("Salesperson", 80000, 2); 
INSERT INTO ROLE (TITLE, SALARY, DEPARTMENT_ID)
VALUES ("Lead Engineer", 150000, 3); 
INSERT INTO ROLE (TITLE, SALARY, DEPARTMENT_ID)
VALUES ("Software Engineer", 120000, 4); 
INSERT INTO ROLE (TITLE, SALARY, DEPARTMENT_ID)
VALUES ("Accountant", 125000, 6); 
INSERT INTO ROLE (TITLE, SALARY, DEPARTMENT_ID)
VALUES ("Legal Team Lead", 250000, 7); 
INSERT INTO ROLE (TITLE, SALARY, DEPARTMENT_ID)
VALUES ("Lawyer", 190000, 8); 

-- INSERT INTO EMPLOYEE TABLE
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID) VALUES ("John", "Doe", 1, 3);
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID) VALUES ("Mike", "Chan", 2, 1); 
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID) VALUES ("Ashley", "Rodriguez", 3, null); 
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID) VALUES ("Kevin", "Tupik", 4, 3); 
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID) VALUES ("Malia", "Brown", 6, null); 
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID) VALUES ("Sarah", "Lourd", 7, null); 
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID) VALUES ("Tom", "Allen", 8, 7); 
