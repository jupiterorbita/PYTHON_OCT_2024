-- Users login registration

SELECT * FROM users;

INSERT INTO users
	(first_name, last_name, email, password)
VALUES
	('Alice', 'Allisson', 'a@a.com', '12345678'),
    ('Bob', 'Bobbers', 'b@b.com', 'monkey');
    
-- get a user by email 
SELECT * FROM users
WHERE email = 'aaaaaa@aaaaa.com';