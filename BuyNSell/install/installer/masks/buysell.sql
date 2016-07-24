/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : abc

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2013-08-21 15:56:11
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `address`
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `country_id` int(11) NOT NULL,
  `address1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postal` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_date` int(11) NOT NULL,
  `updated_date` int(11) NOT NULL,
  `city_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of address
-- ----------------------------

-- ----------------------------
-- Table structure for `article`
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `created_date` int(11) NOT NULL,
  `public` int(11) NOT NULL,
  `order` int(11) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  `public` int(11) DEFAULT NULL,
  `total_extension` int(11) DEFAULT '0',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'Market Places', '1368355234', '1', '4');
INSERT INTO `category` VALUES ('2', 'Themes', '1368355234', '1', '2');
INSERT INTO `category` VALUES ('3', 'Languages', '1368355234', '1', '0');
INSERT INTO `category` VALUES ('6', 'Modules', '1368355234', '1', '7');

-- ----------------------------
-- Table structure for `category_property`
-- ----------------------------
DROP TABLE IF EXISTS `category_property`;
CREATE TABLE `category_property` (
  `value_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `property_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`value_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of category_property
-- ----------------------------

-- ----------------------------
-- Table structure for `city`
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `region_id` int(11) NOT NULL,
  `city_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `public` int(11) NOT NULL,
  `created_date` int(11) NOT NULL,
  `updated_date` int(11) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of city
-- ----------------------------

-- ----------------------------
-- Table structure for `comments`
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `created_date` int(11) DEFAULT NULL,
  `extension_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comments
-- ----------------------------

-- ----------------------------
-- Table structure for `compatibility`
-- ----------------------------
DROP TABLE IF EXISTS `compatibility`;
CREATE TABLE `compatibility` (
  `compatibility_id` int(11) NOT NULL AUTO_INCREMENT,
  `compatibility_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  `public` int(11) DEFAULT NULL,
  PRIMARY KEY (`compatibility_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of compatibility
-- ----------------------------

-- ----------------------------
-- Table structure for `country`
-- ----------------------------
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country` (
  `country_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `public` int(11) NOT NULL,
  `created_date` int(11) NOT NULL,
  `updated_date` int(11) NOT NULL,
  `country_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of country
-- ----------------------------

-- ----------------------------
-- Table structure for `currency`
-- ----------------------------
DROP TABLE IF EXISTS `currency`;
CREATE TABLE `currency` (
  `currency_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `code` varchar(3) NOT NULL,
  `symbol_left` varchar(12) NOT NULL,
  `symbol_right` varchar(12) NOT NULL,
  `decimal_place` char(1) NOT NULL,
  `value` float(15,2) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `default` int(11) DEFAULT NULL,
  `last_updated` int(11) DEFAULT NULL,
  PRIMARY KEY (`currency_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of currency
-- ----------------------------
INSERT INTO `currency` VALUES ('2', 'US Dollar', 'USD', '$', '', '', '1.00', '1', '1', '1377074619');
INSERT INTO `currency` VALUES ('3', 'VND', 'VND', '', 'd', '', '21075.00', '1', '0', '1377074184');

-- ----------------------------
-- Table structure for `download_user`
-- ----------------------------
DROP TABLE IF EXISTS `download_user`;
CREATE TABLE `download_user` (
  `download_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `download` int(11) DEFAULT NULL,
  PRIMARY KEY (`download_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of download_user
-- ----------------------------

-- ----------------------------
-- Table structure for `downloads`
-- ----------------------------
DROP TABLE IF EXISTS `downloads`;
CREATE TABLE `downloads` (
  `download_id` int(11) NOT NULL AUTO_INCREMENT,
  `extension_id` int(11) DEFAULT NULL,
  `item_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `item_file` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `list_com` text COLLATE utf8_unicode_ci,
  `downloads` int(11) DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`download_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of downloads
-- ----------------------------

-- ----------------------------
-- Table structure for `extension_property`
-- ----------------------------
DROP TABLE IF EXISTS `extension_property`;
CREATE TABLE `extension_property` (
  `extension_property_id` int(11) NOT NULL AUTO_INCREMENT,
  `extension_id` int(11) DEFAULT NULL,
  `property_value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`extension_property_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of extension_property
-- ----------------------------

-- ----------------------------
-- Table structure for `extensions`
-- ----------------------------
DROP TABLE IF EXISTS `extensions`;
CREATE TABLE `extensions` (
  `extension_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `banner` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `document` text COLLATE utf8_unicode_ci,
  `license_id` int(11) NOT NULL,
  `price` float(20,0) NOT NULL,
  `user_id` int(11) NOT NULL,
  `votes` int(11) NOT NULL,
  `views` int(11) NOT NULL,
  `download` int(11) DEFAULT NULL,
  `created_date` int(11) NOT NULL,
  `updated_date` int(11) NOT NULL,
  `public` int(11) DEFAULT NULL,
  `tag` text COLLATE utf8_unicode_ci,
  `status` int(11) DEFAULT NULL,
  `send_to_purchase` int(11) DEFAULT NULL,
  `comment` int(11) DEFAULT NULL,
  `like` int(11) DEFAULT '0',
  `dislike` int(11) DEFAULT '0',
  `link_preview` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `aprrove` int(11) DEFAULT '0',
  `shipping` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `priceperweight` int(11) DEFAULT NULL,
  PRIMARY KEY (`extension_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of extensions
-- ----------------------------

-- ----------------------------
-- Table structure for `gallery`
-- ----------------------------
DROP TABLE IF EXISTS `gallery`;
CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL AUTO_INCREMENT,
  `reference_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `type` int(11) NOT NULL DEFAULT '1' COMMENT '1: extension',
  PRIMARY KEY (`gallery_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gallery
-- ----------------------------

-- ----------------------------
-- Table structure for `groups`
-- ----------------------------
DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `group_id` tinyint(3) NOT NULL AUTO_INCREMENT,
  `groupname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of groups
-- ----------------------------
INSERT INTO `groups` VALUES ('1', 'Admin');
INSERT INTO `groups` VALUES ('2', 'Editor');
INSERT INTO `groups` VALUES ('3', 'Member');

-- ----------------------------
-- Table structure for `languages`
-- ----------------------------
DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages` (
  `language_id` int(11) NOT NULL AUTO_INCREMENT,
  `language_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `public` int(11) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  `default` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of languages
-- ----------------------------
INSERT INTO `languages` VALUES ('1', 'english', 'en', '1', '1', '1369730191', '1', 'upload_file/lang/en.png');
INSERT INTO `languages` VALUES ('2', 'china', 'cn', '1', '2', '1369729157', '0', './upload_file/language/cn1.png');

-- ----------------------------
-- Table structure for `license`
-- ----------------------------
DROP TABLE IF EXISTS `license`;
CREATE TABLE `license` (
  `license_id` int(11) NOT NULL AUTO_INCREMENT,
  `license_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `public` int(11) DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`license_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of license
-- ----------------------------
INSERT INTO `license` VALUES ('1', 'Free', '1', '1368379019');
INSERT INTO `license` VALUES ('2', 'Commercial', '1', '1368461705');

-- ----------------------------
-- Table structure for `newsletters`
-- ----------------------------
DROP TABLE IF EXISTS `newsletters`;
CREATE TABLE `newsletters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) DEFAULT NULL,
  `content` text,
  `sent` tinyint(1) DEFAULT '0',
  `date_created` int(11) DEFAULT NULL,
  `date_sent` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of newsletters
-- ----------------------------
INSERT INTO `newsletters` VALUES ('6', 'Villa Del Sole May Newsletter 123', '<p>\r\n	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>\r\n<p>\r\n	</p>\r\n<p>\r\n	</p>\r\n<p>\r\n	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>\r\n<p>\r\n	</p>\r\n<p>\r\n	</p>\r\n<ul style=\"border-width: 0px; margin: 0px 0px 1em; padding: 0px 1.3em; font-size: 13px; font-style: normal; font-weight: normal; vertical-align: baseline; outline-width: 0px;\">\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Aliquam tincidunt mauris eu risus.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Vestibulum auctor dapibus neque.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Nunc dignissim risus id metus.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Cras ornare tristique elit.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Vivamus vestibulum nulla nec ante.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Praesent placerat risus quis eros.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Fusce pellentesque suscipit nibh.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Integer vitae libero ac risus egestas placerat.</li>\r\n	<li style=\"border-width: 0px; margin: 0px 0px 1em 1.3em; padding: 0px; font-size: 14px; font-style: normal; font-weight: normal; vertical-align: baseline; list-style-type: disc; list-style-position: outside; outline-width: 0px;\">\r\n		Vestibulum commodo felis quis tortor.</li>\r\n</ul>\r\n', '0', '1368420711', '0', '6');
INSERT INTO `newsletters` VALUES ('9', 'Welcome to Buy & Sell', '<div style=\"padding:1px 20px 10px\">\n	<h2 style=\"font-size:24px;font-weight:normal;margin-top:15px\">\n		<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><span style=\"color:#ff5c3e\">Welcome!</span> We&#39;re happy you joined us.</font></h2>\n	<p>\n		Your account information</p>\n	<p>\n		- Name: {name}</p>\n	<p>\n		- Username: root</p>\n	<p>\n		- Email: {email}</p>\n	<p>\n		<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><font color=\"555b64\"><font size=\"2\">Please </font></font>access your Buy&amp;Sell Let take a second to set up your Profile. </font></p>\n	<table cellpadding=\"5\">\n		<tbody>\n			<tr>\n				<td>\n					<ul>\n						<li>\n							</li>\n					</ul>\n				</td>\n				<td>\n					<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><font color=\"#212121\" face=\"arial,helvetica,sans-serif\" size=\"2\">Set up <a href=\"http://leopediademo.com/buynsell/profile/\" style=\"color:#0097ff\" target=\"_blank\"> Your Profile</a></font></font></td>\n			</tr>\n			<tr>\n				<td>\n					<ul>\n						<li>\n							</li>\n					</ul>\n				</td>\n				<td>\n					<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><font color=\"#212121\" face=\"arial,helvetica,sans-serif\" size=\"2\">Post your extension<a href=\"http://leopediademo.com/buynsell/profile/extension\"><u> </u>here</a><a href=\"http://www.swcsolutions.com/project/buysell/profile/extension\">.</a></font></font></td>\n			</tr>\n			<tr>\n				<td>\n					<ul>\n						<li>\n							</li>\n					</ul>\n				</td>\n				<td>\n					<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><font color=\"#212121\" face=\"arial,helvetica,sans-serif\" size=\"2\">Visit <a href=\"http://leopediademo.com/buynsell/\" style=\"color:#0097ff\" target=\"_blank\">Buy&amp;Sell</a> to buy good script with best price</font></font></td>\n			</tr>\n		</tbody>\n	</table>\n</div>\n<p>\n	</p>\n', '0', '1372493715', '0', '1');
INSERT INTO `newsletters` VALUES ('10', 'Notification! Extension {name} is updated', '<table cellpadding=\"0\" cellspacing=\"0\" width=\"550\">\r\n	<tbody>\r\n		<tr align=\"left\" valign=\"top\">\r\n			<td class=\"mainbar\" valign=\"top\">\r\n				<div style=\"padding:1px 20px 10px\">\r\n					<h2 style=\"font-size:24px;font-weight:normal;margin-top:15px\">\r\n						<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><span style=\"color:#ff5c3e\">Notification!</span> Extension {extension_name} that you purchased is updated.</font></h2>\r\n					<p>\r\n						Link: {link}</p>\r\n					<p>\r\n						<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\">Click <font color=\"555b64\"><font size=\"2\">link</font></font> to see detail. </font></p>\r\n				</div>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n<p>\r\n	</p>\r\n', '0', '1368959617', '0', '2');
INSERT INTO `newsletters` VALUES ('11', 'Notification! You have a comment from your extension', '<div style=\"padding:1px 20px 10px\">\r\n	<h2 style=\"font-size:24px;font-weight:normal;margin-top:15px\">\r\n		<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><span style=\"color:#ff5c3e\">Notification!</span> We&#39;re have a comment from root</font>.</h2>\r\n	<p>\r\n		Content:{content}</p>\r\n	<p>\r\n		Link : {link}</p>\r\n	<p>\r\n		<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\">Click Link <b><a href=\"&lt;?php echo $link;?&gt;\" style=\"text-decoration:none;color:#7aaa1b\" target=\"_blank\"><!--?php echo $extension_name;?--></a></b> to see detail. </font></p>\r\n</div>\r\n<p>\r\n	</p>\r\n', '0', '1368960060', '0', '4');
INSERT INTO `newsletters` VALUES ('12', 'Notification! You have purchased from {name}', '<div style=\"padding:1px 20px 10px\">\r\n	<h2 style=\"font-size:24px;font-weight:normal;margin-top:15px\">\r\n		<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><span style=\"color:#ff5c3e\">Notification!</span> <font color=\"555b64\"><font size=\"2\">root </font></font><!--?php echo $username;?-->purchased your Extension <font color=\"555b64\"><font size=\"2\">{extension_name}</font></font>.</font></h2>\r\n	<p>\r\n		<span style=\"color:#ff0000;\">Information:</span></p>\r\n	<p>\r\n		Name: <font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><font color=\"555b64\"><font size=\"2\">{extension_name}</font></font></font></p>\r\n	<p>\r\n		Quantity: <font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><font color=\"555b64\"><font size=\"2\">{quantity}</font></font></font></p>\r\n	<p>\r\n		Total Price: {total}</p>\r\n	<p>\r\n		Link: {link}</p>\r\n	<p>\r\n		<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\">Click <b><a href=\"{link}\" style=\"text-decoration:none;color:#7aaa1b\" target=\"_blank\">order</a></b> to see detail. </font></p>\r\n</div>\r\n<p>\r\n	</p>\r\n', '0', '1368962557', '0', '3');
INSERT INTO `newsletters` VALUES ('13', 'Notification! Extension {name} is created', '<table cellpadding=\"0\" cellspacing=\"0\" width=\"550\">\r\n	<tbody>\r\n		<tr align=\"left\" valign=\"top\">\r\n			<td class=\"mainbar\" valign=\"top\">\r\n				<div style=\"padding:1px 20px 10px\">\r\n					<h2 style=\"font-size:24px;font-weight:normal;margin-top:15px\">\r\n						<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\"><span style=\"color:#ff5c3e\">Notification!</span> {<font color=\"555b64\">u</font>ser_post} h<font color=\"555b64\">ad been create<font color=\"555b64\">d</font></font> Extension {extension_name}.</font></h2>\r\n					<p>\r\n						Link: {link}</p>\r\n					<p>\r\n						<font color=\"555b64\" face=\"tahoma,arial,helvetica,sans-serif\" size=\"2\">Click <font color=\"555b64\"><font size=\"2\">link</font></font> to see detail. </font></p>\r\n				</div>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n<p>\r\n	</p>\r\n', '0', '1370188451', null, '5');

-- ----------------------------
-- Table structure for `notifications`
-- ----------------------------
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `notify_extension` int(11) DEFAULT NULL,
  `notify_purchase` int(11) DEFAULT NULL,
  `notify_comment` int(11) DEFAULT NULL,
  PRIMARY KEY (`notification_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of notifications
-- ----------------------------

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `extension_id` int(11) NOT NULL,
  `extension_name` varchar(255) DEFAULT NULL,
  `extension_price` double(11,0) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_price` float(20,2) DEFAULT NULL,
  `commission` int(20) DEFAULT '0',
  `total_balance` float(20,2) DEFAULT '0.00',
  `added_date` datetime DEFAULT NULL,
  `created_date` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `payment_type` int(11) DEFAULT NULL,
  `payment_release` int(11) DEFAULT '0',
  `transaction_paypal_id` varchar(20) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `shipping_fee` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for `payment_method`
-- ----------------------------
DROP TABLE IF EXISTS `payment_method`;
CREATE TABLE `payment_method` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of payment_method
-- ----------------------------

-- ----------------------------
-- Table structure for `region`
-- ----------------------------
DROP TABLE IF EXISTS `region`;
CREATE TABLE `region` (
  `region_id` int(11) NOT NULL AUTO_INCREMENT,
  `region_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `public` int(11) DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`region_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of region
-- ----------------------------

-- ----------------------------
-- Table structure for `setting`
-- ----------------------------
DROP TABLE IF EXISTS `setting`;
CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zip_code` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `commission` int(11) DEFAULT NULL,
  `paypal_username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paypal_password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `paypal_signature` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `download_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `download_times` int(11) DEFAULT NULL,
  `download_expire` int(11) DEFAULT NULL,
  `auto_currency` int(11) DEFAULT NULL,
  `checkout_description` text COLLATE utf8_unicode_ci NOT NULL,
  `smtp_host` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `smtp_port` int(11) NOT NULL,
  `smtp_username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `smtp_password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `default_image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fb_api` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of setting
-- ----------------------------
INSERT INTO `setting` VALUES ('1', 'test@leopedia.com', 'Leopedia IT Solutions', 'assets/frontend/img/noimage.jpg', 'A-377 , Sector 19 , Nodia (UP Delhi NCR)', '', '201301', '7', '852 24990996', 'Welcome To our store', '10', 'chaulnt-facilitator_api1.swcsolutions.com', '1368968618', 'AyhbFJVsHcau4Ree3TVQLw1aRSfLAXOm8J21Xx-3pRFkniIGv8eHP1kr', 'rar,zip,jpg', '10', '3600', '1', '<div class=\"choose_text\">\r\n	<p>\r\n		1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>\r\n	<p>\r\n		2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>\r\n	<p>\r\n		3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>\r\n</div>\r\n<p>\r\n	</p>\r\n', '', '0', '', '', 'assets/frontend/img/noimage.jpg', '486992334724444');

-- ----------------------------
-- Table structure for `subscribers`
-- ----------------------------
DROP TABLE IF EXISTS `subscribers`;
CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of subscribers
-- ----------------------------

-- ----------------------------
-- Table structure for `user_like`
-- ----------------------------
DROP TABLE IF EXISTS `user_like`;
CREATE TABLE `user_like` (
  `user_id` int(11) NOT NULL,
  `extension_id` int(11) NOT NULL,
  `type` int(11) DEFAULT NULL,
  `created_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`extension_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_like
-- ----------------------------

-- ----------------------------
-- Table structure for `user_property`
-- ----------------------------
DROP TABLE IF EXISTS `user_property`;
CREATE TABLE `user_property` (
  `extension_property_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `property_value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`extension_property_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_property
-- ----------------------------

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `paypal` varchar(255) DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `city_id` int(11) NOT NULL,
  `post_code` varchar(20) DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `group_id` tinyint(3) DEFAULT NULL,
  `added_date` datetime DEFAULT NULL,
  `created_date` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('42', 'admin', '4297f44b13955235245b2497399d7a93', 'Buy & Sell', 'Admin', '', '0', '', '', '', '', '0', '', '', 'www.abc.com', '1', '0000-00-00 00:00:00', '1368460745', '1', null);
INSERT INTO `users` VALUES ('79', 'demo', 'fe01ce2a7fbac8fafaed7c982a04e229', 'Buy & Sell', 'Demo', '', '0', '', '', '', '', '0', '', '', 'www.abc.com', '1', '0000-00-00 00:00:00', '1368460745', '1', '');

-- ----------------------------
-- Table structure for `users_buy_extensions`
-- ----------------------------
DROP TABLE IF EXISTS `users_buy_extensions`;
CREATE TABLE `users_buy_extensions` (
  `user_id` int(11) NOT NULL,
  `extension_id` int(11) NOT NULL,
  `download` int(11) DEFAULT NULL,
  `expire_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`extension_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users_buy_extensions
-- ----------------------------
