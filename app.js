var TwitterPackage = require('twitter');

var secret = {
  consumer_key: '@ apps.twitter.com -> Trabalho Final TABD',
  consumer_secret: '@ apps.twitter.com -> Trabalho Final TABD',
  access_token_key: '@ apps.twitter.com -> Trabalho Final TABD',
  access_token_secret: '@ apps.twitter.com -> Trabalho Final TABD'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@RealDonaldTrump'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
