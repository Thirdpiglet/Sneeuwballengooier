import axios from 'axios';
let thisAllVersions = {};

async function retrieveTemp(parmURL) {
  await axios
    .get(parmURL, { 
            auth: {
                username: 'z',
                password: 'z'
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            crossdomain: true 
    })
    // .get(parmURL, {})
    .then(res => {
      thisAllVersions = res.data;
    })
    .catch(function() {
      thisAllVersions = null;
    });
  return thisAllVersions;
}
 
async function retrieveResponses(parmURL) {
  await axios
    .get(parmURL, { 
            auth: {
                username: 'z',
                password: 'z'
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            crossdomain: true 
    })
    // .get(parmURL, {})
    .then(res => {
      thisAllVersions = res.data;
    })
    .catch(function() {
      thisAllVersions = null;
    });
  return thisAllVersions;
}

// async function createNewVersion(parmURL, newVersion) {
//     const data = JSON.stringify(newVersion);
//     return axios
//       .post(parmURL, data, {
//         auth: {
//             username: 'z',
//             password: 'z'
//         },
//         headers: {
//             'Content-Type': 'application/json',
//         },
//       })
//       .then(function() {
//         return true;
//       })
//       .catch(function() {
//         return false;
//       });

async function updateVersion(parmURL, updVersion, verId) {
  const data = JSON.stringify(updVersion, verId);
  return axios
    .put(parmURL + verId, data, {
        auth: {
            username: 'z',
            password: 'z'
        },
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(function() {
      return true;
    })
    .catch(function() {
      return false;
    });
}

async function createNewVersion(parmURL, newVersion) {
    const data = JSON.stringify(newVersion);
    return axios
      .post(parmURL, data, {
        auth: {
            username: 'z',
            password: 'z'
        },
        headers: {
            'Content-Type': 'application/json',
        },
      })
      .then(function() {
        return true;
      })
      .catch(function() {
        return false;
      });
}

export {
  retrieveTemp,
  retrieveResponses,
  createNewVersion,
  updateVersion,
};
