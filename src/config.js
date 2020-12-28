const config = {
  STRIPE_KEY: "pk_test_51HpigZJlfyD55XDRr3uWmkW6QxtcZ4MIa15ImMXKxPuiFIkdCCup0yFRcKSZZRHuwdQg7PbFOjrU0nL0xTXt5JI700EYWpW1Ce",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "mullen-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://98krrx16v2.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pa4T4RlMR",
    APP_CLIENT_ID: "1mojdt21sa5v8t890anuol7t2g",
    IDENTITY_POOL_ID: "us-east-1:3cbab987-7626-41b9-b215-6a09a9b09e1d",
  },
};

export default config;