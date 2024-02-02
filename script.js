function abrirtce(){
	const tce = document.getElementById('janelatce')
	tce.classList.add('abrir')

	tce.addEventListener('click',(e) => {
		if(e.target.id == 'fechartce' || e.target.id == 'janelatce'){
			tce.classList.remove('abrir')
		}
	}) 
}

function abrirpwb(){
	const pwd = document.getElementById('janelapwb')
	pwd.classList.add('abrir')

	pwd.addEventListener('click',(e) => {
		if(e.target.id == 'fecharpwb' || e.target.id == 'janelapwb'){
			pwd.classList.remove('abrir')
		}
	}) 
}

function abririnf(){
	const inf = document.getElementById('janelainf')
	inf.classList.add('abrir')

	inf.addEventListener('click',(e) => {
		if(e.target.id == 'fecharinf' || e.target.id == 'janelainf'){
			inf.classList.remove('abrir')
		}
	}) 
}

function abrirexc(){
	const exc = document.getElementById('janelaexc')
	exc.classList.add('abrir')

	exc.addEventListener('click',(e) => {
		if(e.target.id == 'fecharexc' || e.target.id == 'janelaexc'){
			exc.classList.remove('abrir')
		}
	}) 
}