var TwitterPackage = require('twitter');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/TrabalhoFinal');
mongoose.connect('mongodb://user7:123456@ds139942.mlab.com:39942/kopteste');

var rtExpression = /^RT/;

var secret = {
	consumer_key: 'ndm4ksRNPZumU1fAMFayqoDE9',
	consumer_secret: 'SCb88JAMrPggmkynn7nfpCRNDLlSldlAhshne8kPczCtfugM21',
	access_token_key: '753721216318464000-DY3dG6BwKbnNEkpQw5A7SkIQHONmEOU',
	access_token_secret: 'DQnPN7k38hM9RPCzVmqExWM0hzEky8NtKZs2jhj5oG3o8'
}

var Post = mongoose.model('Post', {
	criado_em: { type: Date },
	tweet: { type: String },
	em_resposta_a: { status_id: { type: String }, },
	lingua: { type: String },
	hashtags: [ { _id:false, text: {type: String} } ],
	mencoes_a_usuarios: [ { _id:false, nome_de_tela: {type: String}, id_str: {type: String} }]
});

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', { track: '@Vivoemrede' }, function (stream) {
	stream.on('data', function (tweet) {
		//Vars for data
		var hashtags = [];
		var userMentions = [];
		var text;
		var rt;
		var truncated = tweet.truncated;
		
		//Logs tweet text
		console.log(tweet.created_at);
		console.log(tweet.user.screen_name);
		
		//Tests if tweet is truncaded or not
		if(("extended_tweet" in tweet)){
			text = tweet.extended_tweet.full_text;
			console.log(tweet.extended_tweet.full_text);
		}else{
			text = tweet.text;
			console.log(tweet.text);
		}
		
		//Tests if is retweet or not
		if(rtExpression.test(tweet.text)){
			rt = true;
			return;
		}else{
			rt = false;
		}
		
		//Saves hashtags and mentions to arrays
		tweet.entities.hashtags.forEach(function(hashtag, index){
			var thisHashtag = {text: hashtag.text}
			hashtags.push(thisHashtag);
		});
		tweet.entities.user_mentions.forEach(function(mention, index){
			var thisMention = {nome_de_tela: mention.screen_name, id_str: mention.id_str}
			userMentions.push(thisMention);
		});
		
		//Saves tweet with these parameters
		var post = new Post( {
			criado_em: tweet.created_at,
			tweet: text,
			em_resposta_a: {
				status_id: tweet.in_reply_to_status_id_str, 
			},
			lingua: tweet.lang,
			hashtags: hashtags,
			user_mentions: userMentions
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
