import { QuizQuestion } from '../../../../types';

export interface LessonBlock {
  type: 'text' | 'code' | 'alert';
  value: string;
  language?: string;
}

export interface LessonContent {
  title: string;
  content: LessonBlock[];
}

export interface AssignmentContent {
  title: string;
  questions: string[];
}

export const sqlLessons: Record<string, LessonContent> = {
  // Overview
  'overview-welcome': { 
    title: 'Welcome to SQL Mastery', 
    content: [
      { type: 'text', value: 'Welcome to the SQL Mastery course! This curriculum is designed to take you from an absolute beginner to an industry-ready SQL expert capable of designing complex database architectures and writing highly optimized queries.' },
      { type: 'text', value: 'In this course, we will not only cover the syntax of SQL, but we will dive deep into database theory, normalization, performance optimization, and advanced analytical queries using Window Functions and CTEs.' },
      { type: 'alert', value: 'Make sure you practice the queries on your own machine. Reading SQL is easy, but writing it to solve real-world problems requires hands-on experience.' }
    ] 
  },
  'overview-outcomes': { 
    title: 'Learning Outcomes', 
    content: [
      { type: 'text', value: 'By the end of this comprehensive learning path, you will be able to:' },
      { type: 'text', value: '• Design scalable and normalized relational database schemas from scratch.' },
      { type: 'text', value: '• Write complex SQL queries involving multi-table joins, subqueries, and aggregations.' },
      { type: 'text', value: '• Understand how the database engine executes queries and how to optimize them using indexes.' },
      { type: 'text', value: '• Implement advanced PostgreSQL features like JSONB, Arrays, and Window Functions.' },
      { type: 'text', value: '• Confidently tackle SQL interviews at top tech companies.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 1: INTRODUCTION & FUNDAMENTALS
  // ---------------------------------------------------------------------------
  'm1-l1': { 
    title: 'What is Data?', 
    content: [
      { type: 'text', value: 'In computing, data is information that has been translated into a form that is efficient for movement or processing. In the modern world, data is the most valuable asset a company can own.' },
      { type: 'text', value: 'Data can generally be categorized into three forms:' },
      { type: 'text', value: '1. Structured Data: Highly organized and formatted data, such as a table of users with specific columns (Name, Email, Age). This is what Relational Databases (SQL) excel at handling.' },
      { type: 'text', value: '2. Semi-structured Data: Data that does not reside in a relational database but has some organizational properties, like JSON or XML files.' },
      { type: 'text', value: '3. Unstructured Data: Data with no predefined data model, such as text documents, images, video, and audio.' },
      { type: 'alert', value: 'SQL (Structured Query Language) is specifically designed to manage and query Structured Data.' }
    ] 
  },
  'm1-l2': { 
    title: 'File system vs Database', 
    content: [
      { type: 'text', value: 'Before the advent of databases, data was stored in simple flat files (like text or CSV files) managed by the operating system\'s file system.' },
      { type: 'text', value: 'However, using flat files for complex applications presents several critical issues:' },
      { type: 'text', value: '• Data Redundancy and Inconsistency: The same information might be duplicated across multiple files. Updating one file without updating the others leads to inconsistent data.' },
      { type: 'text', value: '• Difficulty in Accessing Data: Writing a new program or script every time you need to extract specific information is inefficient.' },
      { type: 'text', value: '• Data Isolation: Data is scattered in various files and formats, making it hard to combine them for analysis.' },
      { type: 'text', value: '• Concurrent Access Anomalies: If two users try to edit a file simultaneously, data can be corrupted or lost.' },
      { type: 'text', value: 'A Database Management System (DBMS) solves all these problems by providing a centralized, secure, and structured way to store and retrieve data.' }
    ] 
  },
  'm1-l3': { 
    title: 'What is DBMS & RDBMS?', 
    content: [
      { type: 'text', value: 'A DBMS (Database Management System) is software that interacts with end-users, applications, and the database itself to capture and analyze the data.' },
      { type: 'text', value: 'An RDBMS (Relational Database Management System) is an advanced version of a DBMS. It is based on the Relational Model introduced by Edgar F. Codd.' },
      { type: 'text', value: 'Key characteristics of an RDBMS:' },
      { type: 'text', value: '• Data is stored in tables (relations) consisting of rows and columns.' },
      { type: 'text', value: '• Tables can be linked (related) to each other using common fields known as Primary Keys and Foreign Keys.' },
      { type: 'text', value: '• It enforces strict data integrity rules (e.g., ensuring an age column only contains numbers).' },
      { type: 'alert', value: 'SQL is the standard language used to interact with an RDBMS.' }
    ] 
  },
  'm1-l4': { 
    title: 'SQL vs NoSQL', 
    content: [
      { type: 'text', value: 'While SQL databases are Relational, NoSQL databases are Non-Relational and distributed.' },
      { type: 'text', value: 'SQL (Relational):' },
      { type: 'text', value: '• Structure: Uses tables with a predefined schema.' },
      { type: 'text', value: '• Scaling: Typically scaled vertically (upgrading the server hardware).' },
      { type: 'text', value: '• Best for: Complex queries, transactional systems requiring strict data consistency (ACID compliance).' },
      { type: 'text', value: 'NoSQL (Non-Relational):' },
      { type: 'text', value: '• Structure: Document-oriented (like JSON), Key-Value pairs, or Graph databases. No rigid schema.' },
      { type: 'text', value: '• Scaling: Scaled horizontally (adding more servers to a cluster).' },
      { type: 'text', value: '• Best for: Rapid development with changing data structures, massive amounts of unstructured data.' },
      { type: 'alert', value: 'Neither is inherently "better". You choose SQL for strict structure and relationships, and NoSQL for flexibility and horizontal scale.' }
    ] 
  },
  'm1-l5': { 
    title: 'Popular Databases', 
    content: [
      { type: 'text', value: 'The market is filled with several powerful relational databases. Here are the most prominent ones:' },
      { type: 'text', value: '1. PostgreSQL: Highly advanced, open-source object-relational database system. Known for reliability, feature robustness, and performance. (This is what we heavily focus on).' },
      { type: 'text', value: '2. MySQL: The world\'s most popular open-source database. Widely used in web applications (like WordPress).' },
      { type: 'text', value: '3. SQLite: A C-language library that implements a small, fast, self-contained SQL database engine. Used heavily in mobile apps and local testing.' },
      { type: 'text', value: '4. Oracle DB & Microsoft SQL Server: Enterprise-grade, proprietary databases used by massive corporations.' }
    ] 
  },
  'm1-l6': { 
    title: 'Installing PostgreSQL/MySQL', 
    content: [
      { type: 'text', value: 'To practice SQL, you need a database running on your machine. You can install it directly, but using Docker is the industry standard for development as it keeps your system clean.' },
      { type: 'text', value: 'To run PostgreSQL via Docker, open your terminal and execute:' },
      { type: 'code', language: 'bash', value: 'docker run --name my-postgres \\\n  -e POSTGRES_PASSWORD=mysecretpassword \\\n  -p 5432:5432 \\\n  -d postgres' },
      { type: 'text', value: 'This pulls the PostgreSQL image, sets a password, maps the default port (5432), and runs it in the background.' },
      { type: 'text', value: 'You can then connect to it using a GUI tool like DBeaver or pgAdmin, or using the command line tool `psql`:' },
      { type: 'code', language: 'bash', value: 'docker exec -it my-postgres psql -U postgres' }
    ] 
  },
  'm1-l7': { 
    title: 'Database Architecture', 
    content: [
      { type: 'text', value: 'Databases typically operate on a Client-Server architecture.' },
      { type: 'text', value: '• The Server: The actual DBMS software running on a machine (or cluster of machines), managing memory, disk storage, and incoming requests.' },
      { type: 'text', value: '• The Client: An application (like a Node.js backend, a GUI tool like DBeaver, or a CLI) that connects to the server over a network protocol (usually TCP/IP).' },
      { type: 'text', value: 'When your backend application executes a query, it acts as a client sending a SQL string to the database server. The server parses the SQL, executes it against the data files on disk, and sends the result set back to the client.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 2: DATABASE DESIGN FUNDAMENTALS
  // ---------------------------------------------------------------------------
  'm2-l1': { 
    title: 'Database, Schema, Tables', 
    content: [
      { type: 'text', value: 'Understanding the hierarchy of storage in an RDBMS is crucial.' },
      { type: 'text', value: '1. Database (Catalog): The highest level container. A single PostgreSQL server can host multiple distinct databases.' },
      { type: 'text', value: '2. Schema: A logical namespace inside a database. Think of it like a folder. It groups related tables together. (By default, PostgreSQL uses a schema named "public").' },
      { type: 'text', value: '3. Tables: The actual structures where data is stored. Tables exist inside schemas.' },
      { type: 'code', language: 'sql', value: '-- Create a logical grouping\nCREATE SCHEMA e_commerce;\n\n-- Create a table inside that schema\nCREATE TABLE e_commerce.users (\n  id INT,\n  username VARCHAR(50)\n);' }
    ] 
  },
  'm2-l2': { 
    title: 'Rows, Columns, Records', 
    content: [
      { type: 'text', value: 'A table is essentially a grid consisting of Columns and Rows.' },
      { type: 'text', value: '• Columns (Attributes / Fields): Define the structure of the data. Every column has a specific name and a Data Type (e.g., an "age" column must be an integer). A table can have many columns.' },
      { type: 'text', value: '• Rows (Records / Tuples): Represent a single, distinct entry of data. For example, one specific user in a users table.' },
      { type: 'alert', value: 'Unlike a spreadsheet, the order of rows in a relational database table is NOT guaranteed unless you explicitly sort them using an ORDER BY clause.' }
    ] 
  },
  'm2-l3': { 
    title: 'SQL Data Types', 
    content: [
      { type: 'text', value: 'When creating a column, you must specify its Data Type. This tells the database how to store the data on disk and what operations are valid.' },
      { type: 'text', value: 'Common Data Types:' },
      { type: 'text', value: '• Numeric: INT (whole numbers), DECIMAL or NUMERIC (exact fractions for money), FLOAT (approximate decimals).' },
      { type: 'text', value: '• String: VARCHAR(n) (variable-length string up to n characters), TEXT (unlimited length string), CHAR(n) (fixed-length string).' },
      { type: 'text', value: '• Date/Time: DATE (YYYY-MM-DD), TIMESTAMP (Date and time), TIMESTAMPTZ (Timestamp with timezone).' },
      { type: 'text', value: '• Boolean: BOOLEAN (TRUE, FALSE, or NULL).' },
      { type: 'code', language: 'sql', value: 'CREATE TABLE products (\n  id SERIAL,\n  name VARCHAR(255),\n  price DECIMAL(10, 2),\n  is_available BOOLEAN,\n  created_at TIMESTAMP\n);' }
    ] 
  },
  'm2-l4': { 
    title: 'Constraints (PK, FK, etc.)', 
    content: [
      { type: 'text', value: 'Constraints are rules applied to columns to ensure data accuracy and reliability.' },
      { type: 'text', value: '• PRIMARY KEY: Uniquely identifies each record in a table. A table can only have one primary key. It cannot be NULL.' },
      { type: 'text', value: '• FOREIGN KEY: A column that references the PRIMARY KEY of another table, creating a relationship between them.' },
      { type: 'text', value: '• UNIQUE: Ensures all values in a column are different.' },
      { type: 'text', value: '• NOT NULL: Ensures a column cannot have a NULL value.' },
      { type: 'text', value: '• CHECK: Ensures values in a column satisfy a specific condition.' },
      { type: 'code', language: 'sql', value: 'CREATE TABLE employees (\n  emp_id INT PRIMARY KEY,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  age INT CHECK (age >= 18),\n  department_id INT,\n  FOREIGN KEY (department_id) REFERENCES departments(id)\n);' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 3: SQL COMMANDS DEEP DIVE
  // ---------------------------------------------------------------------------
  'm3-l1': { 
    title: 'DDL (CREATE, ALTER, DROP)', 
    content: [
      { type: 'text', value: 'Data Definition Language (DDL) consists of commands that define or modify the database schema (its structure, not its data).' },
      { type: 'text', value: '• CREATE: Used to create tables, schemas, indexes, and views.' },
      { type: 'text', value: '• ALTER: Used to modify an existing database object, like adding a new column to a table.' },
      { type: 'text', value: '• DROP: Used to completely delete a database object. Warning: This removes the structure AND all data within it.' },
      { type: 'code', language: 'sql', value: '-- Create a table\nCREATE TABLE books (id INT, title VARCHAR(100));\n\n-- Add a new column\nALTER TABLE books ADD COLUMN author VARCHAR(50);\n\n-- Delete the table entirely\nDROP TABLE books;' }
    ] 
  },
  'm3-l2': { 
    title: 'DML (INSERT, UPDATE, DELETE)', 
    content: [
      { type: 'text', value: 'Data Manipulation Language (DML) consists of commands used to manage data within the existing schema.' },
      { type: 'text', value: '• INSERT: Adds new rows into a table.' },
      { type: 'text', value: '• UPDATE: Modifies existing rows. ALWAYS use a WHERE clause, otherwise you will update every row in the table!' },
      { type: 'text', value: '• DELETE: Removes rows from a table. Again, ALWAYS use a WHERE clause to avoid deleting everything.' },
      { type: 'code', language: 'sql', value: '-- Insert a single record\nINSERT INTO users (username, email) VALUES (\'john_doe\', \'john@example.com\');\n\n-- Update a specific record\nUPDATE users SET email = \'john_new@example.com\' WHERE username = \'john_doe\';\n\n-- Delete a specific record\nDELETE FROM users WHERE username = \'john_doe\';' },
      { type: 'alert', value: 'TRUNCATE is a DDL command that quickly removes all rows from a table. It is faster than DELETE without a WHERE clause because it doesn\'t scan the rows.' }
    ] 
  },
  'm3-l3': { 
    title: 'DQL (SELECT, WHERE, LIMIT)', 
    content: [
      { type: 'text', value: 'Data Query Language (DQL) is used to retrieve data from the database. The primary command is SELECT.' },
      { type: 'text', value: '• SELECT specifies the columns you want to retrieve. Use * to select all columns (though this is bad practice for performance in production).' },
      { type: 'text', value: '• FROM specifies the table.' },
      { type: 'text', value: '• WHERE filters the rows based on specific conditions.' },
      { type: 'text', value: '• LIMIT restricts the number of rows returned by the query.' },
      { type: 'code', language: 'sql', value: 'SELECT first_name, last_name, email \nFROM employees \nWHERE department = \'Engineering\' \nLIMIT 5;' },
      { type: 'text', value: 'The query above returns the names and emails of up to 5 employees who work in the Engineering department.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 4: FILTERING & OPERATORS
  // ---------------------------------------------------------------------------
  'm4-l1': { 
    title: 'Comparison Operators', 
    content: [
      { type: 'text', value: 'Comparison operators are used in the WHERE clause to filter records.' },
      { type: 'text', value: '• `=` (Equal to)' },
      { type: 'text', value: '• `<>` or `!=` (Not equal to)' },
      { type: 'text', value: '• `>` (Greater than), `<` (Less than)' },
      { type: 'text', value: '• `>=` (Greater than or equal to), `<=` (Less than or equal to)' },
      { type: 'code', language: 'sql', value: '-- Find products costing exactly $10\nSELECT * FROM products WHERE price = 10.00;\n\n-- Find expensive products\nSELECT * FROM products WHERE price >= 100.00;' }
    ] 
  },
  'm4-l2': { 
    title: 'Logical Operators', 
    content: [
      { type: 'text', value: 'Logical operators allow you to combine multiple conditions in a WHERE clause.' },
      { type: 'text', value: '• AND: Requires ALL conditions to be true.' },
      { type: 'text', value: '• OR: Requires AT LEAST ONE condition to be true.' },
      { type: 'text', value: '• NOT: Reverses the boolean result of a condition.' },
      { type: 'code', language: 'sql', value: '-- Using AND\nSELECT * FROM users WHERE age > 18 AND country = \'US\';\n\n-- Using OR with Parentheses for grouping\nSELECT * FROM products WHERE (category = \'Electronics\' OR category = \'Computers\') AND stock > 0;' },
      { type: 'alert', value: 'Always use parentheses when combining AND and OR operators to ensure the logic evaluates exactly as you intend.' }
    ] 
  },
  'm4-l3': { 
    title: 'Advanced Filtering (IN, LIKE)', 
    content: [
      { type: 'text', value: 'SQL provides advanced operators for cleaner syntax and string matching.' },
      { type: 'text', value: '• IN: Allows you to specify multiple possible values for a column, replacing multiple OR conditions.' },
      { type: 'text', value: '• BETWEEN: Selects values within a given range (inclusive).' },
      { type: 'text', value: '• LIKE: Used for pattern matching in strings. The percent sign `%` represents zero, one, or multiple characters. The underscore `_` represents a single character.' },
      { type: 'code', language: 'sql', value: '-- Instead of: category = \'A\' OR category = \'B\' OR category = \'C\'\nSELECT * FROM products WHERE category IN (\'A\', \'B\', \'C\');\n\n-- Find prices between 50 and 100\nSELECT * FROM products WHERE price BETWEEN 50 AND 100;\n\n-- Find emails ending in @gmail.com\nSELECT * FROM users WHERE email LIKE \'%@gmail.com\';\n\n-- Find names starting with J and exactly 4 letters long (J _ _ _)\nSELECT * FROM users WHERE name LIKE \'J___\';' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 5: SQL FUNCTIONS
  // ---------------------------------------------------------------------------
  'm5-l1': { 
    title: 'String Functions', 
    content: [
      { type: 'text', value: 'Databases provide built-in functions to manipulate text strings directly in your query.' },
      { type: 'text', value: '• UPPER(string) / LOWER(string): Converts text to upper or lower case.' },
      { type: 'text', value: '• CONCAT(str1, str2): Joins multiple strings together.' },
      { type: 'text', value: '• LENGTH(string): Returns the number of characters in a string.' },
      { type: 'text', value: '• SUBSTRING(string, start, length): Extracts a part of a string.' },
      { type: 'code', language: 'sql', value: '-- Generate full names and ensure emails are lowercase\nSELECT \n  CONCAT(first_name, \' \', last_name) AS full_name, \n  LOWER(email) AS standardized_email\nFROM users;' }
    ] 
  },
  'm5-l2': { 
    title: 'Numeric Functions', 
    content: [
      { type: 'text', value: 'Numeric functions allow you to perform math operations inside your query.' },
      { type: 'text', value: '• ROUND(number, decimals): Rounds a number to a specified decimal place.' },
      { type: 'text', value: '• CEIL(number): Rounds a number UP to the nearest integer.' },
      { type: 'text', value: '• FLOOR(number): Rounds a number DOWN to the nearest integer.' },
      { type: 'text', value: '• ABS(number): Returns the absolute (positive) value.' },
      { type: 'code', language: 'sql', value: '-- Apply a 15% discount and round to 2 decimal places\nSELECT \n  product_name, \n  price AS original_price, \n  ROUND(price * 0.85, 2) AS discounted_price \nFROM products;' }
    ] 
  },
  'm5-l3': { 
    title: 'Date Functions', 
    content: [
      { type: 'text', value: 'Working with dates is a very common task in backend engineering.' },
      { type: 'text', value: '• CURRENT_DATE / NOW(): Returns the current date (and time).' },
      { type: 'text', value: '• EXTRACT(part FROM date): Retrieves a specific part of a date (e.g., Year, Month, Day).' },
      { type: 'text', value: '• DATE_ADD / INTERVAL: Used to add or subtract time from a date.' },
      { type: 'code', language: 'sql', value: '-- Find users who registered in the current year\nSELECT * FROM users \nWHERE EXTRACT(YEAR FROM registration_date) = EXTRACT(YEAR FROM CURRENT_DATE);\n\n-- Find accounts expiring in the next 30 days\nSELECT * FROM subscriptions \nWHERE expiry_date BETWEEN NOW() AND NOW() + INTERVAL \'30 days\';' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 6: AGGREGATION & GROUPING
  // ---------------------------------------------------------------------------
  'm6-l1': { 
    title: 'Aggregate Functions', 
    content: [
      { type: 'text', value: 'Aggregate functions perform a calculation on a set of values and return a single value. They are incredibly useful for reporting and data analysis.' },
      { type: 'text', value: 'The most commonly used aggregate functions are:' },
      { type: 'text', value: '• COUNT(): Returns the number of rows that match a specified criterion.' },
      { type: 'text', value: '• SUM(): Returns the total sum of a numeric column.' },
      { type: 'text', value: '• AVG(): Returns the average value of a numeric column.' },
      { type: 'text', value: '• MIN() / MAX(): Returns the smallest or largest value in a column.' },
      { type: 'code', language: 'sql', value: '-- Find the total number of orders placed in 2023\nSELECT COUNT(id) AS total_orders\nFROM orders \nWHERE EXTRACT(YEAR FROM created_at) = 2023;\n\n-- Calculate the average salary of employees in department 5\nSELECT AVG(salary) AS avg_salary, MAX(salary) as highest_salary\nFROM employees\nWHERE department_id = 5;' },
      { type: 'alert', value: 'Important: Aggregate functions ignore NULL values, except for COUNT(*), which counts all rows regardless of NULLs.' }
    ] 
  },
  'm6-l2': { 
    title: 'GROUP BY & HAVING', 
    content: [
      { type: 'text', value: 'The GROUP BY statement groups rows that have the same values into summary rows. It is almost always used in conjunction with aggregate functions (COUNT, MAX, MIN, SUM, AVG).' },
      { type: 'text', value: 'The HAVING clause was added to SQL because the WHERE keyword cannot be used to filter aggregate functions.' },
      { type: 'text', value: 'Think of WHERE as filtering the raw rows BEFORE grouping, and HAVING as filtering the summarized groups AFTER grouping.' },
      { type: 'code', language: 'sql', value: '-- Calculate the total sales for each product category\nSELECT category, SUM(amount) as total_sales\nFROM sales\nGROUP BY category;\n\n-- Find categories that have total sales exceeding $50,000\nSELECT category, SUM(amount) as total_sales\nFROM sales\nWHERE status = \'completed\' -- Filter rows first\nGROUP BY category\nHAVING SUM(amount) > 50000; -- Filter groups second' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 7: SQL JOINS
  // ---------------------------------------------------------------------------
  'm7-l1': { 
    title: 'INNER JOIN', 
    content: [
      { type: 'text', value: 'A JOIN clause is used to combine rows from two or more tables, based on a related column between them (usually a primary key / foreign key relationship).' },
      { type: 'text', value: 'The INNER JOIN returns only the records that have matching values in BOTH tables.' },
      { type: 'text', value: 'If there is a user with no orders, or an order with a non-existent user_id, those records are completely excluded from the result.' },
      { type: 'code', language: 'sql', value: '-- Get a list of orders along with the name of the user who placed them\nSELECT orders.id, orders.total_amount, users.username, users.email\nFROM orders\nINNER JOIN users ON orders.user_id = users.id;' },
      { type: 'alert', value: 'INNER JOIN is the default join type in most SQL dialects. If you just write JOIN, it acts as an INNER JOIN.' }
    ] 
  },
  'm7-l2': { 
    title: 'LEFT & RIGHT JOIN', 
    content: [
      { type: 'text', value: 'Unlike INNER JOIN, OUTER joins (LEFT, RIGHT) will return records even if there is no match on the other side.' },
      { type: 'text', value: '• LEFT JOIN: Returns ALL records from the left table (table1), and the matched records from the right table (table2). If there is no match, the result is NULL on the right side.' },
      { type: 'text', value: '• RIGHT JOIN: Exactly the same, but reversed. Returns ALL records from the right table.' },
      { type: 'code', language: 'sql', value: '-- Get all users, and their orders if they have any.\n-- Users who have never placed an order will still appear in the result,\n-- but the order.total_amount column will be NULL for them.\nSELECT users.username, orders.total_amount\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;' }
    ] 
  },
  'm7-l3': { 
    title: 'FULL, SELF, CROSS JOIN', 
    content: [
      { type: 'text', value: 'Advanced join types are necessary for specific edge cases or complex analytical reports.' },
      { type: 'text', value: '• FULL OUTER JOIN: Returns all records when there is a match in either the left or right table. Unmatched rows contain NULLs for the missing side.' },
      { type: 'text', value: '• SELF JOIN: Joining a table to itself. This is extremely common for hierarchical data, such as finding the manager for each employee (where the manager is also an employee).' },
      { type: 'text', value: '• CROSS JOIN: Returns the Cartesian product of rows from both tables. If table A has 5 rows and B has 5, the result has 25 rows.' },
      { type: 'code', language: 'sql', value: '-- Self Join: Find the name of the manager for each employee\nSELECT e.name AS Employee, m.name AS Manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 8: SUBQUERIES
  // ---------------------------------------------------------------------------
  'm8-l1': { 
    title: 'Single & Multiple Row Subqueries', 
    content: [
      { type: 'text', value: 'A Subquery (or Nested Query) is a query within another SQL query. They are typically placed inside the WHERE, HAVING, or FROM clauses.' },
      { type: 'text', value: '• Single-row Subqueries: Return exactly one row and one column. You use standard comparison operators like =, >, < with them.' },
      { type: 'text', value: '• Multiple-row Subqueries: Return a column with more than one row. You must use operators like IN, ANY, or ALL to handle the multiple values.' },
      { type: 'code', language: 'sql', value: '-- Single-row subquery: Find users older than the average age\nSELECT name, age FROM users\nWHERE age > (\n  SELECT AVG(age) FROM users\n);\n\n-- Multiple-row subquery: Find users who ordered a specific product\nSELECT name FROM users\nWHERE id IN (\n  SELECT user_id FROM orders WHERE product_name = \'Laptop\'\n);' }
    ] 
  },
  'm8-l2': { 
    title: 'Nested Queries & Operators', 
    content: [
      { type: 'text', value: 'The EXISTS operator is a very powerful way to write subqueries. It tests for the existence of ANY record in a subquery and returns a simple true or false.' },
      { type: 'text', value: 'EXISTS is highly optimized by database engines. It often performs much faster than the IN operator because the engine stops scanning as soon as it finds a single matching row.' },
      { type: 'code', language: 'sql', value: '-- Find categories that have at least one active product\nSELECT name FROM categories c\nWHERE EXISTS (\n  SELECT 1 FROM products p \n  WHERE p.category_id = c.id AND p.status = \'active\'\n);' },
      { type: 'alert', value: 'Notice the `SELECT 1`. When using EXISTS, the database doesn\'t care what columns you select in the subquery, only whether rows are returned. Using `SELECT 1` is standard convention.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 9: ADVANCED SQL CONCEPTS
  // ---------------------------------------------------------------------------
  'm9-l1': { 
    title: 'Views', 
    content: [
      { type: 'text', value: 'A View is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table, but the data is dynamically fetched when you query the view.' },
      { type: 'text', value: 'Views serve two main purposes: Security (hiding sensitive columns like passwords from analysts) and Simplicity (hiding complex JOIN logic behind a simple table name).' },
      { type: 'code', language: 'sql', value: '-- Create a secure view for the marketing team\nCREATE VIEW marketing_users AS\nSELECT id, first_name, email, created_at \nFROM users \nWHERE email_verified = true;\n\n-- The marketing team can now query this simply:\nSELECT * FROM marketing_users;' }
    ] 
  },
  'm9-l2': { 
    title: 'Indexing (B-Tree, Composite)', 
    content: [
      { type: 'text', value: 'An Index is a data structure (typically a B-Tree) that improves the speed of data retrieval operations on a database table. It functions similarly to an index in a book.' },
      { type: 'text', value: 'Without an index, the database must perform a "Sequential Scan" (reading every single row) to find matches. With an index, it can find them in O(log N) time using an "Index Scan".' },
      { type: 'code', language: 'sql', value: '-- Create a simple index on a frequently searched column\nCREATE INDEX idx_user_email ON users(email);\n\n-- Create a composite index (multiple columns) for complex queries\nCREATE INDEX idx_user_status_age ON users(status, age);' },
      { type: 'alert', value: 'Do not over-index! Indexes speed up SELECT statements, but they slow down INSERT, UPDATE, and DELETE operations because the index must be updated every time data changes.' }
    ] 
  },
  'm9-l3': { 
    title: 'Performance & EXPLAIN', 
    content: [
      { type: 'text', value: 'The EXPLAIN statement in PostgreSQL shows the execution plan of a query. It tells you exactly how the database engine intends to execute your statement, which tables it will scan, and what indexes it will use.' },
      { type: 'text', value: 'Using EXPLAIN ANALYZE actually executes the query and shows both the estimated and the actual runtime. It is your primary tool for diagnosing slow queries.' },
      { type: 'code', language: 'sql', value: '-- Analyze a slow query\nEXPLAIN ANALYZE \nSELECT * FROM orders WHERE total_amount > 1000;\n\n-- In the output, look out for "Seq Scan" on massive tables.\n-- If you see one, consider adding an index!' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 10: TRANSACTIONS & ACID
  // ---------------------------------------------------------------------------
  'm10-l1': { 
    title: 'Transactions Basics', 
    content: [
      { type: 'text', value: 'A transaction is a sequence of SQL operations treated as a single logical unit of work. If any operation within the block fails, the entire transaction is aborted (rolled back), and no changes are made.' },
      { type: 'text', value: 'This is absolutely critical for financial systems. Imagine transferring money: you deduct from Account A and add to Account B. If the server crashes in between, money is lost forever unless wrapped in a transaction.' },
      { type: 'code', language: 'sql', value: 'BEGIN;\n\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\n\nCOMMIT;' }
    ] 
  },
  'm10-l2': { 
    title: 'ACID Properties', 
    content: [
      { type: 'text', value: 'Relational databases guarantee ACID properties for transactions, ensuring maximum data integrity:' },
      { type: 'text', value: '• Atomicity: "All or nothing". The transaction fully completes, or it is completely aborted.' },
      { type: 'text', value: '• Consistency: The database must transition from one valid state to another valid state, never violating constraints (like checking if balance drops below zero).' },
      { type: 'text', value: '• Isolation: Concurrent transactions running simultaneously do not interfere with each other.' },
      { type: 'text', value: '• Durability: Once a transaction is committed, the changes are written to disk and are permanent, even if the power goes out the next second.' }
    ] 
  },
  'm10-l3': { 
    title: 'Rollback & Savepoints', 
    content: [
      { type: 'text', value: 'If a transaction encounters an error (or if your application logic decides to abort), you issue a ROLLBACK command. Savepoints allow you to roll back parts of a transaction without aborting the entire unit of work.' },
      { type: 'code', language: 'sql', value: 'BEGIN;\nINSERT INTO logs (msg) VALUES (\'Job started\');\nSAVEPOINT before_risky_operation;\n\n-- Attempt something that might fail\nINSERT INTO logs (msg) VALUES (\'Risky operation failed\');\n\n-- Roll back just the risky part, keep the initial log\nROLLBACK TO before_risky_operation;\n\nCOMMIT;' }
    ] 
  },
  'm10-l4': { 
    title: 'Locks & Deadlocks', 
    content: [
      { type: 'text', value: 'To guarantee Isolation, databases use Locks. If Transaction A is modifying a row, it places an exclusive lock on it, preventing Transaction B from modifying that same row until A commits or rolls back.' },
      { type: 'text', value: 'A Deadlock occurs when Transaction A holds a lock that B needs, and B holds a lock that A needs. Both wait forever for the other to finish. The DBMS automatically detects this cycle and kills one of the transactions to resolve the gridlock.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 11: STORED PROCEDURES
  // ---------------------------------------------------------------------------
  'm11-l1': { 
    title: 'Functions vs Procedures', 
    content: [
      { type: 'text', value: 'Stored procedures and functions are blocks of reusable SQL and procedural code stored directly inside the database.' },
      { type: 'text', value: '• Functions: Must always return a value (or a table). They can be called directly inside a SELECT statement. However, they cannot manage their own transactions.' },
      { type: 'text', value: '• Procedures: Do not return a value. They are used to execute complex business logic, and crucially, they CAN execute COMMIT and ROLLBACK statements inside them.' }
    ] 
  },
  'm11-l2': { 
    title: 'Parameters & Returns', 
    content: [
      { type: 'text', value: 'You can pass IN parameters (inputs), OUT parameters (outputs), and INOUT parameters to functions.' },
      { type: 'code', language: 'sql', value: 'CREATE OR REPLACE FUNCTION get_department_headcount(dept_id INT) \nRETURNS INT AS $$\nDECLARE \n  total_employees INT;\nBEGIN\n  SELECT COUNT(*) INTO total_employees \n  FROM employees \n  WHERE department_id = dept_id;\n  \n  RETURN total_employees;\nEND;\n$$ LANGUAGE plpgsql;' }
    ] 
  },
  'm11-l3': { 
    title: 'PL/pgSQL basics', 
    content: [
      { type: 'text', value: 'PL/pgSQL is a procedural language extension specifically for PostgreSQL. It adds programming control structures—like IF/ELSE blocks, FOR loops, and exception handling—to standard SQL.' },
      { type: 'code', language: 'sql', value: 'CREATE PROCEDURE transfer_funds(sender INT, receiver INT, amount DECIMAL) AS $$\nBEGIN\n  IF (SELECT balance FROM accounts WHERE id = sender) >= amount THEN\n    UPDATE accounts SET balance = balance - amount WHERE id = sender;\n    UPDATE accounts SET balance = balance + amount WHERE id = receiver;\n  ELSE\n    RAISE EXCEPTION \'Insufficient funds for transfer\';\n  END IF;\nEND;\n$$ LANGUAGE plpgsql;' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 12: DATABASE RELATIONSHIPS
  // ---------------------------------------------------------------------------
  'm12-l1': { 
    title: 'One-to-One', 
    content: [
      { type: 'text', value: 'A one-to-one relationship exists when a single record in Table A is linked to exactly one record in Table B.' },
      { type: 'text', value: 'This is often implemented by putting a UNIQUE constraint on the foreign key column. It is commonly used to separate sensitive or rarely-accessed data into a different table to improve performance.' },
      { type: 'text', value: 'Example: A `users` table and a `user_security_settings` table.' }
    ] 
  },
  'm12-l2': { 
    title: 'One-to-Many', 
    content: [
      { type: 'text', value: 'The one-to-many relationship is the workhorse of relational databases. One row in Table A can be linked to many rows in Table B, but a row in Table B links back to only one row in Table A.' },
      { type: 'text', value: 'This is implemented by placing a Foreign Key on the "many" side (Table B). Example: One User can place Many Orders, so the `orders` table has a `user_id` foreign key.' }
    ] 
  },
  'm12-l3': { 
    title: 'Many-to-Many', 
    content: [
      { type: 'text', value: 'A many-to-many relationship occurs when multiple rows in Table A can link to multiple rows in Table B.' },
      { type: 'text', value: 'Relational databases do not support this directly. You MUST create a third table, known as a Junction Table or Join Table, to resolve this into two one-to-many relationships.' },
      { type: 'text', value: 'Example: Students and Courses. You create a `enrollments` table holding `student_id` and `course_id`. Both columns together form the primary key of the junction table.' }
    ] 
  },
  'm12-l4': { 
    title: 'ER Diagrams', 
    content: [
      { type: 'text', value: 'Entity-Relationship (ER) Diagrams are visual blueprints of your database architecture.' },
      { type: 'text', value: 'They display tables (Entities), their columns (Attributes), and the relationships between them using Crow\'s Foot notation.' },
      { type: 'alert', value: 'Professional engineers always sketch out their schemas using ER diagrams (like dbdiagram.io or Lucidchart) before writing any SQL CREATE statements.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 13: NORMALIZATION
  // ---------------------------------------------------------------------------
  'm13-l1': { 
    title: 'Database Anomalies', 
    content: [
      { type: 'text', value: 'An unnormalized database stores too much redundant data in a single giant table (like an Excel spreadsheet). This leads to critical anomalies:' },
      { type: 'text', value: '• Update Anomaly: If a user changes their phone number, you might have to locate and update 50 different rows where their name appears.' },
      { type: 'text', value: '• Deletion Anomaly: Deleting an order might accidentally delete the only record you have of that customer\'s shipping address.' },
      { type: 'text', value: '• Insertion Anomaly: You might not be able to add a new customer into the system until they place an order.' }
    ] 
  },
  'm13-l2': { 
    title: 'Normal Forms', 
    content: [
      { type: 'text', value: 'Normalization is a systematic approach to decomposing tables to eliminate data redundancy.' },
      { type: 'text', value: '• 1NF (First Normal Form): Ensure every column holds atomic values. Do not store comma-separated lists or arrays in a standard text column.' },
      { type: 'text', value: '• 2NF (Second Normal Form): The table must be in 1NF, and all non-key attributes must depend on the ENTIRE primary key (relevant for composite keys).' },
      { type: 'text', value: '• 3NF (Third Normal Form): The table must be in 2NF, and no non-key attribute can depend on another non-key attribute (eliminate transitive dependencies).' },
      { type: 'alert', value: 'In production systems, you generally aim to normalize up to 3NF. Going further (BCNF, 4NF) is rare and often hurts performance.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 14: POSTGRESQL ADVANCED
  // ---------------------------------------------------------------------------
  'm14-l1': { 
    title: 'UUID, JSONB, Arrays, ENUM', 
    content: [
      { type: 'text', value: 'PostgreSQL provides incredibly powerful data types that go far beyond standard ANSI SQL.' },
      { type: 'text', value: '• UUID: A 128-bit universally unique identifier (e.g. 550e8400-e29b-41d4-a716-446655440000). Highly recommended for Primary Keys on public APIs over sequential integers to prevent ID-guessing attacks.' },
      { type: 'text', value: '• JSONB: Stores JSON data in a parsed binary format. You can index and query deeply nested properties inside the JSON almost as fast as a normal column.' },
      { type: 'text', value: '• Arrays: You can store an array of integers or text directly in a column.' },
      { type: 'code', language: 'sql', value: 'CREATE TABLE api_logs (\n  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,\n  request_payload JSONB NOT NULL,\n  tags TEXT[]\n);\n\n-- Query inside the JSON object!\nSELECT * FROM api_logs WHERE request_payload->>\'user_action\' = \'login\';' }
    ] 
  },
  'm14-l2': { 
    title: 'CTE & Recursive Query', 
    content: [
      { type: 'text', value: 'Common Table Expressions (CTEs), introduced by the WITH clause, make complex queries highly readable by creating temporary, named result sets that exist only during the execution of the query.' },
      { type: 'text', value: 'Recursive CTEs are specifically designed to query hierarchical or graph data, like a company\'s organizational chart (employee -> manager -> VP) or a nested folder structure.' },
      { type: 'code', language: 'sql', value: 'WITH RegionalSales AS (\n  SELECT region, SUM(amount) as total \n  FROM sales \n  GROUP BY region\n)\nSELECT region, total \nFROM RegionalSales \nWHERE total > (SELECT AVG(total) FROM RegionalSales);' }
    ] 
  },
  'm14-l3': { 
    title: 'Window Functions', 
    content: [
      { type: 'text', value: 'Window functions perform calculations across a set of table rows related to the current row. UNLIKE aggregate functions with GROUP BY, window functions do NOT collapse the rows into a single output row.' },
      { type: 'text', value: 'They are essential for running totals, moving averages, and ranking.' },
      { type: 'code', language: 'sql', value: '-- Rank employees by salary within their specific department\nSELECT \n  name, \n  department_id, \n  salary, \n  RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as salary_rank\nFROM employees;' },
      { type: 'text', value: 'The PARTITION BY clause divides the rows into groups (windows), and the function is applied independently within each group.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 15: SQL FOR BACKEND DEVELOPERS
  // ---------------------------------------------------------------------------
  'm15-l1': { 
    title: 'Node.js + SQL Connections', 
    content: [
      { type: 'text', value: 'In a real backend application (like Node.js, Python, or Go), you connect to the database using a driver. The driver maintains a Connection Pool so the app doesn\'t incur the massive overhead of opening and closing a TCP connection for every single query.' },
      { type: 'alert', value: 'CRITICAL SECURITY RULE: NEVER concatenate user input directly into your SQL string. This leads to SQL Injection vulnerabilities, allowing hackers to destroy or steal your data. ALWAYS use Parameterized Queries.' },
      { type: 'code', language: 'javascript', value: '// Using the "pg" driver in Node.js\n// Notice the $1 and $2 parameters. The driver escapes them safely.\nconst result = await pool.query(\n  \'SELECT * FROM users WHERE email = $1 AND is_active = $2\', \n  [req.body.email, true]\n);' }
    ] 
  },
  'm15-l2': { 
    title: 'ORM vs Raw SQL (Prisma/TypeORM)', 
    content: [
      { type: 'text', value: 'ORMs (Object-Relational Mappers) like Prisma, TypeORM, or Sequelize abstract away raw SQL, letting you interact with the database using object-oriented code (e.g., TypeScript objects).' },
      { type: 'text', value: '• Pros: Strong type safety, massive developer velocity, easy migrations, and reduced boilerplate.' },
      { type: 'text', value: '• Cons: Can generate highly inefficient queries under the hood (like the notorious N+1 query problem). They make complex analytical queries difficult to express.' },
      { type: 'text', value: 'Best Practice: Use an ORM for 90% of your CRUD operations, but drop down to a Raw SQL query builder (like Kysely or Knex) for the 10% of complex, performance-critical analytical queries.' }
    ] 
  },
  'm15-l3': { 
    title: 'Migrations & Seeders', 
    content: [
      { type: 'text', value: '• Migrations: Scripts that version-control your database schema. Instead of manually running ALTER TABLE commands, you write migration files. This allows you to safely upgrade (or rollback) your database structure consistently across multiple environments (Local, Staging, Production).' },
      { type: 'text', value: '• Seeders: Scripts that populate the database with initial configurations or dummy data for local testing purposes.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 16: REAL WORLD PROJECTS
  // ---------------------------------------------------------------------------
  'm16-p1': { 
    title: 'Project 1: Student Management DB', 
    content: [
      { type: 'text', value: 'Your task is to design a highly normalized database for a University.' },
      { type: 'text', value: 'Requirements:' },
      { type: 'text', value: '1. Entities: Students, Professors, Departments, and Courses.' },
      { type: 'text', value: '2. Relationships: A Professor belongs to a Department. A Course is taught by one Professor.' },
      { type: 'text', value: '3. A Student can enroll in many Courses, and a Course has many Students (You must implement a Many-to-Many junction table).' },
      { type: 'text', value: '4. Track the final grade the student received directly in the enrollment junction table.' }
    ] 
  },
  'm16-p2': { 
    title: 'Project 2: E-Commerce DB', 
    content: [
      { type: 'text', value: 'Build the schema for an online store like Amazon or Shopify.' },
      { type: 'text', value: 'Requirements:' },
      { type: 'text', value: '1. Entities: Users, Products, Categories, Orders, and Order_Items.' },
      { type: 'text', value: '2. Handle product inventory tracking.' },
      { type: 'text', value: '3. Crucial Design Requirement: Ensure an Order captures the exact price of the product AT THE TIME OF PURCHASE.' },
      { type: 'alert', value: 'If you just link the order item to the Product table, and the admin increases the product price a year later, all historical receipts will incorrectly show the new price! You must duplicate the `purchase_price` into the order items table.' }
    ] 
  },
  'm16-p3': { 
    title: 'Project 3: LMS Database', 
    content: [
      { type: 'text', value: 'Design a Learning Management System (like Skillofied itself!).' },
      { type: 'text', value: 'Handle Courses, Modules, Lessons, User Progress (tracking exactly which lessons have been completed by which user), and Quiz submissions with scores.' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // MODULE 17: INTERVIEW PREPARATION
  // ---------------------------------------------------------------------------
  'm17-l1': { 
    title: 'Beginner: 50+ Questions', 
    content: [
      { type: 'text', value: 'In beginner interview rounds, interviewers test your basic syntax and understanding of DML.' },
      { type: 'text', value: 'Example Question: "Find all employees hired in the last 30 days."' },
      { type: 'code', language: 'sql', value: 'SELECT * \nFROM employees \nWHERE hire_date >= CURRENT_DATE - INTERVAL \'30 days\';' }
    ] 
  },
  'm17-l2': { 
    title: 'Intermediate: Joins & Aggregations', 
    content: [
      { type: 'text', value: 'Intermediate rounds focus heavily on GROUP BY, HAVING, and multi-table JOINs.' },
      { type: 'text', value: 'Example Question: "Find the names of departments that have more than 5 employees making over $100k."' },
      { type: 'code', language: 'sql', value: 'SELECT d.name \nFROM departments d\nJOIN employees e ON d.id = e.department_id\nWHERE e.salary > 100000\nGROUP BY d.id, d.name\nHAVING COUNT(e.id) > 5;' }
    ] 
  },
  'm17-l3': { 
    title: 'Advanced: Optimization & Indexing', 
    content: [
      { type: 'text', value: 'Advanced rounds will ask you to architect a schema or optimize a severely slow query.' },
      { type: 'text', value: 'Example Question: "We have a table with 100 million rows. This query filtering by user_id is taking 15 seconds. How do you fix it?"' },
      { type: 'text', value: 'Answer: First, run `EXPLAIN ANALYZE` on the query. If the output shows a `Seq Scan` (Sequential Scan), it means the database is reading all 100 million rows. I would solve this by creating a B-Tree index on the `user_id` column, which will change the execution plan to a lightning-fast `Index Scan`.' }
    ] 
  },
  'm17-l4': { 
    title: 'Company Level Practice', 
    content: [
      { type: 'text', value: 'FAANG interviews heavily test Window Functions and complex CTEs.' },
      { type: 'text', value: 'Classic LeetCode Hard Question: "Write a query to find the top 3 highest paid employees in EACH department."' },
      { type: 'code', language: 'sql', value: 'WITH RankedEmployees AS (\n  SELECT name, salary, department_id, \n  DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rank\n  FROM employees\n)\nSELECT name, salary, department_id \nFROM RankedEmployees \nWHERE rank <= 3;' }
    ] 
  },

  // ---------------------------------------------------------------------------
  // CAPSTONE PROJECT
  // ---------------------------------------------------------------------------
  'capstone-project': {
    title: 'Udemy + HackerRank Clone DB',
    content: [
      { type: 'text', value: 'Welcome to the Final Capstone Project! You will design a massive relational database for an LMS platform that also executes code.' },
      { type: 'text', value: 'Requirements:' },
      { type: 'text', value: '• User Management (Auth, Roles, Profiles)' },
      { type: 'text', value: '• Course hierarchies (Learning Path -> Course -> Module -> Lesson)' },
      { type: 'text', value: '• Coding Problems & Test Cases for interactive labs' },
      { type: 'text', value: '• Submission Tracking (Status, Execution Time, Memory Usage)' },
      { type: 'text', value: '• Subscriptions & Payment History (Stripe Integration)' },
      { type: 'alert', value: 'Draw out your schema using an ER Diagram tool like dbdiagram.io before you write a single line of SQL. Proper design here will save you hours of rewriting code later!' }
    ]
  }
};

export const sqlQuizzes: Record<string, QuizQuestion[]> = {
  'm1-quiz': [{ id: 1, question: 'What does RDBMS stand for?', options: ['Relational Database Management System', 'Rational Data Management System', 'Relational Data Movement System', 'None of the above'], correctAnswer: 'Relational Database Management System' }],
  'm2-quiz': [{ id: 1, question: 'Which of these is NOT a valid SQL data type?', options: ['VARCHAR', 'INT', 'BOOLEAN', 'ARRAY_STRING'], correctAnswer: 'ARRAY_STRING' }],
  'm3-quiz': [{ id: 1, question: 'Which command is used to add new rows to a table?', options: ['ADD', 'INSERT', 'UPDATE', 'APPEND'], correctAnswer: 'INSERT' }],
  'm4-quiz': [{ id: 1, question: 'Which operator is used to search for a specified pattern in a column?', options: ['LIKE', 'IN', 'BETWEEN', 'GET'], correctAnswer: 'LIKE' }],
  'm5-quiz': [{ id: 1, question: 'Which function returns the current date and time?', options: ['NOW()', 'TODAY()', 'CURRENT()', 'DATE()'], correctAnswer: 'NOW()' }],
  'm6-quiz': [{ id: 1, question: 'Which clause is used to filter the results of a GROUP BY?', options: ['HAVING', 'WHERE', 'FILTER', 'ORDER BY'], correctAnswer: 'HAVING' }],
  'm7-quiz': [{ id: 1, question: 'Which JOIN returns all records when there is a match in either left or right table?', options: ['FULL JOIN', 'INNER JOIN', 'LEFT JOIN', 'CROSS JOIN'], correctAnswer: 'FULL JOIN' }],
  'm8-quiz': [{ id: 1, question: 'What is a subquery?', options: ['A query nested inside another query', 'A query that returns no results', 'A query that runs in the background', 'A query on a view'], correctAnswer: 'A query nested inside another query' }],
  'm9-quiz': [{ id: 1, question: 'What is a View?', options: ['A virtual table based on a query', 'A physical copy of a table', 'An index', 'A stored procedure'], correctAnswer: 'A virtual table based on a query' }],
  'm10-quiz': [{ id: 1, question: 'What does the "A" in ACID stand for?', options: ['Atomicity', 'Accuracy', 'Availability', 'Array'], correctAnswer: 'Atomicity' }],
  'm11-quiz': [{ id: 1, question: 'What is a key difference between a function and a procedure?', options: ['A function must return a value', 'A procedure must return a value', 'They are exactly the same', 'Functions cannot take parameters'], correctAnswer: 'A function must return a value' }],
  'm12-quiz': [{ id: 1, question: 'What is needed to model a Many-to-Many relationship?', options: ['A junction/join table', 'Two foreign keys in the same table', 'It is not possible in SQL', 'A primary key'], correctAnswer: 'A junction/join table' }],
  'm13-quiz': [{ id: 1, question: 'What is the goal of Normalization?', options: ['To reduce data redundancy', 'To make queries slower', 'To increase data duplication', 'To avoid using primary keys'], correctAnswer: 'To reduce data redundancy' }],
  'm14-quiz': [{ id: 1, question: 'Which clause introduces a Common Table Expression (CTE)?', options: ['WITH', 'AS', 'CTE', 'LET'], correctAnswer: 'WITH' }],
  'm15-quiz': [{ id: 1, question: 'What is an ORM?', options: ['Object-Relational Mapper', 'Object-Relational Model', 'Object-Resource Mapper', 'Operational Relational Mapper'], correctAnswer: 'Object-Relational Mapper' }],
};

export const sqlAssignments: Record<string, AssignmentContent> = {
  'm1-assignment': { title: 'Practice: Create first DB', questions: ['Write a SQL command to create a new database named "skillofied".', 'Explain the difference between a Database and a Schema.'] },
  'm2-assignment': { title: 'Project: Student Management System Design', questions: ['List the entities required for a Student Management System.', 'Define the columns and data types for a Students table.'] },
  'm3-assignment': { title: 'Practice: Build Users & Orders', questions: ['Create a users table and an orders table with a foreign key relationship.', 'Insert 3 sample rows into each table.'] },
  'm4-assignment': { title: 'Practice: 50+ Query Problems', questions: ['Write a query to find all users whose name starts with "J".', 'Write a query to find all orders placed in the last 7 days.'] },
  'm5-assignment': { title: 'Practice: Analytics Queries', questions: ['Calculate the total revenue from the orders table.', 'Find the average order value.'] },
  'm6-assignment': { title: 'Practice: Revenue Reports', questions: ['Group orders by user_id and calculate total spent per user.', 'Filter for users who spent more than $100 using HAVING.'] },
  'm7-assignment': { title: 'Practice: Complex Joins', questions: ['Join Users, Orders, and Order_Items tables to show a complete receipt.', 'Find users who have never placed an order using a LEFT JOIN.'] },
  'm8-assignment': { title: 'Interview Practice: Nth Highest Salary', questions: ['Write a query to find the 2nd highest salary from an Employees table.'] },
  'm13-assignment': { title: 'Design Interview: Netflix Schema', questions: ['Design a schema for Netflix including Users, Profiles, Movies, and Watch History.', 'Normalize your schema to 3NF.'] },
};
