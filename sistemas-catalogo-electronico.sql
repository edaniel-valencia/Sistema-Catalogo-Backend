-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: loginangular
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `Bid` int NOT NULL AUTO_INCREMENT,
  `Bimage` varchar(255) DEFAULT NULL,
  `Bdescription` varchar(255) NOT NULL,
  `Bstatus` int NOT NULL,
  `Bcreated` datetime NOT NULL,
  `Bupdated` datetime NOT NULL,
  `Bdeleted` datetime NOT NULL,
  PRIMARY KEY (`Bid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'Image-1726458426957.png','Asus VivoBook',1,'2024-09-16 03:12:25','2024-09-16 03:12:25','2024-09-16 03:12:25'),(2,'Image-1726458758317.png','Belleza y Costemitcos',1,'2024-09-16 03:12:41','2024-09-16 03:12:41','2024-09-16 03:12:41'),(3,'Image-1726458449049.png','Smartphone',1,'2024-09-16 03:13:17','2024-09-16 03:13:17','2024-09-16 03:13:17'),(5,'Image-1726458514618.png','Promo Today',1,'2024-09-16 03:48:34','2024-09-16 03:48:34','2024-09-16 03:48:34'),(6,'Image-1726459962993.png','Mundo Mascota',1,'2024-09-16 04:12:42','2024-09-16 04:12:42','2024-09-16 04:12:42');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `Cid` int NOT NULL AUTO_INCREMENT,
  `Cname` varchar(255) NOT NULL,
  `Cdescription` varchar(255) NOT NULL,
  `Cimage` varchar(255) DEFAULT NULL,
  `Cstatus` int NOT NULL,
  `Ccreated` datetime NOT NULL,
  `Cupdated` datetime NOT NULL,
  `Cdeleted` datetime NOT NULL,
  PRIMARY KEY (`Cid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Electrónica','Dispositivos electrónicos y gadgets','Image-1726380459087.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(2,'Hogar y Cocina','Artículos para el hogar y utensilios de cocina','Image-1726375838299.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(3,'Ropa y Accesorios','Prendas de vestir y accesorios de moda','Image-1726375847976.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(4,'Deportes y Aire Libre','Equipos deportivos y artículos para actividades al aire libre','Image-1726380277589.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(5,'Juguetes y Juegos','Juguetes para niños y juegos de mesa','Image-1726376039582.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(6,'Belleza y Cuidado Personal','Productos de belleza y cuidado personal','Image-1726376056314.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(7,'Automotriz','Accesorios y repuestos para vehículos','Image-1726376062359.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(8,'Libros y Papelería','Libros, cuadernos y artículos de papelería','Image-1726376071400.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(9,'Mascotas','Productos y accesorios para mascotas','Image-1726376077158.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(10,'Electrodomésticos','Aparatos eléctricos para el hogar','1008286.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13'),(27,'54435ccc','345435cc','Image-1726429619929.png',1,'2024-09-15 19:46:59','2024-09-15 19:46:59','2024-09-15 19:46:59');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `Cid` int NOT NULL AUTO_INCREMENT,
  `Cname` varchar(255) NOT NULL,
  `Clastname` varchar(255) NOT NULL,
  `Cemail` varchar(255) NOT NULL,
  `Cpassword` varchar(255) NOT NULL,
  `Ccredential` varchar(255) NOT NULL,
  `RoleId` int NOT NULL,
  `Cimagen` varchar(255) DEFAULT NULL,
  `Cstatus` int NOT NULL,
  `Ccreated` datetime NOT NULL,
  `Cupdated` datetime NOT NULL,
  `Cdeleted` datetime NOT NULL,
  PRIMARY KEY (`Cid`),
  UNIQUE KEY `Cemail` (`Cemail`),
  UNIQUE KEY `Cpassword` (`Cpassword`),
  UNIQUE KEY `Ccredential` (`Ccredential`),
  KEY `RoleId` (`RoleId`),
  CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`Rid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Pid` int NOT NULL AUTO_INCREMENT,
  `Pname` varchar(255) NOT NULL,
  `Pdescription` varchar(255) NOT NULL,
  `Pprice` decimal(10,2) NOT NULL,
  `CategoryId` int NOT NULL,
  `Pimage` varchar(255) NOT NULL,
  `Pstatus` int NOT NULL,
  `Pcreated` datetime NOT NULL,
  `Pupdated` datetime NOT NULL,
  `Pdeleted` datetime NOT NULL,
  `productscol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Pid`),
  KEY `CategoryId` (`CategoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`Cid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Smartphone X','Smartphone de última generación',699.99,1,'Image-1726445256237.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(2,'Laptop Pro','Laptop potente para profesionales',1299.99,1,'Image-1726445624435.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(3,'Tablet 10','Tablet con pantalla de 10 pulgadas',399.99,1,'Image-1726445636383.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(4,'Smartwatch S','Reloj inteligente con múltiples funciones',199.99,1,'Image-1726445645079.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(5,'Auriculares Bluetooth','Auriculares inalámbricos',149.99,1,'Image-1726445651019.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(6,'Cámara 4K','Cámara con resolución 4K',499.99,1,'Image-1726445656087.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(7,'Teclado Mecánico','Teclado mecánico retroiluminado',89.99,1,'Image-1726445663171.png',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(8,'Ratón Gaming','Ratón para juegos con alta precisión',69.99,1,'Image-1726445685060.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(9,'Altavoces Bluetooth','Altavoces inalámbricos de alta calidad',129.99,1,'Image-1726445691493.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(10,'Power Bank','Batería externa para cargar dispositivos',39.99,1,'Image-1726445697109.jpeg',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(11,'Olla a Presión','Olla a presión de acero inoxidable',89.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(12,'Batidora','Batidora de mano con múltiples velocidades',59.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(13,'Tostadora','Tostadora de pan con capacidad para 4 rebanadas',49.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(14,'Cafetera','Cafetera automática para preparar café',99.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(15,'Plancha','Plancha de vapor con suela antiadherente',79.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(16,'Horno Microondas','Microondas con 1000W de potencia',119.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(17,'Freidora','Freidora de aire para cocinar sin aceite',149.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(18,'Cucharas Medidoras','Set de cucharas medidoras de acero inoxidable',14.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(19,'Juego de Sartenes','Juego de sartenes antiadherentes',89.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(20,'Escurridor de Platos','Escurridor de platos de acero inoxidable',24.99,2,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(21,'Camisa Casual','Camisa de algodón para uso diario',29.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(22,'Jeans Ajustados','Jeans ajustados de mezclilla',49.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(23,'Chaqueta de Cuero','Chaqueta de cuero genuino',199.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(24,'Zapatillas Deportivas','Zapatillas para correr',89.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(25,'Bufanda de Lana','Bufanda de lana de alta calidad',39.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(26,'Sombrero de Pana','Sombrero de pana para el invierno',29.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(27,'Reloj de Pulsera','Reloj elegante para hombre',79.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(28,'Bolso de Mano','Bolso de mano de cuero',89.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(29,'Guantes de Cuero','Guantes de cuero para el frío',34.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(30,'Cinturón de Piel','Cinturón de piel genuina',24.99,3,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(31,'Raqueta de Tenis','Raqueta profesional de tenis',149.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(32,'Pelota de Fútbol','Pelota de fútbol tamaño oficial',29.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(33,'Tienda de Camping','Tienda de camping para 4 personas',199.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(34,'Bicicleta de Montaña','Bicicleta para senderismo',499.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(35,'Cuerda de Saltar','Cuerda de saltar ajustable',14.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(36,'Escalera de Mano','Escalera de mano para exteriores',89.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(37,'Chaqueta Impermeable','Chaqueta resistente al agua',119.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(38,'Botellas de Agua','Botellas de agua reutilizables',19.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(39,'Mochila de Senderismo','Mochila con capacidad para 40 litros',89.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(40,'Kit de Pesca','Kit completo para pesca',149.99,4,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(41,'Peluche de Osito','Peluche suave para niños',24.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(42,'Juego de Construcción','Juego de bloques de construcción',59.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(43,'Rompecabezas 500 Piezas','Rompecabezas con 500 piezas',19.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(44,'Triciclo para Niños','Triciclo seguro para niños pequeños',89.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(45,'Muñeca Bebé','Muñeca con accesorios para bebé',39.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(46,'Juego de Mesa','Juego de mesa clásico',29.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(47,'Coche de Juguete','Coche de juguete a control remoto',49.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(48,'Pelotas de Plástico','Pelotas de plástico para juegos',14.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(49,'Kit de Pintura','Kit completo para pintar',24.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(50,'Cubo de Rubik','Cubo de Rubik para resolver',9.99,5,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(51,'Crema Hidratante','Crema para hidratar la piel',19.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(52,'Shampoo Anticaspa','Shampoo para tratar la caspa',14.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(53,'Perfume Floral','Perfume con fragancia floral',59.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(54,'Maquillaje en Polvo','Polvo compacto para maquillaje',29.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(55,'Cepillo de Cabello','Cepillo para el cabello con cerdas suaves',9.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(56,'Gel Antibacterial','Gel para desinfectar manos',6.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(57,'Mascarilla Facial','Mascarilla para el cuidado de la piel',12.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(58,'Espejo de Maquillaje','Espejo con luz LED',24.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(59,'Desodorante','Desodorante en aerosol',8.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(60,'Crema Antiarrugas','Crema para reducir arrugas',34.99,6,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(61,'Aceite de Motor','Aceite para motor de automóvil',29.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(62,'Frenos de Disco','Juego de frenos de disco para vehículos',119.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(63,'Lámparas de Faros','Lámparas de repuesto para faros',19.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(64,'Batería de Auto','Batería para automóvil',149.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(65,'Cubre Asientos','Cubre asientos de tela',39.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(66,'Líquido de Frenos','Líquido para sistema de frenos',14.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(67,'Mantenimiento de Filtros','Filtros de aire y aceite para mantenimiento',24.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(68,'Kit de Herramientas','Kit completo de herramientas para autos',99.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(69,'Espejos Laterales','Espejos laterales para vehículos',39.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(70,'Soporte para Teléfono','Soporte para teléfono móvil en el auto',12.99,7,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(71,'Cuaderno A4','Cuaderno de hojas rayadas tamaño A4',9.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(72,'Bolígrafo de Gel','Bolígrafo con tinta de gel',2.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(73,'Agenda 2024','Agenda anual para el año 2024',15.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(74,'Libro de Cocina','Libro con recetas de cocina',24.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(75,'Cuaderno de Dibujo','Cuaderno para dibujo y bocetos',12.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(76,'Resaltadores','Set de resaltadores de colores',8.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(77,'Lápices de Colores','Lápices de colores para arte',10.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(78,'Libreta de Notas','Libreta con hojas en blanco',7.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(79,'Tinta para Impresora','Tinta para impresoras de inyección',29.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(80,'Marcadores Permanentes','Marcadores para escribir en superficies duras',5.99,8,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(81,'Comida para Perros','Comida seca para perros',49.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(82,'Arena para Gatos','Arena para caja de gatos',19.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(83,'Juguete para Perro','Juguete resistente para perros',14.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(84,'Cama para Gato','Cama suave y cómoda para gatos',39.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(85,'Correa para Perro','Correa ajustable para perros',12.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(86,'Collar para Gato','Collar ajustable para gatos',7.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(87,'Rascador para Gato','Rascador para gatos con base de sisal',29.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(88,'Bowl para Mascotas','Bowl de acero inoxidable para comida y agua',8.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(89,'Juguete para Pájaros','Juguete interactivo para pájaros',11.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(90,'Transportadora para Mascotas','Transportadora para viajes con mascotas',49.99,9,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(91,'Lavadora','Lavadora automática de carga frontal',499.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(92,'Secadora','Secadora de ropa con capacidad de 7 kg',399.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(93,'Refrigerador','Refrigerador de dos puertas con congelador',799.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(94,'Aspiradora','Aspiradora de alta potencia con filtro HEPA',149.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(95,'Horno Eléctrico','Horno eléctrico con función de convección',229.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(96,'Licuadora','Licuadora con varias velocidades y funciones',89.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(97,'Plancha de Vapor','Plancha con función de vapor y ajuste de temperatura',49.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(98,'Extractor de Jugo','Extractor de jugo para frutas y verduras',119.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(99,'Cafetera de Cápsulas','Cafetera para cápsulas con espumador',89.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL),(100,'Microondas','Microondas con función de grill',99.99,10,'',1,'2024-08-05 02:56:13','2024-08-05 02:56:13','2024-08-05 02:56:13',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `Rid` int NOT NULL AUTO_INCREMENT,
  `Rname` varchar(255) NOT NULL,
  `Rstatus` int NOT NULL,
  `Rcreated` datetime NOT NULL,
  `Rupdated` datetime NOT NULL,
  `Rdeleted` datetime NOT NULL,
  PRIMARY KEY (`Rid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Cajero',1,'2024-09-02 03:19:43','2024-09-02 03:19:43','2024-09-02 03:19:43'),(2,'Bodeguero',1,'2024-09-02 03:22:13','2024-09-02 03:22:13','2024-09-02 03:22:13'),(3,'Supervisor',1,'2024-09-02 03:23:35','2024-09-02 03:23:35','2024-09-02 03:23:35'),(4,'Administrador',1,'2024-09-02 03:27:35','2024-09-02 03:27:35','2024-09-02 03:27:35'),(5,'Propietario',1,'2024-09-02 03:27:59','2024-09-02 03:27:59','2024-09-02 03:27:59'),(6,'TSoftEc',1,'2024-09-02 03:28:17','2024-09-02 03:28:17','2024-09-02 03:28:17');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Uid` int NOT NULL AUTO_INCREMENT,
  `Uname` varchar(255) NOT NULL,
  `Ulastname` varchar(255) NOT NULL,
  `Uemail` varchar(255) NOT NULL,
  `Upassword` varchar(255) NOT NULL,
  `Ucredential` varchar(255) NOT NULL,
  `RoleId` int NOT NULL,
  `Uimagen` varchar(255) DEFAULT NULL,
  `Ustatus` int NOT NULL,
  `Ucreated` datetime NOT NULL,
  `Uupdated` datetime NOT NULL,
  `Udeleted` datetime NOT NULL,
  PRIMARY KEY (`Uid`),
  UNIQUE KEY `Uemail` (`Uemail`),
  UNIQUE KEY `Upassword` (`Upassword`),
  UNIQUE KEY `Ucredential` (`Ucredential`),
  KEY `RoleId` (`RoleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`Rid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Edaniel','Valencia Martinez','admin@admin.com','$2b$10$Nqwe23tjWB0PP.qbC0DvMu.WinUKcOKV9wKuxaljd7fBaMyYALH.a','0504053216',1,NULL,1,'2024-09-06 06:10:08','2024-09-06 06:10:08','2024-09-06 06:10:08');
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

-- Dump completed on 2024-09-15 23:45:02
