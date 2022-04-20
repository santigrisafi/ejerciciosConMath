let listStudents = () => {
  let alumnos = [];
  let nameAlumnos = ["Sephiroth", "Geralt", "Vernon"];
  let apellidosAlumnos = ["Crescent", "De Rivia", "Roche"];
  for (let i = 0; i < 3; i++) {
    let alumno = new Alumno();
    alumno.nombreAlumno =
      nameAlumnos[
        Number(Math.floor(Math.random() * (nameAlumnos.length - 0) + 0))
      ];
    alumno.apellidoAlumno =
      apellidosAlumnos[
        Number(Math.floor(Math.random() * (apellidosAlumnos.length - 0) + 0))
      ];
    alumno.edadAlumno = parseInt(Math.floor(Math.random() * (40 - 18) + 18));
    alumnos.push(alumno);
  }
  return alumnos;
};

let getMayor = (students) => {
  let mayor = 0;
  for (let i = 0; i < students.length; i++) {
    if (i === 0) {
      mayor = students[0].edadAlumno;
    }
    if (students[i].edadAlumno > mayor) {
      mayor = students[i];
    }
  }
  return mayor;
};

let getAlumnoMayor = () => {
  let students = listStudents();
  let mayor = getMayor(students);
  let cont = 0;
  for (let student of students) {
    document.write(
      `
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      </head>
      <body>
        <br>
        <table class="table dark-table">
          <thead>
          <tr>
              <th>Id Alumno </th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${cont++}</td>
              <td>${student.nombreAlumno}</td>
              <td>${student.apellidoAlumno}</td>
              <td>${student.edadAlumno}</td>
            </tr>
          </tbody>
        </table>
      </body>
      `
    );
  }

  alert(
    "El Alumno con la mayor edad es " +
      mayor.nombreAlumno +
      " " +
      mayor.apellidoAlumno +
      " y tiene " +
      mayor.edadAlumno +
      " años "
  );
};
