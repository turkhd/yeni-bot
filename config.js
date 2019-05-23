const config = {
  "ownerID": "", //kendi IDınızı yazınız
  "admins": [""],
  "support": [""],
  "token": "", //botunuzun tokenini yazınız
  "dashboard" : {
    "oauthSecret": "", //botunuzun secretini yazınız 
    "callbackURL": `/callback`,//site URLnizi yazınız /callback kısmını silmeyiniz!
    "sessionSecret": "xyzxyz", //kalsın
    "domain": "" //site URLnizi yazınız!
  }
};

module.exports = config;