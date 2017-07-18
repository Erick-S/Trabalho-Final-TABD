var positivos = [
		/recomendo/,
		/parabéns/,
		/parabens/,
		/muito bom/,
		/muito bem/,
		/bom atendimento/,
		/atendimento bom/,
		/excelente/,
		/ótimo/,
		/otimo/,
		/ótima/,
		/otimo/,
		/resolvido/,
		/resolveu/,
		/qualidade boa/,
		/ótima qualidade/,
		/otima qualidade/,
		/boa qualidade/,
		/excelente qualidade/,
		/obrigado/,
		/obrigada/,
		/ajudam/,
		/feliz/,
		/encantado/
	];

var countPalavras = db.runCommand(
	{aggregate: "posts",
	 pipeline: [
		{$match: {owner:"user7", tweet:{$in: positivos}}},
		{$project: {palavras: {$split:["$tweet", " "]}}},
		{$unwind: {path: "$palavras"}},
		{$group: {_id:"$palavras", count:{$sum: 1}}}
	 ]}
);

printjson(countPalavras);

//TODO Query for "Positive" Tweets