const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario= document.querySelector('#formulario-tarjeta'),
    numeroTarjeta= document.querySelector('#tarjeta .numero'),
    nombreTarjeta= document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma= document.querySelector('#tarjeta .firma p'),
    mesTarjeta = document.querySelector('#tarjeta .mes'),
    yearTarjeta = document.querySelector('#tarjeta .year'),
    ccv = document.querySelector('#tarjeta .ccv');

//Voltear la tarjeta para ver el frente
const mostrarFrente= () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }
}

// Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

//Abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// Selecct del mes
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText= i;
    formulario.selectMes.appendChild(opcion);
}


// Select del año
const yearActual= new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText= i;
    formulario.selectYear.appendChild(opcion);
}

//  Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    //Elimina espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    // Espacio cada 4 numeros
    .replace(/([0-9]{4})/g, '$1 ' )
    // Elimina el ultimo espaciado
    .trim();

    numeroTarjeta.textContent= valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent= '#### #### #### ####'
        logoMarca.innerHTML = '';
    }

    if(valorInput[0] == 4){
        logoMarca.innerHTML= '';
        const imagen= document.createElement('img');
        imagen.src ='visa.png';
        logoMarca.appendChild(imagen);
    }
    else if (valorInput[0] == 5){
    logoMarca.innerHTML= '';
    const imagen= document.createElement('img');
    imagen.src ='mastercard.png';
    logoMarca.appendChild(imagen);
    }

    //Voltear la tarjeta para ver el frente
    mostrarFrente();
})

//Validacion del nombre
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput= e.target.value;

    formulario.inputNombre.value= valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent= valorInput;
    firma.textContent= valorInput;
    
    if(valorInput == ''){
        nombreTarjeta.textContent= 'PAULO LONDRA'
        logoMarca.innerHTML = '';
    }

    //Voltear la tarjeta para ver el frente
    mostrarFrente();
})

//Expiracion
formulario.selectMes.addEventListener('change', (e) => {
    mesTarjeta.textContent = e.target.value;

    // Poner ceros
    if (mesTarjeta.textContent == 1 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    }

    if (mesTarjeta.textContent == 2 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    } 

    if (mesTarjeta.textContent == 3 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    }

    if (mesTarjeta.textContent == 4 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= ce
        ro + numero
    }
    if (mesTarjeta.textContent == 5 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    }
    if (mesTarjeta.textContent == 6 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    }
    if (mesTarjeta.textContent == 7 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    }
    if (mesTarjeta.textContent == 8 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    }
    if (mesTarjeta.textContent == 9 ){
        let cero = '0';
        let numero = e.target.value;
        mesTarjeta.textContent= cero + numero
    }
    mostrarFrente();
});

formulario.selectYear.addEventListener('change', (e) => {
    yearTarjeta.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});