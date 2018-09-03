"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Cloud Vision
const vision = require("@google-cloud/vision");
const visionClient = new vision.ImageAnnotatorClient();
// Dedicated bucket for cloud function invocation
const bucketName = "frolf-50245-vision";
exports.imageTagger = functions.storage
    .bucket(bucketName)
    .object()
    .onFinalize((object, context) => __awaiter(this, void 0, void 0, function* () {
    // File data
    const filePath = object.name;
    // Location of save file in bucket
    const imageUri = `gs://${bucketName}/${filePath}`;
    // Firestore docID === file name
    const docId = filePath.split(".jpg")[0];
    const docRef = admin
        .firestore()
        .collection("photos")
        .doc(docId);
    // Await the cloud vision response
    // Text Extraction
    const textRequest = yield visionClient.documentTextDetection(imageUri);
    const fullText = textRequest[0].textAnnotations[0];
    const text = fullText ? fullText.description : null;
    // Web Detection
    const webRequest = yield visionClient.webDetection(imageUri);
    const web = webRequest[0].webDetection;
    // Web Detection
    const faceRequest = yield visionClient.faceDetection(imageUri);
    const faces = faceRequest[0].faceAnnotations;
    // Landmarks
    const landmarksRequest = yield visionClient.landmarkDetection(imageUri);
    const landmarks = landmarksRequest[0].faceAnnotations;
    // Labels
    const labelRequest = yield visionClient.labelDetection(imageUri);
    const labels = labelRequest[0].labelAnnotations.map(obj => obj.description);
    const data = { text, web, faces, landmarks, labels };
    return docRef.set(data, { merge: true });
}));
//# sourceMappingURL=vision.js.map