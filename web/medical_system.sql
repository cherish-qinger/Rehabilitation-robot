/*
Navicat MySQL Data Transfer

Source Server         : lxg
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : medical_system

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-11-08 15:18:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ask
-- ----------------------------
DROP TABLE IF EXISTS `ask`;
CREATE TABLE `ask` (
  `AID` int NOT NULL AUTO_INCREMENT,
  `PID` int DEFAULT NULL,
  `ASKTIME` datetime DEFAULT NULL,
  `ASKCONTENT` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `REPLYTIME` datetime DEFAULT NULL,
  `REPLYCONTENT` varchar(200) DEFAULT NULL,
  `ISREPLY` bit(1) DEFAULT NULL,
  `REPLYD` varchar(15) DEFAULT NULL,
  `DSID` int DEFAULT NULL,
  PRIMARY KEY (`AID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of ask
-- ----------------------------
INSERT INTO `ask` VALUES ('8', '1', '2021-09-13 11:24:38', '我是皮五，这是第一次留言', '2021-09-16 10:27:47', '我现在回答你的问题', '', '张三', '11');
INSERT INTO `ask` VALUES ('9', '1', '2021-09-13 11:37:39', '我是皮五，这是我第二次提问', '2021-09-13 15:08:22', '我现在已回答此问题', '', '张三', '11');
INSERT INTO `ask` VALUES ('10', '1', '2021-09-13 11:40:02', '我是皮五，这是我第三次留言', null, null, '\0', null, null);
INSERT INTO `ask` VALUES ('11', '1', '2021-09-13 11:41:54', '我是皮五，这是我第四次提出问题', '2021-09-15 10:52:54', '我已回答此问题', '', '张三', '11');
INSERT INTO `ask` VALUES ('12', '1', '2021-09-13 17:19:47', '我是皮五，这是第五次留言', null, null, '\0', null, null);
INSERT INTO `ask` VALUES ('13', '2', '2021-09-13 20:09:17', '我是light，这是第一次提问', null, null, '\0', null, null);
INSERT INTO `ask` VALUES ('14', '2', '2021-09-13 20:09:42', '我是light，这是我第二次提问', null, null, '\0', null, null);
INSERT INTO `ask` VALUES ('15', '1', '2021-09-16 10:25:40', '我是皮五，这是第六次留言', null, null, '\0', null, null);
INSERT INTO `ask` VALUES ('16', '1', '2021-09-18 10:01:10', '我是皮五', '2021-09-18 10:01:37', '回答', '', '张三', '11');

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor` (
  `DSID` int NOT NULL,
  `DNAME` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `DID` int DEFAULT NULL,
  `DBIRTH` date DEFAULT NULL,
  `DAGE` int DEFAULT NULL,
  `WAGE` int DEFAULT NULL,
  `DPHOTO` mediumblob,
  `DHOSPITAL` varchar(20) DEFAULT NULL,
  `DDEPARTMENT` varchar(10) DEFAULT NULL,
  `DTITLE` varchar(5) DEFAULT NULL,
  `DADDRESS` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `DTEL` char(11) DEFAULT NULL,
  `DEMAIL` varchar(50) DEFAULT NULL,
  `DSEX` varchar(1) DEFAULT NULL,
  `DPOLITICS` varchar(10) DEFAULT NULL,
  `DPASSWORD` varchar(30) DEFAULT NULL,
  `DFACEDATA` mediumblob,
  PRIMARY KEY (`DSID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES ('11', '张三', '1', '2021-07-09', '56', '20', null, null, null, null, null, null, null, null, null, '123456', null);
INSERT INTO `doctor` VALUES ('22', '李四', '1', '1955-07-09', null, null, null, null, null, null, null, null, null, null, null, '123456', null);

-- ----------------------------
-- Table structure for dprelation
-- ----------------------------
DROP TABLE IF EXISTS `dprelation`;
CREATE TABLE `dprelation` (
  `DSID` int DEFAULT NULL,
  `PID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of dprelation
-- ----------------------------
INSERT INTO `dprelation` VALUES ('11', '1');
INSERT INTO `dprelation` VALUES ('11', '2');
INSERT INTO `dprelation` VALUES ('11', '3');

-- ----------------------------
-- Table structure for guidance
-- ----------------------------
DROP TABLE IF EXISTS `guidance`;
CREATE TABLE `guidance` (
  `PID` int NOT NULL,
  `TYPE` int DEFAULT NULL,
  `GUIDANCE` varchar(200) DEFAULT NULL,
  `WRITED` varchar(15) DEFAULT NULL,
  `WRITETIME` datetime DEFAULT NULL,
  `ISREAD` bit(1) DEFAULT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of guidance
-- ----------------------------

-- ----------------------------
-- Table structure for medical_record
-- ----------------------------
DROP TABLE IF EXISTS `medical_record`;
CREATE TABLE `medical_record` (
  `MEN` int NOT NULL,
  `PID` int DEFAULT NULL,
  `MRCONTENT` varchar(200) DEFAULT NULL,
  `WRITED` varchar(15) DEFAULT NULL,
  `WRITETIME` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of medical_record
-- ----------------------------
INSERT INTO `medical_record` VALUES ('1', '1', 'nihao', 'light', '2020-06-25 00:00:00');
INSERT INTO `medical_record` VALUES ('2', '2', 'nihao', 'light', '2022-06-25 00:00:00');
INSERT INTO `medical_record` VALUES ('3', '2', 'nihao', 'light', '2022-07-22 00:00:00');
INSERT INTO `medical_record` VALUES ('4', '2', 'nihao', 'light', '2022-07-22 00:00:00');
INSERT INTO `medical_record` VALUES ('5', '2', 'nihao', 'light', '2022-07-22 00:00:00');
INSERT INTO `medical_record` VALUES ('6', '1', 'chifan', 'light', '2021-07-22 00:00:00');
INSERT INTO `medical_record` VALUES ('7', '1', '多喝水', '李现光', '2021-07-23 00:00:00');
INSERT INTO `medical_record` VALUES ('8', '1', 'haoa', 'light', '2021-07-23 16:25:31');
INSERT INTO `medical_record` VALUES ('2', '1', 'meishiha', 'light', '2021-07-23 19:16:53');
INSERT INTO `medical_record` VALUES ('5', '1', '今天星期五', 'light', '2021-09-06 13:07:37');
INSERT INTO `medical_record` VALUES ('6', '1', '你好大神', 'light', '2021-09-07 10:49:56');
INSERT INTO `medical_record` VALUES ('8', '1', '今天星期三', 'light', '2021-09-15 10:12:59');
INSERT INTO `medical_record` VALUES ('9', '1', '今天星期三,第二次提交病例', 'light', '2021-09-15 10:16:27');
INSERT INTO `medical_record` VALUES ('10', '1', '今天星期三,第四次写病例', 'light', '2021-09-15 10:18:44');
INSERT INTO `medical_record` VALUES ('5', '2', '大家好', 'light', '2021-09-16 10:27:11');

-- ----------------------------
-- Table structure for patient
-- ----------------------------
DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient` (
  `PID` int NOT NULL,
  `PNAME` varchar(15) DEFAULT NULL,
  `PSEX` varchar(1) DEFAULT NULL,
  `PPHOTO` mediumblob,
  `PBIRTH` date DEFAULT NULL,
  `PAGE` int DEFAULT NULL,
  `PADDRESS` varchar(50) DEFAULT NULL,
  `PTEL` char(11) DEFAULT NULL,
  `PFACEDATA` mediumblob,
  `PPASSWORD` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of patient
-- ----------------------------
INSERT INTO `patient` VALUES ('1', '皮五', '男', null, '2021-09-06', '12', '河北', '1333333333', null, '123456');
INSERT INTO `patient` VALUES ('2', 'light', null, null, null, null, null, null, null, '123456');

-- ----------------------------
-- Table structure for patient_video
-- ----------------------------
DROP TABLE IF EXISTS `patient_video`;
CREATE TABLE `patient_video` (
  `PID` int DEFAULT NULL,
  `VIDEOADDRESS` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of patient_video
-- ----------------------------

-- ----------------------------
-- Table structure for physiological_data
-- ----------------------------
DROP TABLE IF EXISTS `physiological_data`;
CREATE TABLE `physiological_data` (
  `PID` int DEFAULT NULL,
  `GETTIME` datetime DEFAULT NULL,
  `HEARTRATE` int DEFAULT NULL,
  `CONDUCTANCE` int DEFAULT NULL,
  `TEMPERATURE` int DEFAULT NULL,
  `ISOUTRANGE` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of physiological_data
-- ----------------------------

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `maiboid` int NOT NULL,
  `maibo` int DEFAULT NULL,
  PRIMARY KEY (`maiboid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', '-23');
INSERT INTO `test` VALUES ('2', '-32');
INSERT INTO `test` VALUES ('3', '-44');
INSERT INTO `test` VALUES ('4', '-56');
INSERT INTO `test` VALUES ('5', '-68');
INSERT INTO `test` VALUES ('6', '-77');
INSERT INTO `test` VALUES ('7', '-82');
INSERT INTO `test` VALUES ('8', '-83');
INSERT INTO `test` VALUES ('9', '-81');
INSERT INTO `test` VALUES ('10', '-77');
INSERT INTO `test` VALUES ('11', '-72');
INSERT INTO `test` VALUES ('12', '-67');
INSERT INTO `test` VALUES ('13', '-63');
INSERT INTO `test` VALUES ('14', '-61');
INSERT INTO `test` VALUES ('15', '-61');
INSERT INTO `test` VALUES ('16', '-64');
INSERT INTO `test` VALUES ('17', '-68');
INSERT INTO `test` VALUES ('18', '-74');
INSERT INTO `test` VALUES ('19', '-80');
INSERT INTO `test` VALUES ('20', '-86');
INSERT INTO `test` VALUES ('21', '-90');
INSERT INTO `test` VALUES ('22', '-93');
INSERT INTO `test` VALUES ('23', '-95');
INSERT INTO `test` VALUES ('24', '-94');
INSERT INTO `test` VALUES ('25', '-92');
INSERT INTO `test` VALUES ('26', '-86');

-- ----------------------------
-- Table structure for train_task
-- ----------------------------
DROP TABLE IF EXISTS `train_task`;
CREATE TABLE `train_task` (
  `PID` int DEFAULT NULL,
  `TRAINCONTENT` varchar(200) DEFAULT NULL,
  `WRITED` varchar(15) DEFAULT NULL,
  `WRITETIME` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of train_task
-- ----------------------------
INSERT INTO `train_task` VALUES ('1', '今天星期六', '张三', '2021-09-25 13:51:35');
