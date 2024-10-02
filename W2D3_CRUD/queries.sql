-- TEST script file for the dogs DB --

-- READ ALL
SELECT * FROM dogs;

-- CREATE
INSERT INTO dogs
	(name, age, breed, color)
VALUES
	('Spot', 4, 'Labrador', 'brown'),
    ('Everest', 6, 'Husky', 'black and white'),
    ('Zoey', 4, 'Beagle', 'brown');

-- (READ ONE) GET one dog
SELECT * FROM dogs
WHERE id = 2;