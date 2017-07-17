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

var countPalavras = db.runCommand(
	{aggregate: "posts",
	 pipeline: [
		{$project: {palavras: {$split:["$tweet", " "]}}},
		{$unwind: {path: "$palavras"}},
		{$group: {_id:"$palavras", count:{$sum: 1}}}
	 ]}
);

printjson(countPalavras.result);

//TODO Query for "Negative" Tweets