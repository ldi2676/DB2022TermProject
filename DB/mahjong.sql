grant all privileges on  *.* to 'root'@'%' identified by 'mysql1234';
delete from mysql.user where host="localhost" and user="root";
flush privileges;
select host,user,plugin,authentication_string from mysql.user;

DROP DATABASE IF EXISTS `mahjongdb` ;

CREATE DATABASE IF NOT EXISTS `mahjongdb` 
  DEFAULT CHARACTER SET utf8 
  DEFAULT COLLATE utf8_general_ci;

USE `mahjongdb` ;

CREATE TABLE `HAN` (
    `id` int NOT NULL AUTO_INCREMENT,
    `yaku_name` VARCHAR(255) NOT NULL,
    `menzen` VARCHAR(255) NOT NULL,
    `call` VARCHAR(255) ,
    PRIMARY KEY (`id`)
) ENGINE = INNODB
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

CREATE TABLE `YAKU_DESC` (
    `id` int NOT NULL AUTO_INCREMENT,
    `yaku_name` VARCHAR(255) NOT NULL,
    `desc` VARCHAR(1000) ,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id`) REFERENCES `HAN` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = INNODB
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

CREATE TABLE `YAKU_IMAGE` (
    `id` int NOT NULL AUTO_INCREMENT,
    `yaku_name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(500),
    `yaku_nick` VARCHAR(255),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id`) REFERENCES `HAN` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = INNODB
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

CREATE TABLE `User_Data` (
    # `id` int NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(500) NOT NULL,
    `pw` VARCHAR(255) NOT NULL,
    `user_nick` VARCHAR(255),
    PRIMARY KEY (`email`)
) ENGINE = INNODB
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

CREATE TABLE `User_Post` (
    `write_id` int NOT NULL AUTO_INCREMENT,
    `write_user` VARCHAR(500) NOT NULL,
    `write_title` VARCHAR(500),
    `write_date` VARCHAR(255),
    `write_content` VARCHAR(1000),
    PRIMARY KEY (`write_id`)
    -- FOREIGN KEY (`write_user`) REFERENCES `User_Data` (`email`)
    -- ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = INNODB
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

-- CREATE TABLE `User_Comment` (
--     `Comment_id` int NOT NULL AUTO_INCREMENT,
--     `Comment_user` VARCHAR(255) NOT NULL,
--     `Comment_write` int,
--     `Comment_date` VARCHAR(255),
--     `Comment_content` VARCHAR(1000),
--     PRIMARY KEY (`Comment_id`),
--     FOREIGN KEY (`Comment_write`) REFERENCES `User_Post` (`write_id`)
--     ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE = INNODB
-- DEFAULT CHARACTER SET utf8
-- DEFAULT COLLATE utf8_general_ci;

INSERT INTO `User_Post` (`write_id`,`write_user`, `write_title`,`write_date`,`write_content`) VALUES
(1,'이동익','제목임','2022-06-20','내용임');

INSERT INTO HAN (id,yaku_name, menzen, `call`) VALUES
(1,'핑후','1판','역없음'),
(2,'탕야오','1판','1판'),
(3,'이페코','1판','0판'),
(4,'리치','1판','역없음'),
(5,'일발','1판','역없음'),
(6,'멘젠쯔모','1판','역없음'),
(7,'삼원패','1판','1판'),
(8,'자풍패','1판','1판'),
(9,'장풍패','1판','1판'),
(10,'해저로월','1판','1판'),
(11,'하저로어','1판','1판'),
(12,'영상개화','1판','1판'),
(13,'창깡','1판','1판'),
(14,'도라','장당 1판','장당 1판'),
(15,'삼색동순','2판','1판'),
(16,'일기통관','2판','1판'),
(17,'치또이츠','2판','역없음'),
(18,'삼색동각','2판','2판'),
(19,'찬타','2판','1판'),
(20,'혼노두','2판','2판'),
(21,'또이또이','2판','2판'),
(22,'삼암각','2판','2판'),
(23,'소삼원','2판','2판'),
(24,'삼공자','2판','2판'),
(25,'더블리치','2판','1판'),
(26,'량페코','3판','0판'),
(27,'준찬타','3판','2판'),
(28,'혼일색','3판','2판'),
(29,'인화','만관','만관'),
(30,'유국만관','만관','0판'),
(31,'청일색','6판','5판'),
(32,'구련보등','역만','역없음'),
(33,'녹일색','역만','역만'),
(34,'사암각','역만','역없음'),
(35,'사공자','역만','역만'),
(36,'청노두','역만','역만'),
(37,'국사무쌍','역만','역없음'),
(38,'대삼원','역만','역만'),
(39,'소사희','역만','역만'),
(40,'대사희','역만','역만'),
(41,'자일색','역만','역만'),
(42,'천화','역만','역없음'),
(43,'지화','역만','역없음'),
(44,'헤아림역만','역만','역만');

INSERT INTO YAKU_IMAGE (id,yaku_name, image, yaku_nick) VALUES
# (1,'핑후','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/main/client/public/yaku/%ED%95%91%ED%9B%84.PNG?token=GHSAT0AAAAAABUZ2YWSOLRVVSDZILQTX5AYYURT5RQ','평화'),
# (2,'탕야오','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/main/client/public/yaku/%ED%83%95%EC%95%BC%EC%98%A4.PNG?token=GHSAT0AAAAAABUZ2YWTOAOZLD4ID23D5MUOYURT56A','단요구'),
# (3,'이페코','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/main/client/public/yaku/%EC%9D%B4%ED%8E%98%EC%BD%94.PNG?token=GHSAT0AAAAAABUZ2YWS7S2AQJPC6NMKXUQWYURT7DQ','일배구'),
# (4,'리치','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EB%A6%AC%EC%B9%98.jpg?raw=true','리치'),
# (5,'일발','https://pbs.twimg.com/media/EkGl77qUcAAzpCi?format=jpg&name=large','잇빠츠'),
# (6,'멘젠쯔모','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%AF%94%EB%AA%A8.PNG?raw=true','문전청자모화'),
# (7,'삼원패','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%82%BC%EC%9B%90%ED%8C%A8.jpg?raw=true','삼원패'),
# (8,'자풍패','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%ED%92%8D%ED%8C%A8.PNG?raw=true','자풍패'),
# (9,'장풍패','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%ED%92%8D%ED%8C%A8.PNG?raw=true','장풍패'),
# (10,'해저모월','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%ED%95%B4%EC%A0%80%EB%AA%A8%EC%9B%94.PNG?raw=true','해저로월'),
# (11,'하저로어','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%ED%95%98%EC%A0%80%EB%A1%9C%EC%96%B4.PNG?raw=true','하저로어'),
# (12,'영상개화','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%98%81%EC%83%81%EA%B0%9C%ED%99%94.jpg?raw=true','영상개화'),
# (13,'창깡','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%B0%BD%EA%B9%A1.PNG?raw=true','창공'),
# (14,'도라','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EB%8F%84%EB%9D%BC.PNG?raw=true','도라'),
# (15,'삼색동순','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%82%BC%EC%83%89%EB%8F%99%EC%88%9C.PNG?raw=true','삼색동순'),
# (16,'일기통관','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%9D%BC%EA%B8%B0%ED%86%B5%EA%B4%80.PNG?raw=true','일기통관'),
# (17,'치또이츠','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%B9%98%EB%98%90%EC%9D%B4%EC%B8%A0.PNG?raw=true','칠대자'),
# (18,'삼색동각','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%82%BC%EC%83%89%EB%8F%99%EA%B0%81.PNG?raw=true','삼색동각'),
# (19,'찬타','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%B0%AC%ED%83%80.PNG?raw=true','혼전대요구'),
# (20,'혼노두','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%ED%98%BC%EB%85%B8%EB%91%90.PNG?raw=true','혼로도'),
# (21,'또이또이','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EB%98%90%EC%9D%B4%EB%98%90%EC%9D%B4.PNG?raw=true','대대화'),
# (22,'삼암각','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%82%BC%EC%95%94%EA%B0%81.PNG?raw=true','산안커'),
# (23,'소삼원','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%86%8C%EC%82%BC%EC%9B%90.PNG?raw=true','쇼산겐'),
# (24,'삼공자','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%82%BC%EA%B3%B5%EC%9E%90.PNG?raw=true','산깡쯔'),
# (25,'더블리치','https://dcimg1.dcinside.com/viewimage.php?id=20bcda27ee&no=24b0d769e1d32ca73deb87fa11d02831de04ca5aee4f7f339edb1c2bd9417828b8474d02f162aeccf8ed6aee13e7063fc95e46cdb09e102534d56be0c455820a15626867d2a88445c2b00112f87a5aebcb6366412db11f4e785e794e59f94aaadcaba82ffb&orgExt','다부리'),
# (26,'량페코','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EB%9F%89%ED%8E%98%EC%BD%94.PNG?raw=true','이배구'),
# (27,'준찬타','https://blog.kakaocdn.net/dn/cFRAF3/btrwTNifvvk/oajIrFjKzOlBVAPlhRFu80/img.png','순전대요구'),
# (28,'혼일색','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%ED%98%BC%EC%9D%BC%EC%83%89.PNG?raw=true','혼일색'),
# (29,'인화','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%9D%B8%ED%99%94.PNG?raw=true','렌호'),
# (30,'유국만관','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%9C%A0%EA%B5%AD%EB%A7%8C%EA%B4%80.PNG?raw=true','나가시만관'),
# (31,'청일색','https://github.com/ldi2676/DB2022TermProject/blob/main/client/public/yaku/%EC%B2%AD%EC%9D%BC%EC%83%89.PNG?raw=true','친이쯔'),
# (32,'구련보등','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EA%B5%AC%EB%A0%A8%EB%B3%B4%EB%93%B1.PNG?token=AIS4QL4DSYMDQQFF6KU7F5LCSGTJA','구련보등'),
# (33,'녹일색','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EB%85%B9%EC%9D%BC%EC%83%89.PNG?token=AIS4QLYT3D3DHLN2YKXCXRTCSGTJA','녹일색'),
# (34,'사암각','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EC%82%AC%EC%95%94%EA%B0%81.PNG?token=AIS4QL5R553BYGCMLJZ53ELCSGTJA','스앙코'),
# (35,'사공자','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EC%82%AC%EA%B3%B5%EC%9E%90.PNG?token=AIS4QL63VKWCLRUKOX5GJDDCSGTJA','스깡쯔'),
# (36,'청노두','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EC%B2%AD%EB%85%B8%EB%91%90.PNG?token=AIS4QL4TXV6AFWSXJ4KDFXTCSGTJA','칭로토'),
# (37,'국사무쌍','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EA%B5%AD%EC%82%AC%EB%AC%B4%EC%8C%8D.PNG?token=AIS4QL5READUJJQ4RUDRYSDCSGTJA','국사무쌍'),
# (38,'대삼원','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EB%8C%80%EC%82%BC%EC%9B%90.PNG?token=AIS4QLYIME22PL3Q2VAH7R3CSGTJA','다이산겐'),
# (39,'소사희','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EC%86%8C%EC%82%AC%ED%9D%AC.PNG?token=AIS4QL4TFAHBGQ2C6QXQUPLCSGTJA','쇼우스시'),
# (40,'대사희','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EB%8C%80%EC%82%AC%ED%9D%AC.PNG?token=AIS4QL4MV2VTLNZUGSIFUN3CSGTJA','다이스시'),
# (41,'자일색','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EC%9E%90%EC%9D%BC%EC%83%89.PNG?token=AIS4QL7XCBT436NIHCAXREDCSGTJA','츠이소우'),
# (42,'천화','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EC%B2%9C%ED%99%94.PNG?token=AIS4QL3W5FMYBOUDEYZPEK3CSGTJA','텐호'),
# (43,'지화','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%EC%A7%80%ED%99%94.PNG?token=AIS4QL7XWVNH6OEDHQDVJKLCSGTJA','치호'),
# (44,'헤아림역만','https://raw.githubusercontent.com/ldi2676/DB2022TermProject/184455394b546da0da4d90192b3b4e0dc3b4ac33/client/public/yaku/%ED%97%A4%EC%95%84%EB%A6%BC%EC%97%AD%EB%A7%8C.PNG?token=AIS4QL5H6VM2NCBLCMDKHGLCSGTJA','카조에역만');
(1,'핑후','pinfu.jpg','평화'),
(2,'탕야오','allSimple.jpg','단요구'),
(3,'이페코','pureDoubleSequence.jpg','일배구'),
(4,'리치','riichi.jpg','리치'),
(5,'일발','ippatsu.jpg','잇빠츠'),
(6,'멘젠쯔모','fullyConcealedHand.jpg','문전청자모화'),
(7,'삼원패','dragon.jpg','삼원패'),
(8,'자풍패','wind.jpg','자풍패'),
(9,'장풍패','wind.jpg','장풍패'),
(10,'해저모월','underTheSea.jpg','해저로월'),
(11,'하저로어','underTheRiver.jpg','하저로어'),
(12,'영상개화','afterAKan.jpg','영상개화'),
(13,'창깡','robbingAKan.jpg','창공'),
(14,'도라','dora.jpg','도라'),
(15,'삼색동순','mixedTripleSequence.jpg','삼색동순'),
(16,'일기통관','pureStraight.jpg','일기통관'),
(17,'치또이츠','sevenPairs.jpg','칠대자'),
(18,'삼색동각','tripleTriplets.jpg','삼색동각'),
(19,'찬타','halfOutsideHand.jpg','혼전대요구'),
(20,'혼노두','allTerminalsAndHonors.jpg','혼로도'),
(21,'또이또이','allTriplets.jpg','대대화'),
(22,'삼암각','threeConcealedTriplets.jpg','산안커'),
(23,'소삼원','littleThreeDragons.jpg','쇼산겐'),
(24,'삼공자','threeQuads.jpg','산깡쯔'),
(25,'더블리치','doubleRiichi.jpg','다부리'),
(26,'량페코','twicePureDoubleSequence.jpg','이배구'),
(27,'준찬타','fullyOutsideHand.jpg','순전대요구'),
(28,'혼일색','halfFlush.jpg','혼일색'),
(29,'인화','blessingOfHuman.jpg','렌호'),
(30,'유국만관','manganAtDraw.jpg','나가시만관'),
(31,'청일색','fullFlush.jpg','친이쯔'),
(32,'구련보등','nineGates.jpg','구련보등'),
(33,'녹일색','allGreen.jpg','녹일색'),
(34,'사암각','fourConcealedTriplets.jpg','스앙코'),
(35,'사공자','fourQuads.jpg','스깡쯔'),
(36,'청노두','allTerminals.jpg','칭로토'),
(37,'국사무쌍','thirteenOrphans.jpg','국사무쌍'),
(38,'대삼원','bigThreeDrangons.jpg','다이산겐'),
(39,'소사희','fourLittlewinds.jpg','쇼우스시'),
(40,'대사희','fourBigWinds.jpg','다이스시'),
(41,'자일색','allHonors.jpg','츠이소우'),
(42,'천화','blessingOfHeaven.jpg','텐호'),
(43,'지화','blessingofEarth.jpg','치호'),
(44,'헤아림역만','counted Yakuman.jpg','카조에역만');




INSERT INTO `YAKU_DESC` (id,yaku_name, `desc`) VALUES
(1,'핑후','멘젠이면서 부수가 없는 형태로 완성'),
(2,'탕야오','중장패(수패 2~8)만으로 완성'),
(3,'이페코','같은 종류 수패로 똑같은 슌쯔 1쌍(ex.만패의경우 123만x2)'),
(4,'리치','멘젠이면서 텐파이가 되었을 때 리치 선언시'),
(5,'일발','리치 선언 후 순정 1순 이내에 론 또는 쯔모화료하는 경우'),
(6,'멘젠쯔모','멘젠 상태로 쯔모화료하는 경우'),
(7,'삼원패','백, 발, 중의 자패 중 하나를 커쯔로 가진 경우'),
(8,'자풍패','자신의 바람에 맞는 풍패를 커쯔로 가진 경우'),
(9,'장풍패','현재 장의 바람에 맞는 풍패를 커쯔로 가진 경우'),
(10,'해저로월','패산의 마지막 패(해저패)를 쯔모했는데 그 패가 자신의 화료패인 경우'),
(11,'하저로어','마지막으로 패를 버리는 사람의 패(하저패)로 론화료하는 경우'),
(12,'영상개화','깡을 선언하고 집어온 패(영상패)로 쯔모화료하는 경우'),
(13,'창깡','다른 사람이 가깡을 하는 패가 자신의 화료패인 경우'),
(14,'도라','영상패 중 앞면으로 공개되는 도라표시패의 다음 패를 가지고 화료.'),
(15,'삼색동순','세 가지 수패로 똑같은 슌쯔를 만들 경우'),
(16,'일기통관','한 가지의 수패로 123,456,789의 슌쯔를 만든 경우'),
(17,'치또이츠','또이쯔(머리) 7개'),
(18,'삼색동각','세 가지 수패로 똑같은 커쯔를 만들 경우'),
(19,'찬타','모든 몸통와 머리에 요구패(노두패와 자패)가 하나 이상 들어가는 경우'),
(20,'혼노두','머리와 코쯔 넷을 모두 요구패로 완성하는 경우'),
(21,'또이또이','몸통을 코쯔나 깡쯔 네 개로 만드는 경우. 즉 슌쯔가 없는 경우.'),
(22,'삼암각','안커(울지 않고 만든 코쯔) 세 개를 포함한 패로 화료한 경우'),
(23,'소삼원','삼원패 중 두 가지는 코쯔로, 한 가지는 머리에 포함하는 경우'),
(24,'삼공자','깡이 3개인 경우'),
(25,'더블리치','첫 턴에 리치를 거는 경우'),
(26,'량페코','이페코×2 (똑같은 슌츠 두 쌍)'),
(27,'준찬타','모든 몸통과 머리에 노두패가 하나 이상 들어가는 경우'),
(28,'혼일색','한 가지 종류의 수패와 자패만으로 화료하는 경우'),
(29,'인화','첫 배패를 받아 텐파이인 상태에서 첫 쯔모를 하기 전에 치,퐁,깡 없이 누군가 화료패를 버리는 경우.'),
(30,'유국만관','아무도 화료하지 못해 유국이 될 때, 자신이 버린 패들이 전부 요구패일 경우'),
(31,'청일색','한 가지 종류의 수패만으로 화료하는 경우'),
(32,'구련보등','한 가지 종류의 수패로 1112345678999 같은 종류 수패 아무거나 한개를 완성하는 경우. 9면대기 로 완성했다면(순정구련보등) 더블 역만 취급한다.'),
(33,'녹일색','삭수패 2, 3, 4, 6, 8, 發(발)만으로 손패를 완성한 경우'),
(34,'사암각','안커(울지 않고 만든 코쯔) 네 개로 화료하는 경우. 단기대기로 완성했다면(사암각 단기) 더블 역만 취급한다.'),
(35,'사공자','혼자서 깡쯔를 넷 만들어 화료하는 경우'),
(36,'청노두','모든 패가 노두패만으로 이루어진 경우'),
(37,'국사무쌍','모든 수패의 노두패와 모든 자패를 모으고, 여기에 해당 패 하나를 더 모으는 경우.13면대기로 완성했다면 (국사무쌍13면대기) 더블 역만 취급한다.'),
(38,'대삼원','삼원패 세 가지를 모두 코쯔나 깡쯔로 모으는 경우'),
(39,'소사희','바람패 세 가지를 코쯔나 깡쯔로, 1가지를 머리로 만드는 경우'),
(40,'대사희','바람패 네 가지를 모두 코쯔나 깡쯔로 만드는 경우. 더블 역만으로 취급되는 경우도 많다.'),
(41,'자일색','손패를 자패만으로 완성하는 경우'),
(42,'천화','자신이 친일 때 처음부터 화료 형태가 완성돼있는 경우.'),
(43,'지화','자신이 자이고 첫 쯔모패를 가지고 오자마자 화료 형태가 완성되는 경우. 즉 배패만으로 텐파이 후, 첫 쯔모로 바로 쯔모화료할 경우'),
(44,'헤아림역만','역들을 중첩시켜 도합 13판 이상으로 화료.');


select * from HAN;
# select HAN.yaku_name, menzen,`call`,`desc`,YAKU_IMAGE.image from HAN JOIN YAKU_DESC WHERE HAN.id = YAKU_DESC.id and YAKU_DESC.id = YAKU_IMAGE.id; #id값없이 조인

select HAN.yaku_name, YAKU_IMAGE.yaku_nick, menzen,`call`,`desc`, YAKU_IMAGE.image from HAN, YAKU_DESC,YAKU_IMAGE WHERE HAN.id = YAKU_DESC.id
 and YAKU_DESC.id = YAKU_IMAGE.id;
 
desc HAN;
desc YAKU_DESC;
desc YAKU_IMAGE;
desc User_Data;
desc User_Post;
desc User_Comment;