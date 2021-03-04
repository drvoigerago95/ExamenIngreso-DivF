function mostrar( )
{
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;	
	let promedioAlc;
	let promedioIac;
	let promedioQuat;
	let detergenteBarat;
	let flagD=1;
	let fabricanteCaro;
	let categoriaCaro;
	let flag=1;
	let preciomMayor;
	let contadorAlc = 0;
	let contadorIac = 0;
	let contadorQuat = 0;
	let contadorDesinfec = 0;
	let contadorBacte=0;
	let contadorDeter=0;
	let cantidadTotal=0;
	let masCantidad;
	let cantidadDetBarat;
	for (let i=0; i < 5; i++){
		tipo = prompt("Ingrese tipo: 'alcohol', 'iac' o 'quat'");
		while( tipo != "alcohol" && tipo != "iac" && tipo != "quat" ){
			tipo = prompt("Error, tipo inválido. Por favor que sea un tipo válido: 'alcohol', 'iac' o 'quat'");
		}
		
		precio = parseFloat(prompt("Ingrese	precio: entre $100 y $300"));
		while( precio < 100 || precio > 300 || isNaN(precio) ){
			precio = prompt("Error, ingrese un precio válido: (entre $100 y $300)");
		}
		
		cantidad = parseInt(prompt("Ingrese	cantidad: (máximo 1000)"));
		while( cantidad < 1000 && cantidad > 0 && isNaN(cantidad) ){
			cantidad = prompt("Error, ingrese una cantidad válida. Máximo 1000.)");
		}
		
		categoria = prompt("Ingrese categoria: 'desinfectante', 'bactericida', 'detergente'");
		while( categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente" ){
			categoria = prompt("Error, categoría inválida. Ingrese una de las siguientes'desinfectante', 'bactericida', 'detergente");
		}
		fabricante = prompt("Ingrese fabricante:");
		
		if(flag == 1 || precio > preciomMayor  ){
			preciomMayor=precio;
			fabricanteCaro=fabricante;
			categoriaCaro=categoria;
			flag=0;
		}
		
		switch(tipo)
			{
				case "alcohol":
					contadorAlc++;
					break;
				case "iac":
					contadorIac++;
					break;
				case "quat":
					contadorQuat++;
					break;
			}
		switch(categoria)
			{
			case "desinfectante":
				contadorDesinfec = contadorDesinfec + cantidad;					
				break;
			case "bactericida":
				contadorBacte = contadorBacte + cantidad;					
				break;
			case "detergente":
				if(flagD=1 || precio > detergenteBarat ){
					detergenteBarat=precio;
				}
				contadorDeter = contadorDeter + cantidad;					
				break;
			}
		
		if(precio<=200 && categoria=="detergente"){
			cantidadDetBarat=cantidadDetBarat+cantidad;
		}
		
		cantidadTotal=cantidadTotal+cantidad;
	}
	if(contadorDesinfec>contadorBacte&&contadorDesinfec>contadorAlc){
		masCantidad="Desinfercante";
	}else if(contadorBacte>contadorAlc){
		masCantidad="Bactericida";
	}else{
		masCantidad="Detergente";
	}
	console.log("A.El promedio de cantidad por tipo de producto en el caso del alcohol es" + (cantidadTotal * contadorAlc / 100) "% \n En el caso del iac es " + (cantidadTotal * contadorIac /100) + "% \n En el caso del quat es" + (cantidadTotal * contadorQuat / 100)  );
	console.log("B. La categoría con más cantidad de unidades es " + masCantidad);
	console.log("C. Hay " + cantidadDetBarat + " unidades de detergente a menos de 200" );
	console.log("D.El fabricante de producto más caro es " + fabricanteCaro + " fabricante de " + categoriaCaro);
	
}

