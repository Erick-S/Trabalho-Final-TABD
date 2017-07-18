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

//Should work with MongoDB 3.4+
/*
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
*/

map = function() {
    var array = this.tweet.split(' ');
    emit(this.tweet, array);
}

reduce = function(key, values) {
    return values;
}

result = db.runCommand({
		"query": {owner: "user7", tweet:{$in:positivos}},
        "mapreduce" : "posts", 
        "map" : map,
        "reduce" : reduce,
        "out" : "resultado_opinioes-positivas-Vivoemrede"
});
