// Menubar
function linkhome() {
	window.location.href = "https://www.burysurf.com/index.html";
}
function linkblog() {
	window.location.href = "https://www.burysurf.com/blog.html";
}
function linkvlog() {
	window.location.href = "https://www.burysurf.com/vlog.html";
}
function linksobre() {
	window.location.href = "https://www.burysurf.com/sobre.html";
}
// Function to open the popup
function openPopup1() {
	var iframeSrc = './molhe.html';
	var popupWindow = window.open('', 'PopupWindow', 'width=800,height=600');
	var iframe = document.createElement('iframe');
	iframe.src = iframeSrc;
	iframe.width = '100%';
	iframe.height = '100%';
	iframe.frameBorder = '0';
	popupWindow.document.body.appendChild(iframe);
}
function openPopup2() {
	var iframeSrc = './ilha.html';
	var popupWindow = window.open('', 'PopupWindow', 'width=800,height=600');
	var iframe = document.createElement('iframe');
	iframe.src = iframeSrc;
	iframe.width = '100%';
	iframe.height = '100%';
	iframe.frameBorder = '0';
	popupWindow.document.body.appendChild(iframe);
}
// Data
	const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
	const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
	const dataAtual = new Date();
	const diaDaSemana = diasDaSemana[dataAtual.getDay()];
	const diaDoMes = dataAtual.getDate();
	const mes = meses[dataAtual.getMonth()];
	const dataFormatada = `${diaDaSemana}, ${diaDoMes} de ${mes}`;
	document.getElementById("data").textContent = dataFormatada;