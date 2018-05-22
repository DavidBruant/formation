import React from 'react';

import Tweet from './Tweet.jsx';

const TweetList = props => {
  const tweets = props.tweets.map(tweet => (<Tweet tweet={tweet} key={tweet.id}/>));

  return (
    <ul>{tweets}</ul>
  );
};

export default TweetList;
