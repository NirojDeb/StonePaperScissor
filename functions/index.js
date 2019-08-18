const functions = require('firebase-functions');

const { Issuer } = require('openid-client');
const connectToDatabase = require('./db');

// eslint-disable-next-line promise/catch-or-return
Issuer.discover('https://accounts.google.com') // => Promise
  // eslint-disable-next-line promise/always-return
  .then(googleIssuer => {
    console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.userCreate = functions.https.onRequest(async (request, response) => {
    let result = null;
    try {
    //   const input = JSON.parse(request.body);
    const input = request.body;
    //   const {
    //     name, email, password, isAdmin, isPartner, isCustomer,
    //   } = JSON.parse(request.body);
      const { User } = await connectToDatabase();
      console.log(`connection successful ${User}`);
      const user = await User.create(input);
      console.log('user successful');
    //   return {
    //     statusCode: 201,
    //     body: JSON.stringify({
    //       message: 'user profile created!',
    //       user,
    //     }),
    //   };
    result = {
        statusCode: 201,
        body: JSON.stringify({
          message: 'user profile created!',
          user,
        }),
      };
    } catch (error) {
    //   return {
    //     statusCode: 401,
    //     body: JSON.stringify({
    //       message: error.message || 'Authorization failed',
    //     }),
    //   };
    result = {
        statusCode: 401,
        body: JSON.stringify({
          message: error.message || 'Authorization failed',
        }),
      };
    }
    return response.send(result);
  });