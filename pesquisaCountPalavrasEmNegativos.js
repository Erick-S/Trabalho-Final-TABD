var negativos = [
		/cancelei/,
		/cancelar/,
		/decepcionada/,
		/decepcionado/,
		/processar/,
		/péssimo/,
		/pessimo/,
		/horrível/,
		/horrivel/,
		/vacilo/,
		/vacilou/,
		/odeio/,
		/odio/,
		/ódio/,
		/odeie/,
		/mudar de operadora/,
		/sem serviço/,
		/sem servico/,
		/sem sinal/,
		/sinal fraco/,
		/sinal caindo/,
		/não funciona/,
		/nao funciona/,
		/fora do ar/,
		/não aguento/,
		/nao aguento/,
		/palhaçada/,
		/palhacada/,
		/picaretagem/,
		/insuportável/,
		/insuportavel/,
		/irritante/,
		/sem solução/,
		/sem solucao/,
		/pior empresa/,
		/empresa ruim/,
		/péssima qualidade/,
		/pessima qualidade/,
		/qualidade ruim/,
		/qualidade horrível/,
		/qualidade horrivel/,
		/lixo/,
		/desgosto/,
		/atendimento péssimo/,
		/atendimento pessimo/,
		/atendimento ruim/,
		/atendimento horrível/,
		/atendimento horrivel/,
		/atendimento precário/,
		/atendimento precario/,
		/demoram/,
		/demora/
	];

//Should work with MongoDB 3.4+
/*
var countPalavras = db.runCommand(
	{aggregate: "posts",
	 pipeline: [
		{$match: {owner:"user7", tweet:{$in: negativos}}},
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
		"query": {owner: "user7", tweet:{$in:negativos}},
        "mapreduce" : "posts", 
        "map" : map,
        "reduce" : reduce,
        "out" : "resultado_opinioes-negativas-Vivoemrede"
});