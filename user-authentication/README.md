# User Authentication

This folder contains test code reviewed during the User Authentication presentation at CodeMash 2023 on January 13th.

**Recorded presentation:** https://www.youtube.com/watch?v=X8zB61bcj84

**Slides:** https://slides.com/kylewhitaker51/user-authentication

*Simple Bets is an original idea. Do not steal it because it should make billions.*

**Title:** Don’t let user authentication stop you from building your web app!

**Description:** Authentication is no trivial task; it is also an essential building block for most web applications. Building a robust user authentication flow for the first time can stop even a great developer dead in their tracks. Authentication can drown you in a sea of architectural complexity, and all you want to do is build a simple, secure sign-in page for your users! If you want to conquer your anxiety of building a user authentication flow, then this session is for you.

We’ll get our feet wet with some code samples implementing basic authentication flows using two different options: Passport.js and AWS Cognito. We’ll also discuss what it takes to implement one-time passwords (OTP), multi-factor authentication (MFA), and social login with providers such as Google and Facebook. Finally, we’ll make sure all of this can be supported with E2E test automation. You will leave this session with the confidence and tools to construct a simple yet robust user authentication flow in any web application.

## Notes

1. The is a Yarn (v1) monorepo utilizing workspaces for package management.
1. The app stack is React, Express, and Postgres. Also used are Typescript and Prisma.
1. Environment variables defined in the `server/.env` file are not included in source control, but here are the relevant variables if you care:
    ```
    DATABASE_URL=
    JWKS_URL=
    ```
1. The client app under test was developed with AWS Amplify. There is a file `aws-exports.js` which is not included in source control that would contain environment connection data. See `./simple-bets.md` for more information.