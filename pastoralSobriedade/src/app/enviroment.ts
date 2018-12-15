export const config_firebase = {
    apiKey: "AIzaSyDPnglowLH1EB7rqphtII3ZoaYJtcW0xxc",
    authDomain: "pastoralsobriedade-eaa28.firebaseapp.com",
    databaseURL: "https://pastoralsobriedade-eaa28.firebaseio.com",
    projectId: "pastoralsobriedade-eaa28",
    storageBucket: "pastoralsobriedade-eaa28.appspot.com",
    messagingSenderId: "912062141430"
  };

  export const snapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
      let item = element.val();
      item.key = element.key;
      returnArray.push(item);
    });
    return returnArray;
  }
