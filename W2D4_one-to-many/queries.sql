-- TEST script file for the dogs DB --

-- READ ALL
SELECT * FROM dogs;
SELECT * FROM awards;

-- CREATE a dog
INSERT INTO dogs
	(name, age, breed, color)
VALUES
	('Spot', 4, 'Labrador', 'brown'),
    ('Everest', 6, 'Husky', 'black and white'),
    ('Zoey', 4, 'Beagle', 'brown');

INSERT INTO dogs
	(name, age, breed, color)
VALUES
	('Spot', 4, 'Labrador', 'brown');
    
    
-- CREATE an AWARD and give it a dog_id
INSERT INTO awards
	(title, dog_id)
VALUES
	("most playful", 1);
    
INSERT INTO awards
	(title, dog_id)
VALUES
	("best kisser", 1),
    ("fastest runner", 2),
    ("most friendly", 2);

-- (READ ONE) GET one dog
SELECT * FROM dogs
WHERE id = 2;


-- UPDATE one dog
UPDATE dogs
SET
	name = "Spot test",
	age = 6,
	breed = "test breed",
	color = "test color"
WHERE id = 4;
        



