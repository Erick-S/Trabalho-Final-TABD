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

var countPositivo = db.posts.find({owner:"user7", tweet:{$in: positivos}}).count();

var countNegativo = db.posts.find({owner:"user7", tweet:{$in: negativos}}).count();

print("Positivos: "+countPositivo+"\nNegativos: "+countNegativo);