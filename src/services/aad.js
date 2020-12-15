import { UserAgentApplication } from "msal";

var msalConfig = {
    auth: {
        // clientId: "821fe51c-1f17-4abb-8b1a-bccb39b3571c",
        // authority: "https://login.microsoftonline.com/25702d72-aeef-4f13-8b47-cc2595d7f3fc",
        clientId: "23fc0598-0f0d-47c6-8094-dc3630b88e41",
        authority: "https://login.microsoftonline.com/6e277990-b1d6-4b85-8470-509b7050bd88",
        redirectURI: "http://localhost:8081/"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};
//   // Config object to be passed to Msal on creation
//   const msalConfig = {
//     auth: {
//       clientId: "821fe51c-1f17-4abb-8b1a-bccb39b3571c", // this is a fake id
//     //   authority: "https://login.microsoftonline.com/common",
//       authority: "https://login.microsoftonline.com/common/25702d72-aeef-4f13-8b47-cc2595d7f3fc",
//       redirectUri: "http://localhost:3000/",
//     },
//     cache: {
//       cacheLocation: "sessionStorage", // This configures where your cache will be stored
//       storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//     }
//   };

var requestObj = {
    scopes: ["user.read"]
};

var myMSALObj = new UserAgentApplication(msalConfig);
// const myMSALObj = new Msal.UserAgentApplication(msalConfig);

var login = async () => {
    var authResult = await myMSALObj.loginPopup(requestObj);
    return authResult.account;
};

var getAccount = async () => {
    var account = await myMSALObj.getAccount();

    // console.log('!!!!!!!!!!!!!! Hij gaat nu AWAITen ......... !!!!!!!!!!!!!!!!!!:');
    // var accessToken = await this.myMSALObj.acquireTokenSilent();
    // console.log('!!!!!!!!!!!!!!accessToken!!!!!!!!!!!!!!!!!!:');
    // console.log(accessToken);

    // const tokenResponse = await acquireToken(GRAPH_REQUESTS.LOGIN).catch(
    //     error => {
    //       setError(error.message);
    //     }
    //   );


    // GEEEEEEN TOKEN - for now. 
    // const tokenResponse = await myMSALObj.acquireTokenSilent(requestObj);



    // console.log('!!!!!!!!!!!!!!tokenResponse!!!!!!!!!!!!!!!!!!:');
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    // console.log(tokenResponse);
    // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

    return account;
};


// var getToken = async () => {
//     var account = await myMSALObj.getAccount();

//     DIT MOET UITGESTERD BLIJVEN:
//     console.log('!!!!!!!!!!!!!! Hij gaat nu AWAITen ......... !!!!!!!!!!!!!!!!!!:');
//     <<TOT HIER

//     const tokenResponse = await myMSALObj.acquireTokenSilent(requestObj);

//     DIT MOET UITGESTERD BLIJVEN:
//     console.log('!!!!!!!!!!!!!!tokenResponse!!!!!!!!!!!!!!!!!!:');
//     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
//     console.log(tokenResponse);
//     console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
//     <<TOT HIER

//     return tokenResponse;
// };

var logoff = () => {
    myMSALObj.logout();
};

export default {
    login,
    getAccount,
    // getToken,
    logoff
};