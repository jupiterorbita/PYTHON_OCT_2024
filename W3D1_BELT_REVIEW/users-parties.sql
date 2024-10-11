-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema belt-review
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `belt-review` ;

-- -----------------------------------------------------
-- Schema belt-review
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `belt-review` DEFAULT CHARACTER SET utf8 ;
USE `belt-review` ;

-- -----------------------------------------------------
-- Table `belt-review`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `belt-review`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(50) NULL,
  `password` CHAR(60) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `belt-review`.`parties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `belt-review`.`parties` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `what` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `date` DATE NULL,
  `all_ages` TINYINT(1) NULL,
  `description` TEXT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_parties_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_parties_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `belt-review`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
