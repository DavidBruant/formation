import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export default function(tweet) {

  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  textDiv.textContent = tweet.text;
  dateDiv.textContent = moment(tweet.created_at, 'ddd MMM DD HH:mm:ss Z YYYY').fromNow();

  li.append(textDiv);
  li.append(dateDiv);

  return li;
}
