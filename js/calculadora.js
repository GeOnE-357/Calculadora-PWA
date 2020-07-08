//version 0.0.0

//"calculo_pantalla" es donde se muestra la operacin en pantalla.
let calculo_pantalla=document.getElementsByClassName("calculo")[0];

let calculo_vector="";

//"resultado" es donde se muestra el resultado en pantalla.
let resultado=document.getElementsByClassName("resultado")[0];

let historial=[];

let ultimo;

//funcion escribir numeros en "calculo_pantalla".
const escribirNumero=(entrada)=>{
	calculo_pantalla.innerHTML+=entrada;
	calculo_vector+=entrada;
	ultimo=true};

//funcion escribir operaciones en "calculo_pantalla".
const escribirOperacion=(entrada)=>{
	if(calculo_pantalla.innerHTML!="" || resultado.innerHTML!=""){
		if(ultimo==true)
			{
				calculo_vector+=" "+entrada+" ";
				calculo_pantalla.innerHTML=calculo_vector.replace(/[" "]/g, "");
				ultimo=false;		
			}
		}
	};

/*funcion resolver operaciones pre-armada escrita en "calculo_pantalla".
const resolver=()=>{
		if(isNaN(calculo_pantalla.innerHTML[calculo_pantalla.innerHTML.length-1]))
			{
				let cambio = calculo_pantalla.innerHTML[calculo_pantalla.innerHTML.length-1];
				calculo_pantalla.innerHTML=calculo_pantalla.innerHTML.replace(cambio, "");
				ultimo=true;
			}
		historial.push(calculo_pantalla.innerHTML);
		let total = calculo_pantalla.innerHTML;
		total=total.replace(/[x]/g, "*");
		total = eval(total);
		resultado.innerHTML=total;
	};*/

const resolver=()=>{
		
		if(ultimo==false)
			{
				calculo_pantalla.innerHTML=borrarUltimoCaracter(calculo_pantalla.innerHTML);
				calculo_vector=calculo_vector.split(" ")
				calculo_vector.pop();
				calculo_vector.pop();
				ultimo=true;
			}
	};



//==================== FUNCIONES GENERALES ====================



//funcion borrar contenido de "calculo_pantalla".
const borrar=()=>{
	calculo_pantalla.innerHTML="";
	calculo_vector="";
	resultado.innerHTML="";
	};


const borrarUltimoCaracter=(texto)=>{return texto.substring(0, calculo_pantalla.innerHTML.length - 1);};