/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //Aquí asigno las variables que compondrán mi generador
  let who = [
    "Mi madre",
    "Mi abuela",
    "Un viejo",
    "Michael Jackson",
    "MoureDev",
    "Gastón",
    "Diego"
  ];
  let action = [
    "se comió",
    "quemó",
    "rompió",
    "lanzó",
    "embadurnó",
    "lamió",
    "acarició"
  ];
  let what = ["mi trabajo", "mi trasero", "mi almuerzo", "mis calzoncillos"];
  let how = ["lentamente", "suavemente", "bruscamente", "a conciencia"];
  let when = [
    "antes de clase",
    "hace unos minutos",
    "cuando salí del trabajo",
    "mientras me comía un plato de lentejas",
    "mientras escuchaba música"
  ];
  //Una vez han sido creadas las variables es necesario formar la función que randomice la excusa
  function excusa() {
    let persona = who[Math.floor(Math.random() * who.length)];
    let accion = action[Math.floor(Math.random() * action.length)];
    let que = what[Math.floor(Math.random() * what.length)];
    let como = how[Math.floor(Math.random() * how.length)];
    let cuando = when[Math.floor(Math.random() * when.length)];
    //Se realiza el llamado a la función formando así la frase, habría otra opción que sería con $ y ````
    // return who2 + " " + action2 + " " + what2 + " " + how2 + " " + when2;
    return `${persona} ${accion} ${que} ${como} ${cuando}`;
  }
  function recargarPagina() {
    // Puedes usar location.reload() o location.reload(true)
    location.reload(); // Utiliza esta línea si deseas recargar la página ignorando la caché del navegador
  }
  //Se utiliza la propiedad javascript de document.getelementbyid para hacer el llamado al archivo html donde se configura la excusa
  //Siempre debe ir acompañado de la propiedad .innerHTML
  document.getElementById("excuse").innerHTML = excusa();
};
