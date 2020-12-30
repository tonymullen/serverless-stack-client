// const config = {
//   STRIPE_KEY: "pk_test_51HpigZJlfyD55XDRr3uWmkW6QxtcZ4MIa15ImMXKxPuiFIkdCCup0yFRcKSZZRHuwdQg7PbFOjrU0nL0xTXt5JI700EYWpW1Ce",
//   MAX_ATTACHMENT_SIZE: 5000000,
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: "mullen-notes-app-upload",
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://98krrx16v2.execute-api.us-east-1.amazonaws.com/prod",
//   },
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_pa4T4RlMR",
//     APP_CLIENT_ID: "1mojdt21sa5v8t890anuol7t2g",
//     IDENTITY_POOL_ID: "us-east-1:3cbab987-7626-41b9-b215-6a09a9b09e1d",
//   },
// };

// export default config;


const dev = {
  STRIPE_KEY: "pk_test_51HpigZJlfyD55XDRr3uWmkW6QxtcZ4MIa15ImMXKxPuiFIkdCCup0yFRcKSZZRHuwdQg7PbFOjrU0nL0xTXt5JI700EYWpW1Ce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-11q9dxqa67z4x",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pcg3kcvpk4.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_cEYw1sBzY",
    APP_CLIENT_ID: "7hhj63v3sou9ugrpje3leqavth",
    IDENTITY_POOL_ID: "us-east-1:202c0d6a-4a04-4c81-88c8-6afbd6f9cafa"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HpigZJlfyD55XDRr3uWmkW6QxtcZ4MIa15ImMXKxPuiFIkdCCup0yFRcKSZZRHuwdQg7PbFOjrU0nL0xTXt5JI700EYWpW1Ce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-kyd8t2d7z51q",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://98krrx16v2.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_k8Jb1rH5p",
    APP_CLIENT_ID: "4saa55nuv4439fov3ikn6k05ou",
    IDENTITY_POOL_ID: "us-east-1:1e0fb2b9-3e35-4351-801f-928a265c6b27",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;