-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema w2d1_erd
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `w2d1_erd` ;

-- -----------------------------------------------------
-- Schema w2d1_erd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `w2d1_erd` DEFAULT CHARACTER SET utf8 ;
USE `w2d1_erd` ;

-- -----------------------------------------------------
-- Table `w2d1_erd`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erd`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(60) NULL,
  `age` INT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `w2d1_erd`.`bank_accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erd`.`bank_accounts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `account_number` INT NULL,
  `friendly_name` VARCHAR(45) NULL,
  `balance` FLOAT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bank_accounts_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_bank_accounts_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `w2d1_erd`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `w2d1_erd`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erd`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `make` VARCHAR(45) NULL,
  `is_electric` TINYINT(1) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cars_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cars_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `w2d1_erd`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `w2d1_erd`.`pizzas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erd`.`pizzas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sauce` VARCHAR(45) NULL,
  `size` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `w2d1_erd`.`toppings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erd`.`toppings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `is_veggie` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `w2d1_erd`.`toppings_has_pizzas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `w2d1_erd`.`toppings_has_pizzas` (
  `topping_id` INT NOT NULL,
  `pizza_id` INT NOT NULL,
  PRIMARY KEY (`topping_id`, `pizza_id`),
  INDEX `fk_toppings_has_pizzas_pizzas1_idx` (`pizza_id` ASC) VISIBLE,
  INDEX `fk_toppings_has_pizzas_toppings1_idx` (`topping_id` ASC) VISIBLE,
  CONSTRAINT `fk_toppings_has_pizzas_toppings1`
    FOREIGN KEY (`topping_id`)
    REFERENCES `w2d1_erd`.`toppings` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_toppings_has_pizzas_pizzas1`
    FOREIGN KEY (`pizza_id`)
    REFERENCES `w2d1_erd`.`pizzas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
