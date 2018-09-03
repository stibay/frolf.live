import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Cloud Vision
import * as vision from "@google-cloud/vision";
const visionClient = new vision.ImageAnnotatorClient();

// Dedicated bucket for cloud function invocation
const bucketName = "frolf-50245-vision";

export const imageTagger = functions.storage
  .bucket(bucketName)
  .object()
  .onFinalize(async (object, context) => {
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
    const textRequest = await visionClient.documentTextDetection(imageUri);
    const fullText = textRequest[0].textAnnotations[0];
    const text = fullText ? fullText.description : null;

    // Web Detection
    const webRequest = await visionClient.webDetection(imageUri);
    const web = webRequest[0].webDetection;

    // Web Detection
    const faceRequest = await visionClient.faceDetection(imageUri);
    const faces = faceRequest[0].faceAnnotations;

    // Landmarks
    const landmarksRequest = await visionClient.landmarkDetection(imageUri);
    const landmarks = landmarksRequest[0].faceAnnotations;

    // Labels
    const labelRequest = await visionClient.labelDetection(imageUri);
    const labels = labelRequest[0].labelAnnotations.map(obj => obj.description);

    const data = { text, web, faces, landmarks, labels };

    return docRef.set(data, { merge: true });
  });
