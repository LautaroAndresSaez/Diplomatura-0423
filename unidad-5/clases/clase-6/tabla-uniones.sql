
DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `producto` varchar(50) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=501 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,291,'Producto1',4,79.55),(2,29,'Producto2',9,30.25),(3,415,'Producto3',3,72.14),(4,441,'Producto4',3,54.05),(5,498,'Producto5',4,76.74),(6,394,'Producto6',7,79.38),(7,39,'Producto7',1,78.91),(8,467,'Producto8',3,69.64),(9,293,'Producto9',9,40.50),(10,266,'Producto10',5,60.11),(11,345,'Producto11',7,14.92),(12,408,'Producto12',7,70.47),(13,317,'Producto13',1,34.88),(14,298,'Producto14',10,87.70),(15,294,'Producto15',4,74.40),(16,410,'Producto16',9,84.08),(17,314,'Producto17',7,17.34),(18,18,'Producto18',7,17.02),(19,443,'Producto19',10,93.41),(20,458,'Producto20',8,13.65),(21,177,'Producto21',4,70.19),(22,228,'Producto22',2,46.44),(23,413,'Producto23',8,20.37),(24,405,'Producto24',5,75.98),(25,243,'Producto25',2,28.56),(26,492,'Producto26',1,33.62),(27,256,'Producto27',6,18.25),(28,143,'Producto28',9,51.91),(29,487,'Producto29',4,60.39),(30,54,'Producto30',8,29.63),(31,156,'Producto31',7,39.82),(32,497,'Producto32',8,85.94),(33,498,'Producto33',4,99.63),(34,397,'Producto34',10,50.46),(35,297,'Producto35',5,46.83),(36,497,'Producto36',6,84.21),(37,258,'Producto37',1,71.96),(38,219,'Producto38',1,83.06),(39,34,'Producto39',9,2.01),(40,284,'Producto40',8,18.00),(41,286,'Producto41',4,85.49),(42,168,'Producto42',2,53.43),(43,175,'Producto43',2,65.74),(44,433,'Producto44',4,16.63),(45,388,'Producto45',4,55.80),(46,330,'Producto46',7,14.68),(47,430,'Producto47',9,68.08),(48,426,'Producto48',3,50.26),(49,441,'Producto49',9,82.47),(50,223,'Producto50',8,40.35),(51,388,'Producto51',7,1.07),(52,26,'Producto52',3,96.17),(53,70,'Producto53',9,64.44),(54,393,'Producto54',10,58.59),(55,484,'Producto55',1,47.29),(56,71,'Producto56',3,1.26),(57,101,'Producto57',10,23.84),(58,144,'Producto58',8,72.83),(59,245,'Producto59',3,83.05),(60,188,'Producto60',4,77.59),(61,371,'Producto61',4,65.21),(62,69,'Producto62',8,21.58),(63,453,'Producto63',9,65.40),(64,326,'Producto64',3,49.56),(65,306,'Producto65',6,98.75),(66,124,'Producto66',3,61.78),(67,137,'Producto67',6,75.87),(68,123,'Producto68',10,1.39),(69,110,'Producto69',1,62.59),(70,480,'Producto70',10,69.68),(71,371,'Producto71',7,84.79),(72,199,'Producto72',5,1.99),(73,387,'Producto73',9,69.44),(74,33,'Producto74',3,1.23),(75,169,'Producto75',7,23.63),(76,117,'Producto76',5,57.15),(77,248,'Producto77',8,33.95),(78,201,'Producto78',10,72.59),(79,337,'Producto79',2,90.31),(80,482,'Producto80',2,65.25),(81,469,'Producto81',8,81.80),(82,457,'Producto82',2,82.51),(83,394,'Producto83',5,91.72),(84,111,'Producto84',4,9.65),(85,214,'Producto85',9,95.30),(86,113,'Producto86',3,63.82),(87,203,'Producto87',2,32.42),(88,150,'Producto88',6,70.21),(89,477,'Producto89',7,41.42),(90,55,'Producto90',4,18.03),(91,499,'Producto91',5,24.41),(92,440,'Producto92',7,65.98),(93,162,'Producto93',7,19.17),(94,32,'Producto94',8,52.26),(95,193,'Producto95',4,63.58),(96,52,'Producto96',7,75.02),(97,457,'Producto97',4,84.70),(98,142,'Producto98',9,50.83),(99,464,'Producto99',2,79.12),(100,306,'Producto100',7,57.23),(101,410,'Producto101',4,41.79),(102,483,'Producto102',6,97.96),(103,86,'Producto103',10,8.36),(104,330,'Producto104',1,24.16),(105,39,'Producto105',7,7.39),(106,193,'Producto106',8,38.35),(107,397,'Producto107',9,68.98),(108,4,'Producto108',10,82.74),(109,114,'Producto109',7,56.57),(110,441,'Producto110',8,91.70),(111,224,'Producto111',5,8.50),(112,485,'Producto112',6,4.51),(113,228,'Producto113',2,31.32),(114,81,'Producto114',9,83.57),(115,295,'Producto115',5,40.35),(116,359,'Producto116',4,71.69),(117,233,'Producto117',2,45.79),(118,390,'Producto118',6,27.77),(119,410,'Producto119',3,85.44),(120,243,'Producto120',9,85.56),(121,346,'Producto121',9,38.05),(122,115,'Producto122',1,33.99),(123,342,'Producto123',4,92.13),(124,213,'Producto124',4,52.50),(125,273,'Producto125',2,12.59),(126,87,'Producto126',5,89.62),(127,17,'Producto127',5,29.66),(128,23,'Producto128',4,53.21),(129,331,'Producto129',8,55.58),(130,329,'Producto130',7,10.06),(131,331,'Producto131',1,4.26),(132,99,'Producto132',9,69.00),(133,441,'Producto133',4,4.95),(134,116,'Producto134',1,33.27),(135,325,'Producto135',3,28.17),(136,336,'Producto136',6,55.56),(137,118,'Producto137',6,83.98),(138,337,'Producto138',9,18.64),(139,206,'Producto139',5,23.86),(140,356,'Producto140',9,5.17),(141,375,'Producto141',6,69.52),(142,356,'Producto142',5,22.05),(143,345,'Producto143',8,87.08),(144,495,'Producto144',4,70.67),(145,265,'Producto145',6,2.29),(146,275,'Producto146',7,74.92),(147,354,'Producto147',3,31.61),(148,360,'Producto148',7,5.76),(149,181,'Producto149',7,7.41),(150,239,'Producto150',2,36.92),(151,184,'Producto151',8,53.65),(152,250,'Producto152',9,95.01),(153,41,'Producto153',6,52.33),(154,479,'Producto154',3,21.27),(155,207,'Producto155',5,88.91),(156,85,'Producto156',2,38.47),(157,195,'Producto157',8,77.33),(158,252,'Producto158',2,47.85),(159,400,'Producto159',6,40.34),(160,169,'Producto160',5,35.27),(161,174,'Producto161',7,32.39),(162,302,'Producto162',1,38.98),(163,416,'Producto163',10,44.23),(164,125,'Producto164',10,85.97),(165,267,'Producto165',1,83.44),(166,456,'Producto166',1,54.09),(167,270,'Producto167',1,74.18),(168,248,'Producto168',3,74.18),(169,488,'Producto169',7,31.52),(170,317,'Producto170',3,18.59),(171,140,'Producto171',9,35.97),(172,140,'Producto172',4,75.51),(173,410,'Producto173',9,70.07),(174,4,'Producto174',10,66.36),(175,253,'Producto175',6,17.27),(176,125,'Producto176',8,89.46),(177,144,'Producto177',8,90.30),(178,128,'Producto178',6,8.37),(179,354,'Producto179',3,31.44),(180,355,'Producto180',7,89.65),(181,334,'Producto181',7,22.72),(182,100,'Producto182',4,96.85),(183,452,'Producto183',7,34.44),(184,445,'Producto184',5,40.12),(185,383,'Producto185',7,79.72),(186,67,'Producto186',3,94.62),(187,463,'Producto187',8,16.79),(188,237,'Producto188',9,88.34),(189,419,'Producto189',6,14.12),(190,59,'Producto190',2,44.05),(191,365,'Producto191',4,42.69),(192,84,'Producto192',6,26.23),(193,328,'Producto193',5,45.72),(194,418,'Producto194',8,49.61),(195,41,'Producto195',10,33.89),(196,473,'Producto196',8,71.88),(197,231,'Producto197',2,35.05),(198,157,'Producto198',6,63.31),(199,311,'Producto199',3,18.53),(200,148,'Producto200',10,73.14),(201,443,'Producto201',3,50.52),(202,415,'Producto202',7,66.62),(203,220,'Producto203',2,66.00),(204,358,'Producto204',6,80.87),(205,137,'Producto205',10,87.49),(206,280,'Producto206',2,15.97),(207,149,'Producto207',1,15.21),(208,367,'Producto208',3,85.92),(209,330,'Producto209',8,62.58),(210,483,'Producto210',10,86.41),(211,232,'Producto211',8,23.09),(212,492,'Producto212',3,14.57),(213,37,'Producto213',10,42.18),(214,163,'Producto214',4,81.19),(215,495,'Producto215',6,56.05),(216,144,'Producto216',8,92.14),(217,169,'Producto217',10,57.41),(218,61,'Producto218',9,4.86),(219,299,'Producto219',9,39.03),(220,222,'Producto220',1,91.24),(221,208,'Producto221',4,45.13),(222,120,'Producto222',9,46.77),(223,415,'Producto223',8,23.18),(224,464,'Producto224',10,91.62),(225,382,'Producto225',1,3.88),(226,499,'Producto226',9,36.36),(227,103,'Producto227',10,3.81),(228,201,'Producto228',9,23.57),(229,259,'Producto229',9,82.59),(230,253,'Producto230',1,71.08),(231,210,'Producto231',10,56.71),(232,471,'Producto232',10,17.45),(233,438,'Producto233',9,64.79),(234,338,'Producto234',5,12.09),(235,159,'Producto235',3,18.18),(236,114,'Producto236',6,27.98),(237,311,'Producto237',3,47.29),(238,282,'Producto238',4,27.61),(239,102,'Producto239',2,31.71),(240,16,'Producto240',3,91.40),(241,484,'Producto241',1,55.90),(242,260,'Producto242',10,4.12),(243,224,'Producto243',2,20.28),(244,345,'Producto244',9,11.16),(245,26,'Producto245',10,44.88),(246,242,'Producto246',1,89.57),(247,136,'Producto247',7,53.64),(248,336,'Producto248',8,73.05),(249,203,'Producto249',9,95.90),(250,146,'Producto250',6,99.80),(251,135,'Producto251',4,94.30),(252,333,'Producto252',5,49.53),(253,491,'Producto253',5,16.54),(254,281,'Producto254',4,85.68),(255,181,'Producto255',3,8.02),(256,352,'Producto256',3,28.14),(257,286,'Producto257',1,34.35),(258,342,'Producto258',4,88.47),(259,132,'Producto259',7,49.97),(260,264,'Producto260',2,9.27),(261,30,'Producto261',1,92.17),(262,275,'Producto262',10,23.44),(263,123,'Producto263',6,86.30),(264,379,'Producto264',2,70.91),(265,479,'Producto265',7,42.79),(266,80,'Producto266',6,8.67),(267,448,'Producto267',3,38.21),(268,136,'Producto268',3,22.80),(269,258,'Producto269',9,92.63),(270,474,'Producto270',10,94.79),(271,433,'Producto271',5,81.81),(272,322,'Producto272',8,85.95),(273,13,'Producto273',6,66.75),(274,346,'Producto274',5,19.74),(275,312,'Producto275',6,76.71),(276,127,'Producto276',10,3.95),(277,161,'Producto277',5,45.11),(278,405,'Producto278',7,2.38),(279,25,'Producto279',2,72.03),(280,41,'Producto280',3,97.97),(281,83,'Producto281',9,92.93),(282,497,'Producto282',2,89.47),(283,476,'Producto283',1,48.58),(284,114,'Producto284',7,70.77),(285,253,'Producto285',5,49.63),(286,138,'Producto286',9,59.53),(287,163,'Producto287',9,22.52),(288,303,'Producto288',4,94.55),(289,336,'Producto289',6,55.91),(290,128,'Producto290',6,20.12),(291,115,'Producto291',6,0.07),(292,197,'Producto292',10,61.98),(293,111,'Producto293',3,56.99),(294,55,'Producto294',9,85.71),(295,388,'Producto295',4,18.09),(296,2,'Producto296',5,33.32),(297,132,'Producto297',4,77.15),(298,462,'Producto298',3,72.31),(299,361,'Producto299',5,1.86),(300,392,'Producto300',9,96.02),(301,108,'Producto301',2,31.32),(302,497,'Producto302',1,13.51),(303,304,'Producto303',7,34.65),(304,416,'Producto304',2,7.21),(305,12,'Producto305',9,41.16),(306,186,'Producto306',7,98.47),(307,33,'Producto307',4,65.83),(308,90,'Producto308',10,8.13),(309,318,'Producto309',10,72.99),(310,436,'Producto310',2,20.03),(311,258,'Producto311',10,31.24),(312,325,'Producto312',4,58.21),(313,498,'Producto313',3,13.67),(314,7,'Producto314',7,22.16),(315,77,'Producto315',1,3.43),(316,439,'Producto316',3,76.41),(317,493,'Producto317',7,19.93),(318,53,'Producto318',10,31.19),(319,393,'Producto319',10,57.24),(320,454,'Producto320',9,37.02),(321,199,'Producto321',9,16.42),(322,105,'Producto322',6,14.18),(323,24,'Producto323',9,90.93),(324,59,'Producto324',9,91.61),(325,11,'Producto325',4,73.93),(326,307,'Producto326',9,40.75),(327,245,'Producto327',3,63.61),(328,260,'Producto328',7,88.58),(329,182,'Producto329',2,68.84),(330,489,'Producto330',9,15.85),(331,170,'Producto331',3,9.22),(332,398,'Producto332',7,10.03),(333,206,'Producto333',8,53.45),(334,207,'Producto334',5,5.24),(335,445,'Producto335',3,75.91),(336,471,'Producto336',5,31.75),(337,152,'Producto337',6,90.53),(338,419,'Producto338',5,85.43),(339,426,'Producto339',7,89.93),(340,213,'Producto340',5,87.60),(341,45,'Producto341',9,79.87),(342,278,'Producto342',4,24.81),(343,46,'Producto343',8,27.96),(344,134,'Producto344',5,67.27),(345,440,'Producto345',4,26.76),(346,97,'Producto346',2,24.45),(347,364,'Producto347',10,33.41),(348,481,'Producto348',9,12.91),(349,120,'Producto349',9,30.64),(350,60,'Producto350',7,2.28),(351,44,'Producto351',4,55.35),(352,341,'Producto352',8,66.09),(353,42,'Producto353',5,93.22),(354,176,'Producto354',10,73.03),(355,392,'Producto355',8,25.35),(356,54,'Producto356',8,56.18),(357,240,'Producto357',8,9.58),(358,181,'Producto358',6,49.51),(359,465,'Producto359',2,2.36),(360,316,'Producto360',1,51.98),(361,177,'Producto361',3,94.94),(362,72,'Producto362',9,91.43),(363,483,'Producto363',1,50.74),(364,149,'Producto364',10,90.97),(365,335,'Producto365',7,7.26),(366,258,'Producto366',4,24.80),(367,82,'Producto367',1,87.68),(368,82,'Producto368',2,44.50),(369,332,'Producto369',10,92.84),(370,346,'Producto370',7,25.89),(371,149,'Producto371',8,64.64),(372,55,'Producto372',7,72.02),(373,386,'Producto373',7,16.59),(374,371,'Producto374',3,82.60),(375,250,'Producto375',1,60.08),(376,473,'Producto376',10,76.23),(377,28,'Producto377',10,75.96),(378,423,'Producto378',10,18.75),(379,53,'Producto379',10,48.89),(380,282,'Producto380',4,5.00),(381,104,'Producto381',9,79.91),(382,172,'Producto382',4,57.62),(383,459,'Producto383',9,52.33),(384,27,'Producto384',7,30.43),(385,223,'Producto385',4,21.70),(386,78,'Producto386',2,14.06),(387,171,'Producto387',3,38.64),(388,44,'Producto388',3,11.74),(389,380,'Producto389',5,95.85),(390,225,'Producto390',4,51.03),(391,219,'Producto391',7,94.67),(392,390,'Producto392',1,95.63),(393,302,'Producto393',2,93.96),(394,124,'Producto394',5,34.67),(395,241,'Producto395',4,36.49),(396,371,'Producto396',7,83.23),(397,164,'Producto397',2,73.09),(398,113,'Producto398',10,0.34),(399,105,'Producto399',1,53.50),(400,290,'Producto400',3,70.66),(401,334,'Producto401',3,8.00),(402,376,'Producto402',6,32.33),(403,36,'Producto403',4,70.10),(404,179,'Producto404',7,35.18),(405,353,'Producto405',5,21.96),(406,350,'Producto406',9,6.63),(407,418,'Producto407',10,37.74),(408,479,'Producto408',7,39.88),(409,16,'Producto409',10,71.42),(410,343,'Producto410',3,36.72),(411,492,'Producto411',9,9.61),(412,28,'Producto412',10,77.24),(413,450,'Producto413',2,19.96),(414,230,'Producto414',7,11.03),(415,230,'Producto415',10,43.81),(416,151,'Producto416',2,7.19),(417,387,'Producto417',7,92.26),(418,335,'Producto418',6,86.35),(419,299,'Producto419',4,17.23),(420,343,'Producto420',10,47.04),(421,319,'Producto421',8,97.56),(422,273,'Producto422',8,34.94),(423,179,'Producto423',8,61.05),(424,422,'Producto424',4,40.69),(425,436,'Producto425',2,6.91),(426,468,'Producto426',5,54.21),(427,151,'Producto427',9,50.26),(428,435,'Producto428',9,57.42),(429,182,'Producto429',1,36.15),(430,270,'Producto430',7,41.64),(431,132,'Producto431',1,55.33),(432,281,'Producto432',2,2.11),(433,343,'Producto433',4,75.27),(434,340,'Producto434',2,64.35),(435,405,'Producto435',2,15.50),(436,213,'Producto436',7,2.55),(437,74,'Producto437',7,85.77),(438,155,'Producto438',10,93.00),(439,369,'Producto439',9,24.25),(440,272,'Producto440',10,29.25),(441,256,'Producto441',7,84.77),(442,106,'Producto442',6,91.98),(443,35,'Producto443',6,69.95),(444,378,'Producto444',7,12.66),(445,299,'Producto445',7,23.74),(446,185,'Producto446',2,57.62),(447,235,'Producto447',7,68.38),(448,282,'Producto448',8,14.60),(449,214,'Producto449',8,21.86),(450,496,'Producto450',4,54.40),(451,405,'Producto451',5,62.10),(452,439,'Producto452',6,98.83),(453,185,'Producto453',9,30.15),(454,431,'Producto454',5,43.85),(455,489,'Producto455',6,93.49),(456,477,'Producto456',10,95.62),(457,446,'Producto457',6,25.27),(458,255,'Producto458',8,40.17),(459,326,'Producto459',1,30.81),(460,192,'Producto460',10,80.28),(461,22,'Producto461',9,90.80),(462,59,'Producto462',9,96.58),(463,119,'Producto463',3,74.73),(464,430,'Producto464',1,70.35),(465,174,'Producto465',7,10.15),(466,311,'Producto466',8,12.28),(467,112,'Producto467',8,8.39),(468,84,'Producto468',6,39.63),(469,123,'Producto469',1,44.25),(470,54,'Producto470',3,69.82),(471,441,'Producto471',4,90.74),(472,304,'Producto472',4,74.12),(473,385,'Producto473',7,79.49),(474,57,'Producto474',2,58.02),(475,175,'Producto475',10,95.47),(476,388,'Producto476',1,71.28),(477,272,'Producto477',6,24.50),(478,251,'Producto478',8,35.73),(479,235,'Producto479',3,96.63),(480,4,'Producto480',2,65.36),(481,432,'Producto481',4,19.89),(482,461,'Producto482',1,26.83),(483,162,'Producto483',9,9.27),(484,13,'Producto484',9,17.56),(485,164,'Producto485',2,54.65),(486,209,'Producto486',5,97.67),(487,274,'Producto487',9,38.04),(488,245,'Producto488',4,5.85),(489,189,'Producto489',8,40.74),(490,458,'Producto490',4,1.00),(491,499,'Producto491',10,80.48),(492,73,'Producto492',4,11.28),(493,318,'Producto493',9,29.46),(494,477,'Producto494',9,52.58),(495,500,'Producto495',5,10.69),(496,136,'Producto496',1,35.22),(497,332,'Producto497',3,28.88),(498,340,'Producto498',6,59.58),(499,201,'Producto499',3,86.90),(500,352,'Producto500',10,42.91);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=501 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Usuario1','Apellido1',31),(2,'Usuario2','Apellido2',75),(3,'Usuario3','Apellido3',39),(4,'Usuario4','Apellido4',51),(5,'Usuario5','Apellido5',61),(6,'Usuario6','Apellido6',71),(7,'Usuario7','Apellido7',11),(8,'Usuario8','Apellido8',3),(9,'Usuario9','Apellido9',62),(10,'Usuario10','Apellido10',61),(11,'Usuario11','Apellido11',40),(12,'Usuario12','Apellido12',16),(13,'Usuario13','Apellido13',42),(14,'Usuario14','Apellido14',4),(15,'Usuario15','Apellido15',55),(16,'Usuario16','Apellido16',23),(17,'Usuario17','Apellido17',30),(18,'Usuario18','Apellido18',3),(19,'Usuario19','Apellido19',6),(20,'Usuario20','Apellido20',23),(21,'Usuario21','Apellido21',14),(22,'Usuario22','Apellido22',2),(23,'Usuario23','Apellido23',50),(24,'Usuario24','Apellido24',3),(25,'Usuario25','Apellido25',24),(26,'Usuario26','Apellido26',35),(27,'Usuario27','Apellido27',22),(28,'Usuario28','Apellido28',5),(29,'Usuario29','Apellido29',39),(30,'Usuario30','Apellido30',20),(31,'Usuario31','Apellido31',63),(32,'Usuario32','Apellido32',15),(33,'Usuario33','Apellido33',46),(34,'Usuario34','Apellido34',27),(35,'Usuario35','Apellido35',79),(36,'Usuario36','Apellido36',73),(37,'Usuario37','Apellido37',48),(38,'Usuario38','Apellido38',21),(39,'Usuario39','Apellido39',43),(40,'Usuario40','Apellido40',73),(41,'Usuario41','Apellido41',78),(42,'Usuario42','Apellido42',9),(43,'Usuario43','Apellido43',53),(44,'Usuario44','Apellido44',78),(45,'Usuario45','Apellido45',70),(46,'Usuario46','Apellido46',35),(47,'Usuario47','Apellido47',49),(48,'Usuario48','Apellido48',60),(49,'Usuario49','Apellido49',73),(50,'Usuario50','Apellido50',23),(51,'Usuario51','Apellido51',60),(52,'Usuario52','Apellido52',71),(53,'Usuario53','Apellido53',15),(54,'Usuario54','Apellido54',22),(55,'Usuario55','Apellido55',68),(56,'Usuario56','Apellido56',33),(57,'Usuario57','Apellido57',40),(58,'Usuario58','Apellido58',22),(59,'Usuario59','Apellido59',71),(60,'Usuario60','Apellido60',50),(61,'Usuario61','Apellido61',36),(62,'Usuario62','Apellido62',30),(63,'Usuario63','Apellido63',43),(64,'Usuario64','Apellido64',45),(65,'Usuario65','Apellido65',18),(66,'Usuario66','Apellido66',34),(67,'Usuario67','Apellido67',36),(68,'Usuario68','Apellido68',79),(69,'Usuario69','Apellido69',49),(70,'Usuario70','Apellido70',6),(71,'Usuario71','Apellido71',44),(72,'Usuario72','Apellido72',42),(73,'Usuario73','Apellido73',0),(74,'Usuario74','Apellido74',34),(75,'Usuario75','Apellido75',11),(76,'Usuario76','Apellido76',34),(77,'Usuario77','Apellido77',55),(78,'Usuario78','Apellido78',17),(79,'Usuario79','Apellido79',78),(80,'Usuario80','Apellido80',22),(81,'Usuario81','Apellido81',36),(82,'Usuario82','Apellido82',36),(83,'Usuario83','Apellido83',70),(84,'Usuario84','Apellido84',2),(85,'Usuario85','Apellido85',39),(86,'Usuario86','Apellido86',32),(87,'Usuario87','Apellido87',45),(88,'Usuario88','Apellido88',47),(89,'Usuario89','Apellido89',22),(90,'Usuario90','Apellido90',47),(91,'Usuario91','Apellido91',13),(92,'Usuario92','Apellido92',2),(93,'Usuario93','Apellido93',51),(94,'Usuario94','Apellido94',10),(95,'Usuario95','Apellido95',59),(96,'Usuario96','Apellido96',25),(97,'Usuario97','Apellido97',26),(98,'Usuario98','Apellido98',58),(99,'Usuario99','Apellido99',52),(100,'Usuario100','Apellido100',5),(101,'Usuario101','Apellido101',32),(102,'Usuario102','Apellido102',63),(103,'Usuario103','Apellido103',59),(104,'Usuario104','Apellido104',28),(105,'Usuario105','Apellido105',43),(106,'Usuario106','Apellido106',50),(107,'Usuario107','Apellido107',41),(108,'Usuario108','Apellido108',55),(109,'Usuario109','Apellido109',73),(110,'Usuario110','Apellido110',42),(111,'Usuario111','Apellido111',72),(112,'Usuario112','Apellido112',74),(113,'Usuario113','Apellido113',73),(114,'Usuario114','Apellido114',64),(115,'Usuario115','Apellido115',23),(116,'Usuario116','Apellido116',2),(117,'Usuario117','Apellido117',21),(118,'Usuario118','Apellido118',19),(119,'Usuario119','Apellido119',33),(120,'Usuario120','Apellido120',31),(121,'Usuario121','Apellido121',54),(122,'Usuario122','Apellido122',18),(123,'Usuario123','Apellido123',9),(124,'Usuario124','Apellido124',72),(125,'Usuario125','Apellido125',11),(126,'Usuario126','Apellido126',2),(127,'Usuario127','Apellido127',56),(128,'Usuario128','Apellido128',33),(129,'Usuario129','Apellido129',0),(130,'Usuario130','Apellido130',61),(131,'Usuario131','Apellido131',64),(132,'Usuario132','Apellido132',60),(133,'Usuario133','Apellido133',29),(134,'Usuario134','Apellido134',44),(135,'Usuario135','Apellido135',54),(136,'Usuario136','Apellido136',58),(137,'Usuario137','Apellido137',48),(138,'Usuario138','Apellido138',65),(139,'Usuario139','Apellido139',23),(140,'Usuario140','Apellido140',1),(141,'Usuario141','Apellido141',15),(142,'Usuario142','Apellido142',73),(143,'Usuario143','Apellido143',79),(144,'Usuario144','Apellido144',17),(145,'Usuario145','Apellido145',11),(146,'Usuario146','Apellido146',2),(147,'Usuario147','Apellido147',60),(148,'Usuario148','Apellido148',53),(149,'Usuario149','Apellido149',8),(150,'Usuario150','Apellido150',38),(151,'Usuario151','Apellido151',9),(152,'Usuario152','Apellido152',11),(153,'Usuario153','Apellido153',26),(154,'Usuario154','Apellido154',20),(155,'Usuario155','Apellido155',21),(156,'Usuario156','Apellido156',46),(157,'Usuario157','Apellido157',8),(158,'Usuario158','Apellido158',62),(159,'Usuario159','Apellido159',47),(160,'Usuario160','Apellido160',50),(161,'Usuario161','Apellido161',30),(162,'Usuario162','Apellido162',79),(163,'Usuario163','Apellido163',67),(164,'Usuario164','Apellido164',19),(165,'Usuario165','Apellido165',55),(166,'Usuario166','Apellido166',56),(167,'Usuario167','Apellido167',34),(168,'Usuario168','Apellido168',6),(169,'Usuario169','Apellido169',9),(170,'Usuario170','Apellido170',26),(171,'Usuario171','Apellido171',23),(172,'Usuario172','Apellido172',39),(173,'Usuario173','Apellido173',45),(174,'Usuario174','Apellido174',30),(175,'Usuario175','Apellido175',15),(176,'Usuario176','Apellido176',66),(177,'Usuario177','Apellido177',47),(178,'Usuario178','Apellido178',37),(179,'Usuario179','Apellido179',43),(180,'Usuario180','Apellido180',24),(181,'Usuario181','Apellido181',73),(182,'Usuario182','Apellido182',52),(183,'Usuario183','Apellido183',41),(184,'Usuario184','Apellido184',52),(185,'Usuario185','Apellido185',55),(186,'Usuario186','Apellido186',42),(187,'Usuario187','Apellido187',43),(188,'Usuario188','Apellido188',10),(189,'Usuario189','Apellido189',2),(190,'Usuario190','Apellido190',61),(191,'Usuario191','Apellido191',57),(192,'Usuario192','Apellido192',24),(193,'Usuario193','Apellido193',31),(194,'Usuario194','Apellido194',4),(195,'Usuario195','Apellido195',5),(196,'Usuario196','Apellido196',16),(197,'Usuario197','Apellido197',65),(198,'Usuario198','Apellido198',38),(199,'Usuario199','Apellido199',73),(200,'Usuario200','Apellido200',14),(201,'Usuario201','Apellido201',11),(202,'Usuario202','Apellido202',14),(203,'Usuario203','Apellido203',39),(204,'Usuario204','Apellido204',73),(205,'Usuario205','Apellido205',6),(206,'Usuario206','Apellido206',54),(207,'Usuario207','Apellido207',12),(208,'Usuario208','Apellido208',57),(209,'Usuario209','Apellido209',9),(210,'Usuario210','Apellido210',35),(211,'Usuario211','Apellido211',71),(212,'Usuario212','Apellido212',8),(213,'Usuario213','Apellido213',66),(214,'Usuario214','Apellido214',69),(215,'Usuario215','Apellido215',65),(216,'Usuario216','Apellido216',40),(217,'Usuario217','Apellido217',3),(218,'Usuario218','Apellido218',59),(219,'Usuario219','Apellido219',46),(220,'Usuario220','Apellido220',53),(221,'Usuario221','Apellido221',46),(222,'Usuario222','Apellido222',73),(223,'Usuario223','Apellido223',66),(224,'Usuario224','Apellido224',34),(225,'Usuario225','Apellido225',50),(226,'Usuario226','Apellido226',68),(227,'Usuario227','Apellido227',32),(228,'Usuario228','Apellido228',36),(229,'Usuario229','Apellido229',3),(230,'Usuario230','Apellido230',70),(231,'Usuario231','Apellido231',19),(232,'Usuario232','Apellido232',47),(233,'Usuario233','Apellido233',20),(234,'Usuario234','Apellido234',37),(235,'Usuario235','Apellido235',45),(236,'Usuario236','Apellido236',35),(237,'Usuario237','Apellido237',42),(238,'Usuario238','Apellido238',26),(239,'Usuario239','Apellido239',3),(240,'Usuario240','Apellido240',18),(241,'Usuario241','Apellido241',1),(242,'Usuario242','Apellido242',34),(243,'Usuario243','Apellido243',4),(244,'Usuario244','Apellido244',79),(245,'Usuario245','Apellido245',66),(246,'Usuario246','Apellido246',10),(247,'Usuario247','Apellido247',15),(248,'Usuario248','Apellido248',45),(249,'Usuario249','Apellido249',22),(250,'Usuario250','Apellido250',56),(251,'Usuario251','Apellido251',53),(252,'Usuario252','Apellido252',19),(253,'Usuario253','Apellido253',17),(254,'Usuario254','Apellido254',29),(255,'Usuario255','Apellido255',12),(256,'Usuario256','Apellido256',56),(257,'Usuario257','Apellido257',4),(258,'Usuario258','Apellido258',10),(259,'Usuario259','Apellido259',40),(260,'Usuario260','Apellido260',13),(261,'Usuario261','Apellido261',22),(262,'Usuario262','Apellido262',72),(263,'Usuario263','Apellido263',55),(264,'Usuario264','Apellido264',60),(265,'Usuario265','Apellido265',56),(266,'Usuario266','Apellido266',22),(267,'Usuario267','Apellido267',20),(268,'Usuario268','Apellido268',34),(269,'Usuario269','Apellido269',30),(270,'Usuario270','Apellido270',47),(271,'Usuario271','Apellido271',69),(272,'Usuario272','Apellido272',42),(273,'Usuario273','Apellido273',4),(274,'Usuario274','Apellido274',56),(275,'Usuario275','Apellido275',29),(276,'Usuario276','Apellido276',57),(277,'Usuario277','Apellido277',37),(278,'Usuario278','Apellido278',16),(279,'Usuario279','Apellido279',48),(280,'Usuario280','Apellido280',34),(281,'Usuario281','Apellido281',24),(282,'Usuario282','Apellido282',21),(283,'Usuario283','Apellido283',34),(284,'Usuario284','Apellido284',25),(285,'Usuario285','Apellido285',24),(286,'Usuario286','Apellido286',47),(287,'Usuario287','Apellido287',3),(288,'Usuario288','Apellido288',32),(289,'Usuario289','Apellido289',75),(290,'Usuario290','Apellido290',37),(291,'Usuario291','Apellido291',41),(292,'Usuario292','Apellido292',15),(293,'Usuario293','Apellido293',33),(294,'Usuario294','Apellido294',39),(295,'Usuario295','Apellido295',17),(296,'Usuario296','Apellido296',48),(297,'Usuario297','Apellido297',28),(298,'Usuario298','Apellido298',79),(299,'Usuario299','Apellido299',72),(300,'Usuario300','Apellido300',43),(301,'Usuario301','Apellido301',0),(302,'Usuario302','Apellido302',29),(303,'Usuario303','Apellido303',68),(304,'Usuario304','Apellido304',11),(305,'Usuario305','Apellido305',13),(306,'Usuario306','Apellido306',31),(307,'Usuario307','Apellido307',37),(308,'Usuario308','Apellido308',12),(309,'Usuario309','Apellido309',29),(310,'Usuario310','Apellido310',32),(311,'Usuario311','Apellido311',71),(312,'Usuario312','Apellido312',22),(313,'Usuario313','Apellido313',57),(314,'Usuario314','Apellido314',59),(315,'Usuario315','Apellido315',46),(316,'Usuario316','Apellido316',53),(317,'Usuario317','Apellido317',48),(318,'Usuario318','Apellido318',79),(319,'Usuario319','Apellido319',15),(320,'Usuario320','Apellido320',75),(321,'Usuario321','Apellido321',12),(322,'Usuario322','Apellido322',76),(323,'Usuario323','Apellido323',26),(324,'Usuario324','Apellido324',60),(325,'Usuario325','Apellido325',62),(326,'Usuario326','Apellido326',51),(327,'Usuario327','Apellido327',71),(328,'Usuario328','Apellido328',40),(329,'Usuario329','Apellido329',70),(330,'Usuario330','Apellido330',68),(331,'Usuario331','Apellido331',52),(332,'Usuario332','Apellido332',57),(333,'Usuario333','Apellido333',49),(334,'Usuario334','Apellido334',74),(335,'Usuario335','Apellido335',63),(336,'Usuario336','Apellido336',14),(337,'Usuario337','Apellido337',41),(338,'Usuario338','Apellido338',6),(339,'Usuario339','Apellido339',65),(340,'Usuario340','Apellido340',69),(341,'Usuario341','Apellido341',72),(342,'Usuario342','Apellido342',72),(343,'Usuario343','Apellido343',66),(344,'Usuario344','Apellido344',33),(345,'Usuario345','Apellido345',49),(346,'Usuario346','Apellido346',66),(347,'Usuario347','Apellido347',25),(348,'Usuario348','Apellido348',6),(349,'Usuario349','Apellido349',37),(350,'Usuario350','Apellido350',8),(351,'Usuario351','Apellido351',7),(352,'Usuario352','Apellido352',11),(353,'Usuario353','Apellido353',34),(354,'Usuario354','Apellido354',56),(355,'Usuario355','Apellido355',22),(356,'Usuario356','Apellido356',23),(357,'Usuario357','Apellido357',47),(358,'Usuario358','Apellido358',7),(359,'Usuario359','Apellido359',54),(360,'Usuario360','Apellido360',12),(361,'Usuario361','Apellido361',55),(362,'Usuario362','Apellido362',1),(363,'Usuario363','Apellido363',2),(364,'Usuario364','Apellido364',7),(365,'Usuario365','Apellido365',30),(366,'Usuario366','Apellido366',47),(367,'Usuario367','Apellido367',67),(368,'Usuario368','Apellido368',35),(369,'Usuario369','Apellido369',52),(370,'Usuario370','Apellido370',77),(371,'Usuario371','Apellido371',69),(372,'Usuario372','Apellido372',35),(373,'Usuario373','Apellido373',50),(374,'Usuario374','Apellido374',63),(375,'Usuario375','Apellido375',6),(376,'Usuario376','Apellido376',1),(377,'Usuario377','Apellido377',69),(378,'Usuario378','Apellido378',21),(379,'Usuario379','Apellido379',58),(380,'Usuario380','Apellido380',70),(381,'Usuario381','Apellido381',16),(382,'Usuario382','Apellido382',30),(383,'Usuario383','Apellido383',23),(384,'Usuario384','Apellido384',27),(385,'Usuario385','Apellido385',66),(386,'Usuario386','Apellido386',10),(387,'Usuario387','Apellido387',14),(388,'Usuario388','Apellido388',37),(389,'Usuario389','Apellido389',65),(390,'Usuario390','Apellido390',53),(391,'Usuario391','Apellido391',70),(392,'Usuario392','Apellido392',30),(393,'Usuario393','Apellido393',24),(394,'Usuario394','Apellido394',30),(395,'Usuario395','Apellido395',77),(396,'Usuario396','Apellido396',56),(397,'Usuario397','Apellido397',51),(398,'Usuario398','Apellido398',7),(399,'Usuario399','Apellido399',44),(400,'Usuario400','Apellido400',38),(401,'Usuario401','Apellido401',57),(402,'Usuario402','Apellido402',13),(403,'Usuario403','Apellido403',56),(404,'Usuario404','Apellido404',79),(405,'Usuario405','Apellido405',70),(406,'Usuario406','Apellido406',32),(407,'Usuario407','Apellido407',32),(408,'Usuario408','Apellido408',64),(409,'Usuario409','Apellido409',66),(410,'Usuario410','Apellido410',58),(411,'Usuario411','Apellido411',14),(412,'Usuario412','Apellido412',56),(413,'Usuario413','Apellido413',76),(414,'Usuario414','Apellido414',55),(415,'Usuario415','Apellido415',46),(416,'Usuario416','Apellido416',66),(417,'Usuario417','Apellido417',33),(418,'Usuario418','Apellido418',49),(419,'Usuario419','Apellido419',64),(420,'Usuario420','Apellido420',16),(421,'Usuario421','Apellido421',45),(422,'Usuario422','Apellido422',21),(423,'Usuario423','Apellido423',50),(424,'Usuario424','Apellido424',27),(425,'Usuario425','Apellido425',64),(426,'Usuario426','Apellido426',0),(427,'Usuario427','Apellido427',50),(428,'Usuario428','Apellido428',10),(429,'Usuario429','Apellido429',59),(430,'Usuario430','Apellido430',26),(431,'Usuario431','Apellido431',35),(432,'Usuario432','Apellido432',17),(433,'Usuario433','Apellido433',59),(434,'Usuario434','Apellido434',6),(435,'Usuario435','Apellido435',14),(436,'Usuario436','Apellido436',52),(437,'Usuario437','Apellido437',59),(438,'Usuario438','Apellido438',58),(439,'Usuario439','Apellido439',32),(440,'Usuario440','Apellido440',70),(441,'Usuario441','Apellido441',11),(442,'Usuario442','Apellido442',7),(443,'Usuario443','Apellido443',4),(444,'Usuario444','Apellido444',77),(445,'Usuario445','Apellido445',54),(446,'Usuario446','Apellido446',38),(447,'Usuario447','Apellido447',29),(448,'Usuario448','Apellido448',34),(449,'Usuario449','Apellido449',1),(450,'Usuario450','Apellido450',63),(451,'Usuario451','Apellido451',73),(452,'Usuario452','Apellido452',18),(453,'Usuario453','Apellido453',31),(454,'Usuario454','Apellido454',22),(455,'Usuario455','Apellido455',16),(456,'Usuario456','Apellido456',14),(457,'Usuario457','Apellido457',25),(458,'Usuario458','Apellido458',3),(459,'Usuario459','Apellido459',19),(460,'Usuario460','Apellido460',6),(461,'Usuario461','Apellido461',55),(462,'Usuario462','Apellido462',17),(463,'Usuario463','Apellido463',0),(464,'Usuario464','Apellido464',31),(465,'Usuario465','Apellido465',76),(466,'Usuario466','Apellido466',46),(467,'Usuario467','Apellido467',4),(468,'Usuario468','Apellido468',41),(469,'Usuario469','Apellido469',35),(470,'Usuario470','Apellido470',53),(471,'Usuario471','Apellido471',0),(472,'Usuario472','Apellido472',3),(473,'Usuario473','Apellido473',13),(474,'Usuario474','Apellido474',59),(475,'Usuario475','Apellido475',14),(476,'Usuario476','Apellido476',54),(477,'Usuario477','Apellido477',69),(478,'Usuario478','Apellido478',22),(479,'Usuario479','Apellido479',64),(480,'Usuario480','Apellido480',17),(481,'Usuario481','Apellido481',52),(482,'Usuario482','Apellido482',48),(483,'Usuario483','Apellido483',5),(484,'Usuario484','Apellido484',44),(485,'Usuario485','Apellido485',44),(486,'Usuario486','Apellido486',7),(487,'Usuario487','Apellido487',67),(488,'Usuario488','Apellido488',71),(489,'Usuario489','Apellido489',74),(490,'Usuario490','Apellido490',0),(491,'Usuario491','Apellido491',17),(492,'Usuario492','Apellido492',5),(493,'Usuario493','Apellido493',54),(494,'Usuario494','Apellido494',16),(495,'Usuario495','Apellido495',0),(496,'Usuario496','Apellido496',30),(497,'Usuario497','Apellido497',73),(498,'Usuario498','Apellido498',33),(499,'Usuario499','Apellido499',28),(500,'Usuario500','Apellido500',42);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-07 19:22:14
