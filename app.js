var TwitterPackage = require('twitter');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TrabalhoFinal');

var secret = {
	consumer_key: '@ apps.twitter.com',
	consumer_secret: '@ apps.twitter.com',
	access_token_key: '@ apps.twitter.com',
	access_token_secret: '@ apps.twitter.com'
}

var Post = mongoose.model('Post', {
	created_at: { type: Date },
	user_screenName: { type: String },
	text: { type: String },
	retweeted: { type: Boolean },
	in_reply_to: {
		status_id: { type: String },
		screen_name: { type: String }
	},
	lang: { type: String }
});

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', { track: '@realDonaldTrump' }, function (stream) {
	stream.on('data', function (tweet) {
		//Logs tweet text
		console.log(tweet);
		//Saves tweet with these parameters
		var post = new Post( {
			created_at: tweet.created_at,
			user_screenName: tweet.user.screen_name,
			text: tweet.text,
			retweeted: tweet.retweeted,
			in_reply_to: {
				status_id: tweet.in_reply_to_status_id_str, 
				screen_name: tweet.in_reply_to_screen_name
			},
			lang: tweet.lang
		});
		post.save(function (err) {
			if (err) {
				console.log(err);
			}
			else {
				console.log('Success!');
			}
		});
	});

	stream.on('error', function (error) {
		console.log(error);
	});
});

//var Dog = mongoose.model('Dog', { name: String });

//var doge = new Dog( { name: 'Good Boy' } );
//doge.save(function (err) {
//	if (err) {
//		console.log(err);
//	} else {
//		console.log('bork');
//	}
//});
