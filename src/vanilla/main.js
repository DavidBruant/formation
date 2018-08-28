import createOl from './createOl';
import { isFrenchTweet } from '../utils';
import fetchJson from '../fetchJson';

document.addEventListener('DOMContentLoaded', function(){

    fetchJson('https://raw.githubusercontent.com/iOiurson/formation/corrig%C3%A9/tweets.json')
    .then(function(tweets){
        let ol = createOl(tweets);
        document.body.append(ol);


        const filterButton = document.createElement('button');
        filterButton.textContent = 'to Fr';

        document.body.append(filterButton);

        let isFr = false;

        filterButton.addEventListener('click', () => {
          let newOl;

          if (isFr) {
            newOl = createOl(tweets);
            filterButton.textContent = 'to All';
          }
          else {
            newOl = createOl(tweets.filter(isFrenchTweet));
            filterButton.textContent = 'to Fr';
          }

          ol.replaceWith(newOl);
          ol = newOl;

          isFr = !isFr;
        });
    })
    .catch(function(e) {
      console.error(e);
    });
}, {once: true});
