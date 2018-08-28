
require('isomorphic-fetch');
const fs = require('fs');
const Twit = require('twit');

const { key, secret } = require('./secret.json');

var T = new Twit({
  consumer_key: key,
  consumer_secret: secret,
  app_only_auth: true
});

const users = ['roro_ourson', '_jubobs_'];

const tweetsPs = users.map(user => {
  return T.get('statuses/user_timeline', { screen_name: user, count: 10 });
});

Promise.all(tweetsPs)
.then(list => {
  const flatList = list.reduce((arr, cur) => arr.concat(cur.data), []);

  fs.writeFile('./tweets.json', JSON.stringify(flatList), err => { if(err) console.log(err); });
});
