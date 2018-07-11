import React from 'react';
import ReactDOM from 'react-dom';

import TweetList from './TweetList.jsx';
import Tweet from './Tweet.jsx';
import Filter from './Filter.jsx';

import { isFrenchTweet } from '../utils';
import fetchJson from '../fetchJson';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      isFr: false,
    };

    this.filter = this.filter.bind(this);
 }

  filter() {
    this.setState({
      isFr: !this.state.isFr,
    });
  }

  componentDidMount() {
    fetchJson('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
    .then(result => this.setState({ tweets: result }))
    .catch(e => console.error(e));
  }

  render() {
    const { isFr, tweets } = this.state;

    const tweetsToDisplay = !isFr
      ? tweets
      : tweets.filter(isFrenchTweet);

    const text = isFr ? 'Fr' : 'All';

    return (
      <div>
        <TweetList tweets={tweetsToDisplay} />
        <Filter text={text} filter={this.filter} />
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
