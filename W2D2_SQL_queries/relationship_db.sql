-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema w2d1_erds_schema
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `w2d1_erds_schema` ;

-- -----------------------------------------------------
-- Schema w2d1_erds_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `w2d1_erds_schema` DEFAULT CHARACTER SET utf8 ;
USE `w2d1_erds_schema` ;

-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `first_name` VARCHAR(100) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `w2d1_erds_schema`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `post_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_posts1_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_posts1`
    FOREIGN KEY (`post_id`)
    REFERENCES `w2d1_erds_schema`.`posts` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`pizzas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`pizzas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `size` INT NULL DEFAULT NULL,
  `sauce` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`tickets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`tickets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `venue` VARCHAR(45) NULL DEFAULT NULL,
  `seat` VARCHAR(45) NULL DEFAULT NULL,
  `user_id` INT NOT NULL,
  `price` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tickets_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_tickets_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `w2d1_erds_schema`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`toppings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`toppings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `is_veggie` TINYINT(1) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`toppings_and_pizzas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`toppings_and_pizzas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `topping_id` INT NOT NULL,
  `pizza_id` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_toppings_has_pizzas_pizzas1_idx` (`pizza_id` ASC) VISIBLE,
  INDEX `fk_toppings_has_pizzas_toppings1_idx` (`topping_id` ASC) VISIBLE,
  CONSTRAINT `fk_toppings_has_pizzas_pizzas1`
    FOREIGN KEY (`pizza_id`)
    REFERENCES `w2d1_erds_schema`.`pizzas` (`id`),
  CONSTRAINT `fk_toppings_has_pizzas_toppings1`
    FOREIGN KEY (`topping_id`)
    REFERENCES `w2d1_erds_schema`.`toppings` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `w2d1_erds_schema`.`toppins_has_pizzas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erds_schema`.`toppins_has_pizzas` (
  `topping_id` INT NOT NULL,
  `pizza_id` INT NOT NULL,
  PRIMARY KEY (`topping_id`, `pizza_id`),
  INDEX `fk_toppins_has_pizzas_pizzas1_idx` (`pizza_id` ASC) VISIBLE,
  INDEX `fk_toppins_has_pizzas_toppins1_idx` (`topping_id` ASC) VISIBLE,
  CONSTRAINT `fk_toppins_has_pizzas_pizzas1`
    FOREIGN KEY (`pizza_id`)
    REFERENCES `w2d1_erds_schema`.`pizzas` (`id`),
  CONSTRAINT `fk_toppins_has_pizzas_toppins1`
    FOREIGN KEY (`topping_id`)
    REFERENCES `w2d1_erds_schema`.`toppings` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
