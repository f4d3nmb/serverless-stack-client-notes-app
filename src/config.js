const dev = {
    STRIPE_KEY: "pk_test_yKttf7Dl72PLEXmhT5OsQzhU00GwC76jeO",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-4my3rn3di76l"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://uye126nyu8.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_I6j7ac4Xt",
      APP_CLIENT_ID: "4om2vqlifthldgnhvosn5ujsgk",
      IDENTITY_POOL_ID: "us-east-1:7809fb49-ce9a-44a0-aa67-861fc3ffd473"
    }
  };
  
  const prod = {
    STRIPE_KEY: "Ypk_test_yKttf7Dl72PLEXmhT5OsQzhU00GwC76jeO",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-frjwmsdimb52"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://iktfcnwcyk.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_hmDWVoIUL",
      APP_CLIENT_ID: "1u0ihalof1nc9903fa55s3esva",
      IDENTITY_POOL_ID: "us-east-1:375af025-bbb6-4d46-aa8c-d7557cd2ddae"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };