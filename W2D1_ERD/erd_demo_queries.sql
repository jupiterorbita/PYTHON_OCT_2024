-- this is a comment!
-- SQL queries

-- get all the users
SELECT * FROM users;

-- get a user where their id = 5
SELECT * FROM
    users
WHERE
    id = 5;

-- get all the tweets and created_at from the tweets tables
SELECT tweet, created_at FROM tweets;

-- insert a new user
INSERT INTO users
	(first_name, last_name, handle, birthday, created_at, updated_at)
VALUES
	('Alice', 'Alisson', 'aalison', '2000-08-02', NOW(), NOW());
    
-- update bob
UPDATE users
SET
	created_at = NOW(),
    updated_at = NOW()
WHERE
	id = 6;