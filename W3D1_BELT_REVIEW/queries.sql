-- BELT REVIEW queries
SELECT * FROM users;
SELECT * FROM parties;

-- create a party --
INSERT INTO parties
	(what, location, date, all_ages, description, user_id)
VALUES
	('space party', 'Mars', '2024-10-05', '1', 'the best party in the solar system', 1);
    
-- GET ALL PARTIES AND THEIR USERS/HOST/CREATOR
SELECT * FROM parties
LEFT JOIN users
ON parties.user_id = users.id;

-- GET one party and their 'user'
SELECT * FROM parties
LEFT JOIN users
ON users.id = parties.user_id
WHERE parties.id = 1;

-- UPDATE a party
UPDATE parties
SET
	what = "update what",
    location = "update location",
    date = "2025-11-11",
    all_ages = 0,
    description = "an update!!!!"
WHERE id = 1;

-- DELETE party ---
-- DELETE FROM table_name WHERE condition;
DELETE FROM parties
WHERE id = 5; 



