import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

import * as agg from "./aggregation";
import * as vision from "./vision";
import * as notify from "./notifications";

// Aggregation Functions
export const updateFollowerCount = agg.updateFollowerCounts;
export const updatePostCount = agg.updatePostCount;

// Cloud vision
export const analyzeImage = vision.imageTagger;

// Notification Functions

export const unicornNotifications = notify.newUnicornPost;
