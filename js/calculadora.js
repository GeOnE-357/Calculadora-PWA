//version 0.0.1

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


const resolver=()=>{

		if(ultimo==false)
			{
				calculo_pantalla.innerHTML=borrarUltimoCaracter(calculo_pantalla.innerHTML);
				calculo_vector=borrarUltimoCaracter(calculo_vector);
				calculo_vector=borrarUltimoCaracter(calculo_vector);
				calculo_vector=borrarUltimoCaracter(calculo_vector);
				ultimo=true;
			}

		if(calculo_vector.includes(" "))
			{
				calculo_vector=calculo_vector.split(" ");
				let sumas=[];
				let restas=[];
				let multis=[];
				let divis=[];
				let total;
				
				//Busca todas las multiplicaciones que hay en el vector de calculos.
				for(let num in calculo_vector)
					{
						if(calculo_vector[num]=="x")
							{
								multis.push(Number(num));
							}	
					}

				//Los invierte para poder empezar a solucionar desde el ultimo, para poder borrarlos una vez resueltos.
				multis=multis.reverse()

				if(multis.length>0)
					{
						for(let op in multis)
							{
								//Multiplica el numero anterior a la operacion, con el posterior de la operacion.
								calculo_vector[multis[op]-1]=Number(calculo_vector[multis[op]-1])*Number(calculo_vector[multis[op]+1]);
								//Elimina la posicion de la operacion y el numero posterior.
								calculo_vector.splice(multis[op]+1,1);
								calculo_vector.splice(multis[op],1);
							}
						console.log(calculo_vector);
					}

				//Busca todas las divisiones que hay en el vector de calculos.
				for(let num in calculo_vector)
					{
						if(calculo_vector[num]=="/")
							{
								divis.push(Number(num));
							}	
					}

				//Los invierte para poder empezar a solucionar desde el ultimo, para poder borrarlos una vez resueltos.
				divis=divis.reverse()

				if(divis.length>0)
					{
						for(let op in divis)
							{
								//Multiplica el numero anterior a la operacion, con el posterior de la operacion.
								calculo_vector[divis[op]-1]=Number(calculo_vector[divis[op]-1])/Number(calculo_vector[divis[op]+1]);
								//Elimina la posicion de la operacion y el numero posterior.
								calculo_vector.splice(divis[op]+1,1);
								calculo_vector.splice(divis[op],1);
							}
						console.log(calculo_vector);
					}

				//Busca todas las sumas que hay en el vector de calculos.
				for(let num in calculo_vector)
					{
						if(calculo_vector[num]=="+")
							{
								sumas.push(Number(num));
							}	
					}

				//Los invierte para poder empezar a solucionar desde el ultimo, para poder borrarlos una vez resueltos.
				sumas=sumas.reverse()

				if(sumas.length>0)
					{
						for(let op in sumas)
							{
								//Multiplica el numero anterior a la operacion, con el posterior de la operacion.
								calculo_vector[sumas[op]-1]=Number(calculo_vector[sumas[op]-1])+Number(calculo_vector[sumas[op]+1]);
								//Elimina la posicion de la operacion y el numero posterior.
								calculo_vector.splice(sumas[op]+1,1);
								calculo_vector.splice(sumas[op],1);
							}
						console.log(calculo_vector);
					}

				//Busca todas las restas que hay en el vector de calculos.
				for(let num in calculo_vector)
					{
						if(calculo_vector[num]=="-")
							{
								restas.push(Number(num));
							}	
					}

				//Los invierte para poder empezar a solucionar desde el ultimo, para poder borrarlos una vez resueltos.
				restas=restas.reverse()

				if(sumas.length>0)
					{
						for(let op in restas)
							{
								//Multiplica el numero anterior a la operacion, con el posterior de la operacion.
								calculo_vector[restas[op]-1]=Number(calculo_vector[restas[op]-1])-Number(calculo_vector[restas[op]+1]);
								//Elimina la posicion de la operacion y el numero posterior.
								calculo_vector.splice(restas[op]+1,1);
								calculo_vector.splice(restas[op],1);
							}
						console.log(calculo_vector);
					}
			}

		resultado.innerHTML=calculo_vector;
		calculo_vector="";	
	};



//==================== FUNCIONES GENERALES ====================



//funcion borrar contenido de "calculo_pantalla".
const borrarTodo=()=>{
	calculo_pantalla.innerHTML="";
	calculo_vector="";
	resultado.innerHTML="";
	};


const borrarUltimoCaracter=(texto)=>{return texto.substring(0, texto.length - 1);};