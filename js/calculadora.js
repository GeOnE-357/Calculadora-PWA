//version 0.0.0

//"calculo" es donde se muestra la operacin en pantalla.
let calculo=document.getElementsByClassName("calculo")[0];

//"resultado" es donde se muestra el resultado en pantalla.
let resultado=document.getElementsByClassName("resultado")[0];

let historial=[];

let ultimo;

//funcion escribir numeros en "calculo".
const escribirNumero=(entrada)=>{calculo.innerHTML+=entrada; ultimo=true};

//funcion escribir operaciones en "calculo".
const escribirOperacion=(entrada)=>{
	if(calculo.innerHTML!="" || resultado.innerHTML!=""){
		if(ultimo==true)
			{
				calculo.innerHTML+=entrada;
				ultimo=false;		
			}
		else
			{
				let cambio = calculo.innerHTML[calculo.innerHTML.length-1];
				calculo.innerHTML=calculo.innerHTML.replace(cambio, entrada);
			}
		}
	};

//funcion resolver operaciones escrita en "calculo".
const resolver=()=>{
		if(isNaN(calculo.innerHTML[calculo.innerHTML.length-1]))
			{
				let cambio = calculo.innerHTML[calculo.innerHTML.length-1];
				calculo.innerHTML=calculo.innerHTML.replace(cambio, "");
				ultimo=true;
			}
		historial.push(calculo.innerHTML);
		let total = calculo.innerHTML;
		total=total.replace(/[x]/g, "*");
		total = eval(total);
		resultado.innerHTML=total;
	};

//TemplateString para mostrar informacion : console.log(`valor ingresado:${entrada}`);

//funcion borrar contenido de "calculo".
const borrar=()=>{calculo.innerHTML=""; resultado.innerHTML="";};

