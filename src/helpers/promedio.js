export function calcularPromedioValoraciones(excursiones, idExcursion) {
    let sumaValoraciones = 0;
    let contadorValoraciones = 0;

    for (let i = 0; i < excursiones.length; i++) {
        if (excursiones[i].excursion_id === idExcursion) {
            sumaValoraciones += excursiones[i].puntuacion;
            contadorValoraciones++;
        }
    }


    let promedio = contadorValoraciones > 0 ? sumaValoraciones / contadorValoraciones : 0;
    return { promedio, contadorValoraciones }
}