# Simple Bets

A simple starter application used to build out a user authenication flow.

## AWS Amplify

1. Create an AWS Cognito instance. Choose all the defaults.
   - also create an app client (with no secret)
2. Configure AWS Amplify in the client app. [docs](https://docs.amplify.aws/lib/auth/start/q/platform/js/#configure-your-application)

   ```
   // aws-exports.js

   export default {
     Auth: {
       region: "XXX",
       userPoolId: "XXX",
       userPoolWebClientId: "XXX",
     },
   };
   ```

3. Add signup, login, and logout. [docs](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/)
   - also verify (between signup and first login)
   - persist authentication state on reload
   - redirect public/private views
4. Pass JWT token as Authorization header with server API calls.
   - verify/validate the token server-side [docs](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html)
   - decode the token to id the user
