
require('isomorphic-fetch');
const fs = require('fs');
const Twit = require('twit');

const { key, secret } = require('./secret.json');

var T = new Twit({
  consumer_key: key,
  consumer_secret: secret,
  app_only_auth: true
});

const users = ['roro_ourson', '_jubobs_', 'ctchrysler_', 'reactjs', 'fipradio'];

const tweetsPs = users.map(user => {
  return T.get('statuses/user_timeline', { screen_name: user, count: 10 })
  .then(result => {
    console.log(`${user} \u2713`);
    return result;
  });
});

Promise.all(tweetsPs)
.then(([tweets, ...tweets2]) => {

  fs.writeFile('./data/tweets.json', JSON.stringify(tweets.data), err => { if(err) console.log(err); });

  const tweet2FlatList = tweets2.reduce((arr, cur) => arr.concat(cur.data), []);
  fs.writeFile('./data/tweets2.json', JSON.stringify(tweet2FlatList), err => { if (err) console.log(err); });
});
