let alumnosList = () => {
  let alumnos = [];
  for (let i = 0; i < 3; i++) {
    let alumno = new Alumno();
    alumno.nombreAlumno = prompt("Ingrese el nombre del alumno " + i);
    alumno.edadAlumno = parseInt(prompt("Ingrese la edad del alumno " + i));
    alumnos.push(alumno);
  }
  return alumnos;
};

let getMayorAlumno = (alumnos) => {
  return Math.max.apply(
    Math,
    alumnos.map((alumno) => alumno.edadAlumno)
  );
};

let excecuteEj = () => {
  let listAlumnos = alumnosList();
  document.write(
    `El alumno con la mayor edad la cual es ${getMayorAlumno(
      listAlumnos
    )} corresponde al nombre de ${findAlumno(
      listAlumnos,
      getMayorAlumno(listAlumnos))}`
  );
};

let findAlumno = (listAlumnos, age) => {
  let alumnoFinded = listAlumnos.find(
    (alumnoFind) => alumnoFind.edadAlumno === age
  );
  return alumnoFinded.nombreAlumno;
};
