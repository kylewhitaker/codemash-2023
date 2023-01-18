import jsonwebtoken from "jsonwebtoken";
import JwksRsa from "jwks-rsa";

export const tokenMiddleware = async function (req: any, res: any, next: any) {
  // grab token from authorization header
  const token = req.headers.authorization?.split(" ")[1] ?? "";
  console.log("JWT token:");
  console.log(token);

  // decode the token (need the kid)
  const decoded = jsonwebtoken.decode(token, { complete: true });
  console.log("decoded token:");
  console.log(decoded);

  // fetch public key from Cognito IDP
  const jwksClient = JwksRsa({
    jwksUri: process.env.JWKS_URL as string,
    cache: true,
  });
  const signingKey = await jwksClient.getSigningKey(decoded?.header.kid);
  const secretOrPublicKey = signingKey.getPublicKey();
  console.log("public key:");
  console.log(secretOrPublicKey);

  // verify the token with the key
  const options = {};
  const verified = jsonwebtoken.verify(token, secretOrPublicKey, options);
  console.log("verified:");
  console.log(verified);

  // modify the request object with the user
  req.user = verified;

  return next();
};
