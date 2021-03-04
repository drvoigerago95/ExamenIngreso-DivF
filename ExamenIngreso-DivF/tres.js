function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let obraSocial;
	let temperatura;	
	let seguir;
	let contPasajeros = 0;
	let contPami=0;
	let contadorPersonaMayorOsde=0;
	let pamijovenEdad = 0;
	let pamijovenNombre;
	let pamijovenTemp;



	do{
		
		nombre = prompt("Ingrese nombre: ");
		edad = (parseInt(prompt("Ingrese edad: ")));
		while(edad <= 17 || isNaN(edad)){
			edad= (parseInt(prompt("Error. Ingrese edad válida: (tiene que ser mayor) ")));
		}

		sexo = prompt("Ingrese sexo f/m/nb: ");
		while(sexo !="f" && sexo!="m"&& sexo !="nb"){
			sexo=prompt("Error. ingrese un dato válido. ('f', 'm' o 'nb'");
		}
		obraSocial = prompt("Ingrese obraSocial: ('PAMI', 'OSDE' o 'Otras') ");
		while(obraSocial !="PAMI" && obraSocial!="OSDE"&& obraSocial !="Otras"){
			obraSocial=prompt("Error. ingrese su Obra Social nuevamente. ('PAMI', 'OSDE' o 'Otras')");
		}
		temperatura = (parseFloat(prompt("Ingrese temperatura: ")));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura= (parseFloat(prompt("Error. Ingrese una temperatura válida: ")));
		}

		if(obraSocial=="OSDE"&&edad>60){
			contadorPersonaMayorOsde++;
		}

		if(obraSocial=="PAMI" && sexo=="f" && edad>pamijovenEdad){
			pamijovenEdad=edad;
			pamijovenNombre=nombre;
			pamijovenTemp=temperatura;
		}
		if(obraSocial=="PAMI"){
			contPami++;
		}
		contPasajeros++;
		
		seguir=prompt("Desea seguir ingresando datos?: (coloque 'si' si lo desea) ");

		}while(seguir=="si");
		
	console.log("a) La cantidad de personas con OSDE de mas de 60 años es: " + );
	console.log("b) El nombre de la mujer de pami más joven es: " pamijovenNombre + " y tiene " + pamijovenTemp " de temperatura " );
	console.log("c) El viaje total sin descuento sale: " + (contPasajeros*600) );
	if((contPasajeros/2)<contPami){
		console.log("d) El precio total de los pasajes es: " + [(contPasajeros*600) - (contPasajeros*600/4)] );

	}
	

	}
		




