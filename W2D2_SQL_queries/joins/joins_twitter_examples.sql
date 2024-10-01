-- JOINS
SELECT * FROM users;
SELECT * FROM tweets;
SELECT * FROM follows;
SELECT * FROM faves;

-- get all the users with the tweets they made
SELECT * FROM users
	JOIN tweets
	ON users.id = tweets.user_id;

-- get all the tweets a single user has made ex. users.id = 1
SELECT * FROM users
JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 1
ORDER BY tweets.created_at DESC;

-- M : N Many to many
-- get all users and the tweets they faved
SELECT * FROM users
LEFT JOIN faves
ON faves.user_id = users.id
LEFT JOIN tweets
ON faves.tweet_id = tweets.id;

-- get a user and the tweets they faved
SELECT * FROM users
LEFT JOIN faves
ON faves.user_id = users.id
LEFT JOIN tweets
ON faves.tweet_id = tweets.id
WHERE users.id = 1;


-- find who created a tweet
-- tweet id 2 ? who created it?
SELECT users.first_name AS 'name', tweet FROM tweets
JOIN users
ON tweets.user_id = users.id
WHERE tweets.id = 2;

-- get the names AND the amount of tweets of each user
SELECT first_name, COUNT(user_id) AS 'total tweets' FROM users
JOIN tweets
ON tweets.user_id = users.id
GROUP BY first_name;



