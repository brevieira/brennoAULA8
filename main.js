let lista = [
	{
		nome:'brenno',
		polo:'prazeres',
		idade:'17 anos'
	},
	{
		nome:'jeziele',
		polo:'prazeres',
		idade:'33 anos'
	},
	{
		nome:'cicero',
		polo:'prazeres',
		idade:'24 anos'
	},
	{
		nome:'cassio',
		polo:'prazeres',
		idade:'21 anos'
	},
	{
		nome:'kamile',
		polo:'prazeres',
		idade:'16 anos'
	},
	{
		nome:'mateus',
		polo:'prazeres',
		idade:'20 anos'
	},
	{
		nome:'douglas',
		polo:'prazeres',
		idade:'19 anos'
	},
	{
		nome:'priscila',
		polo:'prazeres',
		idade:'35 anos'
	}
]
let NOME = document.getElementById('um')
let POLO = document.getElementById('dois')
let IDADE = document.getElementById('tres')
let um = document.getElementById('NN')
let dois = document.getElementById('POLO')
let tres = document.getElementById('IDADE')

um.addEventListener('click', function(){
console.log(lista)
 	NOME.innerHTML = lista[0].nome;
 	IDADE.innerHTML = lista[0].idade;
	POLO.innerHTML = lista[0].polo;
})
