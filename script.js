/*Tabela - Atividades Empresa01*/
function abrira(){
	const epa = document.getElementById('janelaepa')
	epa.classList.add('abrir')

	epa.addEventListener('click',(e) => {
		if(e.target.id == 'fecharepa' || e.target.id == 'janelaepa'){
			epa.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Atividades Empresa02*/
function abrirb(){
	const epb = document.getElementById('janelaepb')
	epb.classList.add('abrir')

	epb.addEventListener('click',(e) => {
		if(e.target.id == 'fecharepb' || e.target.id == 'janelaepb'){
			epb.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Atividades Empresa03*/
function abrirc(){
	const epc = document.getElementById('janelaepc')
	epc.classList.add('abrir')

	epc.addEventListener('click',(e) => {
		if(e.target.id == 'fecharepc' || e.target.id == 'janelaepc'){
			epc.classList.remove('abrir')
		}
	}) 
}


/*Tabela - Formação Técnica*/
function abrirtce(){
	const tce = document.getElementById('janelatce')
	tce.classList.add('abrir')

	tce.addEventListener('click',(e) => {
		if(e.target.id == 'fechartce' || e.target.id == 'janelatce'){
			tce.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Power BI Essencial*/
function abrirpwb(){
	const pwd = document.getElementById('janelapwb')
	pwd.classList.add('abrir')

	pwd.addEventListener('click',(e) => {
		if(e.target.id == 'fecharpwb' || e.target.id == 'janelapwb'){
			pwd.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Informática Básica*/
function abririnf(){
	const inf = document.getElementById('janelainf')
	inf.classList.add('abrir')

	inf.addEventListener('click',(e) => {
		if(e.target.id == 'fecharinf' || e.target.id == 'janelainf'){
			inf.classList.remove('abrir')
		}
	}) 
}


/*Tabela - Cursos - html*/
function abrirhtml(){
	const html = document.getElementById('janelahtml')
	html.classList.add('abrir')

	html.addEventListener('click',(e) => {
		if(e.target.id == 'fecharhtml' || e.target.id == 'janelahtml'){
			html.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Cursos - Excel*/
function abrirexc(){
	const exc = document.getElementById('janelaexc')
	exc.classList.add('abrir')

	exc.addEventListener('click',(e) => {
		if(e.target.id == 'fecharexc' || e.target.id == 'janelaexc'){
			exc.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Cursos - Word*/
function abrirwrd(){
	const wrd = document.getElementById('janelawrd')
	wrd.classList.add('abrir')

	wrd.addEventListener('click',(e) => {
		if(e.target.id == 'fecharwrd' || e.target.id == 'janelawrd'){
			wrd.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Cursos - Assistente Administrativo*/
function abrirass(){
	const ass = document.getElementById('janelaass')
	ass.classList.add('abrir')

	ass.addEventListener('click',(e) => {
		if(e.target.id == 'fecharass' || e.target.id == 'janelaass'){
			ass.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Cursos - Office-boy*/
function abririad(){
	const iad = document.getElementById('janelaiad')
	iad.classList.add('abrir')

	iad.addEventListener('click',(e) => {
		if(e.target.id == 'fechariad' || e.target.id == 'janelaiad'){
			iad.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Cursos - Letramento Digital*/
function abrirltd(){
	const ltd = document.getElementById('janelaltd')
	ltd.classList.add('abrir')

	ltd.addEventListener('click',(e) => {
		if(e.target.id == 'fecharltd' || e.target.id == 'janelaltd'){
			ltd.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Cursos - Algoritmo*/
function abriralt(){
	const alt = document.getElementById('janelaalt')
	alt.classList.add('abrir')

	alt.addEventListener('click',(e) => {
		if(e.target.id == 'fecharalt' || e.target.id == 'janelaalt'){
			alt.classList.remove('abrir')
		}
	}) 
}

/*Tabela - Cursos - Balconista de Farmácia*/
function abrirbf(){
	const bf = document.getElementById('janelabf')
	bf.classList.add('abrir')

	bf.addEventListener('click',(e) => {
		if(e.target.id == 'fecharbf' || e.target.id == 'janelabf'){
			bf.classList.remove('abrir')
		}
	}) 
}
