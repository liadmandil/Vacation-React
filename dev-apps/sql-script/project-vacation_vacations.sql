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
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(225) NOT NULL,
  `destination` varchar(45) NOT NULL,
  `image` varchar(10000) NOT NULL,
  `from_date` datetime NOT NULL,
  `to_date` datetime NOT NULL,
  `price` int NOT NULL,
  `follower_num` double NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (40,'barcelona  barcelona  barcelona barcelona  barcelona  barcelona  barcelona ','barcelona ','  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Oj9bySqK6GVhHIvnF9sdPoF1_jMiUJzgbw&usqp=CAU','2022-08-11 00:00:00','2022-08-10 00:00:00',333,0,'2022-08-04 20:24:29','2022-08-04 20:24:29'),(42,'tel aviv tel aviv tel aviv tel aviv tel aviv tel aviv','tel aviv','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZR_x5ZTaer4UsCl9S21v2MukjbJhTNt90Q&usqp=CAU','2022-09-03 18:00:00','2022-09-03 18:00:00',779,1,'2022-08-04 21:06:39','2022-08-04 21:06:39'),(43,'Berlin (/bɜːrˈlɪn/ bur-LIN, German: [bɛʁˈliːn] (listen))[7] is the capital and largest city of Germany by both area and population.','berlin','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg/270px-Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg','2022-08-18 00:00:00','2022-08-12 00:00:00',444,1,'2022-08-08 16:25:11','2022-08-08 16:25:11'),(44,'Paris (French pronunciation: ​[paʁi] (listen)) is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km² (41 sq mi),','paris','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/275px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg','2022-09-13 00:00:00','2022-09-27 00:00:00',1000,2,'2022-08-08 16:26:31','2022-08-08 16:26:31'),(45,'Rome (Italian and Latin: Roma [ˈroːma] (listen)) is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome','Rome','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Montage_2017.png/270px-Rome_Montage_2017.png','2022-11-14 00:00:00','2022-11-17 00:00:00',201,0,'2022-08-08 16:27:26','2022-08-08 16:27:26'),(46,'Budapest (UK: /ˌb(j)uːdəˈpɛst, ˌbʊd-, ˈb(j)uːdəpɛst, ˈbʊd-/, US: /ˈbuːdəpɛst, -pɛʃt, ˌbuːdəˈpɛʃt/;[10][11][12] Hungarian pronunciation: [ˈbudɒpɛʃt] (listen)) is the capital and most populous city of Hungary','Budapest ','https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Parliament_of_Hungary_November_2017.jpg/270px-Parliament_of_Hungary_November_2017.jpg','2022-08-24 00:00:00','2022-08-27 00:00:00',350,2,'2022-08-08 16:29:22','2022-08-08 16:29:22'),(47,'Bucharest (UK: /ˌbuːkəˈrɛst/ BOO-kə-REST, US: /ˈbuːkərɛst/ -⁠rest; Romanian: București [bukuˈreʃtʲ] (listen)) is the capital and largest city of Romania','Bucharest','https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg/268px-Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg','2022-09-11 00:00:00','2022-09-17 00:00:00',560,2,'2022-08-08 16:29:59','2022-08-08 16:29:59'),(48,'Jerusalem (/dʒəˈruːsələm/; Hebrew: יְרוּשָׁלַיִם Yerushaláyim; Arabic: القُدس al-Quds)[10][11][12][note 2] is a city in Western Asia. Situated on a plateau in the Judaean Mountains between the Mediterranean and the Dead Se','Jerusalem','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Mamila.JPG/61px-Mamila.JPG','2022-09-07 00:00:00','2022-09-10 00:00:00',400,4,'2022-08-08 16:40:54','2022-08-08 16:40:54');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
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
