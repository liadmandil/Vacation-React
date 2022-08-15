-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: project-vacation
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL DEFAULT 'visitor',
  `craeted_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'liad','mandil','lili-mand','Mandil01!','admin','2022-06-16 09:08:03','2022-06-16 09:26:37'),(2,'yacki','mandil','yacki-mand','Mandil01','visitor','2022-06-16 09:08:03','2022-06-16 09:08:03'),(3,'gaya','shoshani','gaya-shosh','Shoshani01','visitor','2022-06-16 09:08:03','2022-06-16 09:08:03'),(4,'billy','mandil','bill-mand','Mandil00','visitor','2022-06-16 09:08:03','2022-06-16 09:08:03'),(5,'sagi','mandil','sagi-mand','Mandil02','visitor','2022-06-16 09:08:03','2022-06-16 09:08:03'),(6,'betty','mandil','bett-mand','Mandil03','visitor','2022-06-16 09:08:03','2022-06-16 09:08:03'),(7,'ben','shemer','benben1','ShemerBen','visitor','2022-06-16 09:12:10','2022-06-16 09:12:10'),(8,'dar','naor','dar-dar','NaorDar','visitor','2022-06-16 09:12:10','2022-06-16 09:12:10'),(9,'tal','rudni','tal-rud','RudniTal','visitor','2022-06-16 09:12:10','2022-06-16 09:12:10'),(10,'jonethan','raz','jon-raz','RazRaz00','visitor','2022-06-16 09:12:10','2022-06-16 09:12:10'),(11,'hezi','hanuni','hazi-hazi','hazihazi','visitor','2022-06-18 00:07:11','2022-06-18 00:07:11'),(12,'test','test','test','test','visitor','2022-06-18 14:21:48','2022-06-18 14:21:48'),(13,'test3','test3','test3','test3','visitor','2022-06-19 09:12:18','2022-06-19 09:12:18'),(14,'lili','mama','blabla','nksdlsdnc','visitor','2022-07-09 18:59:45','2022-07-09 18:59:45'),(15,'sdferf','dfgvdfvd','lililili','lilllilil','visitor','2022-07-10 14:44:04','2022-07-10 14:44:04'),(16,'asasas','asasas','asasas','asasas','visitor','2022-07-10 14:45:32','2022-07-10 14:45:32'),(17,'eeeeeeeee','eeeeeee','eeeeeeeee','eeeeeeee','visitor','2022-07-10 14:48:01','2022-07-10 14:48:01'),(18,'blabla','blabla','lili-mandi','123456','visitor','2022-07-11 09:21:50','2022-07-11 09:21:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-08 16:59:06
