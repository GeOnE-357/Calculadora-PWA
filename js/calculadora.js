//version 0.0.1

//"calculo_pantalla" es donde se muestra la operacin en pantalla.
let calculo_pantalla=document.getElementsByClassName("calculo")[0];

let calculo_vector="";

//"resultado" es donde se muestra el resultado en pantalla.
let resultado=document.getElementsByClassName("resultado")[0];

let historial=[];

let pasos=[];

let ultimo;

//funcion escribir numeros en "calculo_pantalla".
const escribirNumero=(entrada)=>{
	calculo_pantalla.innerHTML+=entrada;
	calculo_vector+=entrada;		
	ultimo=true};


const escribirParentesis=(entrada)=>
	{
		calculo_pantalla.innerHTML+=entrada;
		if(entrada=="(")
			{
				if(calculo_vector.length==0)
					{
						calculo_vector+=entrada+" ";		
					}
				else
					{
						calculo_vector+=" "+entrada+" ";
					}
			}
		else
			{
				if(calculo_vector.length>0)
					{
						calculo_vector+=" "+entrada;	
					}		
			}		
	}

//funcion escribir operaciones en "calculo_pantalla".
const escribirOperacion=(entrada)=>{
	if(calculo_pantalla.innerHTML!="" || resultado.innerHTML!=""){
		if(ultimo==true)
			{
				calculo_pantalla.innerHTML+=entrada;
				calculo_vector+=" "+entrada+" ";
				//calculo_pantalla.innerHTML=calculo_vector.replace(/[" "]/g, "");
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
				let sumas=[];
				let restas=[];
				let multis=[];
				let divis=[];
				let total;

				calculo_vector=calculo_vector.split(" ");
				historial.push(calculo_vector);
				proceso(calculo_vector);

				//Busca todas las divisiones que hay en el vector de calculos.
				calculo_vector=resolverOperacionesBasicas(calculo_vector,"/");
				calculo_vector=resolverOperacionesBasicas(calculo_vector,"x");
				calculo_vector=resolverOperacionesBasicas(calculo_vector,"-");
				calculo_vector=resolverOperacionesBasicas(calculo_vector,"+");
			}

		resultado.innerHTML=calculo_vector;
		calculo_vector="";	
	};


const proceso=(vector)=>
	{
		let texto=(String(vector));
		texto=texto.replace(/[","]/g, "");
		pasos.push(texto);	
	}

const resolverOperacionesBasicas = (vector, operacion) =>
	{
		let cuentas=[];
		for(let num in vector)
				{
					if(vector[num]==operacion)
						{
							cuentas.push(Number(num));
						}	
				}

			if(cuentas.length>0)
				{
					for(let op in cuentas)
						{
							//Multiplica el numero anterior a la operacion, con el posterior de la operacion.
							if(operacion=="/")
								{
									vector[cuentas[op]-1]=Number(vector[cuentas[op]-1])/Number(vector[cuentas[op]+1]);		
								}
							if(operacion=="x")
								{
									vector[cuentas[op]-1]=Number(vector[cuentas[op]-1])*Number(vector[cuentas[op]+1]);		
								}
							if(operacion=="-")
								{
									vector[cuentas[op]-1]=Number(vector[cuentas[op]-1])-Number(vector[cuentas[op]+1]);		
								}
							if(operacion=="+")
								{
									vector[cuentas[op]-1]=Number(vector[cuentas[op]-1])+Number(vector[cuentas[op]+1]);		
								}
							//Elimina la posicion de la operacion y el numero posterior.
							vector.splice(cuentas[op]+1,1);
							vector.splice(cuentas[op],1);
							if(cuentas.length>1)
								{
									for(let num in cuentas)
										{
											cuentas[num]=cuentas[num]-2;												
										}
								}
						}
					proceso(vector);
				}
			console.log(vector);
			return vector;
	}



//==================== FUNCIONES GENERALES ====================



//funcion borrar contenido de "calculo_pantalla".
const borrarTodo=()=>{
	calculo_pantalla.innerHTML="";
	calculo_vector="";
	resultado.innerHTML="";
	};

const borrarUltimoCaracter=(texto)=>{return texto.substring(0, texto.length - 1);};
