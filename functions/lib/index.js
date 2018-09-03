"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const agg = require("./aggregation");
const vision = require("./vision");
const notify = require("./notifications");
// Aggregation Functions
exports.updateFollowerCount = agg.updateFollowerCounts;
exports.updatePostCount = agg.updatePostCount;
// Cloud vision
exports.analyzeImage = vision.imageTagger;
// Notification Functions
exports.unicornNotifications = notify.newUnicornPost;
//# sourceMappingURL=index.js.map