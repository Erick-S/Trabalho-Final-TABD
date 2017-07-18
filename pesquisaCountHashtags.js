var countTags = db.runCommand(
	{aggregate: "posts",
	 pipeline: [
		{$match: {owner:"user7"}},
		{$project: {hashtags: 1}},
		{$unwind: "$hashtags"},
		{$group: {_id: "$hashtags", count: {$sum: 1}}}
	]}
);

printjson(countTags.result);