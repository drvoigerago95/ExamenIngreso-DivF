
function mostrar()
{
	let nombre;
	let sexo;
	let situacionLab;
	let cantidadMaterias;
  let notapromedio;
  let edad;
	let seguir; 
	let mejorPromedio;
  let mejorPromedioNombre;
	let flag = 1;
  let mejorPromedioNoTrabaja;
  let viejoEstu=0;
  let viejoEstuNombre;
	let promedioNotaBuscando;
	let promedioNotaTrabajando;
	let promedioNotaEst;
	let contadorBuscando = 0;
	let contadorTrabajando=0;
	let contadorEstudiante=0;
  let contadorEstTot=0;
  let acumuladorNotaBuscando=0;
  let acumuladorNotaTrabajando=0;
  let acumuladorNotaNotrabaja=0;
  let menosMaterias;
  let menosMateriasNombre;
  let menosMateriasEdad;
  let menosMateriasFlag=1;

	do{
		
		nombre = prompt("Ingrese nombre: ");
		edad = (parseInt(prompt("Ingrese edad: ")));
		while(edad <= 0 || isNaN(edad)){
			edad= (parseInt(prompt("Error. Ingrese edad válida: ")));
		}

		sexo = prompt("Ingrese sexo f/m/nb: ");
		while(sexo !="f" && sexo!="m"&& sexo !="nb"){
			sexo=prompt("Error. ingrese un dato válido. ('f', 'm' o 'nb'");
		}
		situacionLab = prompt("Ingrese situación laboral: ('buscando' , 'trabajando' o 'solo estudiante') ");
		while(situacionLab !="buscando" && situacionLab!="trabajando" && situacionLab !="solo estudiante"){
			situacionLab=prompt("Error. Ingrese su situación nuevamente. ('buscando' , 'trabajando' o 'solo estudiante')");
		}
		cantidadMaterias = (parseInt(prompt("Ingrese la cantidad de materias que tiene aprobadas: ")));
		while((cantidadMaterias <= 0 && cantidadMaterias>=10) || isNaN(cantidadMaterias)){
			cantidadMaterias= (parseInt(prompt("Error. Debe ser entre cero y diez: ")));
		}
    notapromedio = (parseInt(prompt("Ingrese la nota promedio: ")));
		while((notapromedio <= 0 && notapromedio>=10) || isNaN(notapromedio)){
			notapromedio= (parseInt(prompt("Error. Debe ser entre cero y diez: ")));
		}
		
		if (situacionLab=="solo estudiante" || situacionLab=="buscando"){
      if(flag || notapromedio>mejorPromedio){
        mejorPromedio=notapromedio;
        mejorPromedioNombre=nombre;
        flag=0;
      }
    }
    
		
		if (situacionLab=="solo estudiante"){
			if(edad>viejoEstu){
        viejoEstu=edad
        viejoEstuNombre=nombre
      }
		}
    switch(situacionLab)
    {
      case "buscando":
        contadorBuscando++;
        acumuladorNotaBuscando=acumuladorNotaBuscando+notapromedio;
        contadorEstTot++;
        break;
      case "trabajando":
        contadorTrabajando++;
        acumuladorNotaTrabajando=acumuladorNotaTrabajando+notapromedio;
        contadorEstTot++;
        break;
      case "solo estudiante":
        contadorEstudiante++;
        acumuladorNotaNotrabaja=acumuladorNotaNotrabaja+notapromedio;
        contadorEstTot++;
        break;
    }
    if(situacionLab=="buscando" && (cantidadMaterias>menosMaterias || menosMateriasFlag==1){
      menosMaterias=cantidadMaterias;
      menosMateriasEdad=edad;
      menosMateriasNombre=nombre;
    }
      
    
    
    
		seguir=prompt("Desea seguir ingresando datos?: (coloque 'si' si lo desea) ");
	
	}while(seguir=="si");

  console.log("a) El nombre del mejor promedio que no de los que tarbajan o estan buscando es: " + mejorPromedioNombre);
  console.log("b) El nombre del alumno más viejo y estudiante es: " + viejoEstuNombre);
  console.log("c) El promedio de nota por situación laboral en buscando es : " + acumuladorNotaBuscando/contadorBuscando );
  console.log("El promedio de nota de los que están trabajando es : " + acumuladorNotaTrabajando/contadorTrabajando );
  console.log("El promedio de nota de los solo estudiantes es : " + acumuladorNotaNotrabaja/contadorEstudiante );
  console.log("d) El nombre del que menos cursa es: " + menosMateriasNombre + " de " + menosMateriasEdad + " años.");


}

