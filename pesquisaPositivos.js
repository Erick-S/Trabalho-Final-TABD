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

var cursor = db.posts.find({owner:"user7", tweet:{$in: positivos}});
var count = db.posts.find({owner:"user7", tweet:{$in: positivos}}).count();

cursor.forEach(printjson);
print(count);