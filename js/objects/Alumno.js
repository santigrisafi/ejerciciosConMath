class Alumno {
  nombreAlumno;
  apellidoAlumno;
  edadAlumno;

  constructor(name, lastName, age) {
    this.nombreAlumno = name;
    this.apellidoAlumno = lastName;
    this.edadAlumno = age;
  }

  get nombreAlumno() {
    return this.nombreAlumno;
  }

  get apellidoAlumno() {
    return this.apellidoAlumno;
  }

  get edadAlumno() {
    return this.edadAlumno;
  }

  set nombreAlumno(name) {
    return (this.nombreAlumno = name);
  }

  set apellidoAlumno(lastName) {
    return (this.apellidoAlumno = lastName);
  }

  set edadAlumno(age) {
    return (this.edadAlumno = age);
  }
}
