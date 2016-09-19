function Tarea (titulo,fecha) {
    this.titulo = titulo;
    this.fecha = fecha;
}


function Agenda (propietario) {
    this.propietario = propietario;
    this.tareas = [];
}

Agenda.prototype.addTarea = function(t) {
	this.tareas.push(t);
};

//definicion de una variable global para almacenar una agenda.
var globalAgenda;


function iniciar(){
	var seccionCreacionAgenda = document.getElementById("creacionAgenda");
	var duenioAgenda= document.getElementById("duenioAgenda");
	var btnCrearAgenda= document.getElementById("btnCrearAgenda");

	var seccionDatoAgenda  = document.getElementById("datoAgenda");
	var nombreDuenioAgenda = document.getElementById("nombreDuenioAgenda");

	var bloqueGestionTareas= document.getElementById("bloqueGestionTareas");

	var listaTareas =document.getElementById("listaTareas");
	var btnAddTarea = document.getElementById("btnAddTarea");

	var inputTareaTitulo = document.getElementById("txtTitulo");
	var inputTareaHorario = document.getElementById("txtHora");

	seccionDatoAgenda.style.display="none";
	bloqueGestionTareas.style.display="none";
	seccionCreacionAgenda.style.display="";

	
	//cuando hace click en el boton crear agenda se crea la agenda del duenio en la variable global
	btnCrearAgenda.addEventListener('click',function(){
		globalAgenda = new Agenda(duenioAgenda.value);
		seccionDatoAgenda.style.display="";
		bloqueGestionTareas.style.display="";
		seccionCreacionAgenda.style.display="none";
		nombreDuenioAgenda.innerHTML=duenioAgenda.value;
	});

//cuando hace click en el boton crear agenda se crea la agenda del duenio en la variable global
	btnAddTarea.addEventListener('click',function(){
		var t = new Tarea(inputTareaTitulo.value,inputTareaHorario.value);
		globalAgenda.addTarea(t);
		var li = document.createElement("li");
  		li.appendChild(document.createTextNode(t.titulo+" - "+t.horario));
  		listaTareas.appendChild(li);
  		inputTareaTitulo.value='';
		inputTareaHorario.value='';
  	});
}