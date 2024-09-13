let alumnos = [];

// función para agregar un alumno al array y mostrar en la tabla
function agregarAlumno() {
    // obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    // calcular el promedio
    let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    // agregar el alumno al array
    alumnos.push({
        nombre: nombre,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        promedio: promedio
    });

    // mostrar los alumnos en la tabla
    mostrarAlumnos();

    // limpiar el formulario
    document.getElementById('formulario').reset();
}

// función para mostrar los alumnos en la tabla
function mostrarAlumnos() {
    let tabla = document.getElementById('alumnos').getElementsByTagName('tbody')[0];
    tabla.innerHTML = ''; // limpiar la tabla antes de actualizarla

    alumnos.forEach((alumno) => {
        let fila = document.createElement('tr');

        // crear las celdas para cada dato
        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.nota1}</td>
            <td>${alumno.nota2}</td>
            <td>${alumno.nota3}</td>
            <td>${alumno.promedio}</td>
        `;

        tabla.appendChild(fila);
    });
}