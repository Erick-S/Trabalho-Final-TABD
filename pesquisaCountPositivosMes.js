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

var countPositivosMes = db.runCommand(
	{aggregate: "posts",
	 pipeline: [
		{$match: {owner:"user7", tweet:{$in: positivos}, criado_em:{$exists:true, $type:9}}},
		{$project: {mês: 1, criado_em: 1}},
		{$group: {_id: {mês:{$month:"$criado_em"}, opiniões:"positivas"}, 
		          count: {$sum: 1}}}
	]}
);

printjson(countPositivosMes.result);