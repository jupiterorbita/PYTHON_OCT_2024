-- CRUD queries W2D2

-- this is a comment
/* this is 
a multi line
comment
*/

-- SELECT
-- SELECT {{what we want to display}} FROM {{where we want to get it from}}
SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM pizzas;
SELECT * FROM toppings;
SELECT * FROM toppins_has_pizzas;

SELECT first_name, email FROM users;

-- INSERT
INSERT INTO users
	(email, first_name)
VALUES 
	('a@a.com', 'Alice');
    
-- multi insert
INSERT INTO users
	(email, first_name, last_name)
VALUES 
	('b@b.com', 'Batman', 'Wayne'),
    ('c@c.com', 'Carter', 'Carterson'),
    ('d@d.com', 'David', 'Davidson');

-- create a post
INSERT INTO posts
	(title, content, user_id)
VALUES 
	("I'm alice - hi", 'this post is about me', 3);

INSERT INTO posts
	(title, content, user_id)
VALUES 
	('second post haha!', 'joins are also cool', 1);

-- MANY to MANY
INSERT INTO pizzas
	(size, sauce)
VALUES 
	(10, 'marinara'),
    (12, 'bbq'),
    (12, 'marinara');

INSERT INTO toppings
	(name, is_veggie)
VALUES
	('pepperoni', 0),
    ('peppers', 1),
    ('pineapple', 0);
    
-- INSERT in the middle table
INSERT INTO toppins_has_pizzas
	(topping_id, pizza_id)
VALUES
	(1, 1),
    (2, 1);

-- UPDATE
UPDATE users
SET
	last_name = "Allisson",
    age = 17
WHERE 
	id = 1;
    
-- multi update
UPDATE users
SET 
	age = 22
WHERE id IN(2,3,4);

-- DELETE
DELETE FROM users
WHERE id = 1;

-- Carter (user_id 3) has made 2 posts. i want to see them?
SELECT * FROM posts
WHERE user_id = 3;

-- get all the users that are over 18 years old
SELECT first_name, age
FROM users
WHERE age > 18;