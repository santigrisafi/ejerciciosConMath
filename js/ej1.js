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
  return alumnos.reduce((prev, current) =>
    +prev.edadAlumno > +current.edadAlumno ? prev : current
  );
};

let excecuteEj = () => {
  let oldestStudent = getMayorAlumno(alumnosList());
  document.write(
    `El alumno con la mayor edad la cual es ${oldestStudent.edadAlumno} corresponde al nombre de ${oldestStudent.nombreAlumno}`
  );
};

let findAlumno = (listAlumnos, age) => {
  let alumnoFinded = listAlumnos.find(
    (alumnoFind) => alumnoFind.edadAlumno === age
  );
  return alumnoFinded.nombreAlumno;
};
