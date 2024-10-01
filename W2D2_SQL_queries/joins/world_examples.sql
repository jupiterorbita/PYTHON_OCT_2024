-- world

-- 1. What query would you run to get all the countries that speak Slovene? 
-- Your query should return the name of the country, language and language percentage. 
-- Your query should arrange the result by language percentage in descending order. (1)

SELECT countries.name, language, percentage FROM countries
LEFT JOIN languages
ON languages.country_id = countries.id
WHERE language = "Slovene"
ORDER BY percentage DESC;

-- salika
-- 1. What query would you run to get all the customers inside city_id = 312? 
-- Your query should return customer first name, last name, email, and address.
SELECT first_name, last_name, email, address FROM customer
JOIN address
ON customer.address_id = address.address_id
WHERE city_id = 312;


