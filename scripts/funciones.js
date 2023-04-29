function check(){
    var nombre = document.getElementById("usuario").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    
    

    if (correo=="" && mensaje == "" && nombre == ""){
        alert ('Todos los campos vacios');
    }
    else if (correo=="" && nombre == ""){
        alert ('Falta ingresar correo y nombre');
    }
    else if (correo=="" && mensaje == ""){
        alert ('Falta ingresar correo y mensaje');
    }
    else if (nombre=="" && mensaje == ""){
        alert ('Falta ingresar nombre y mensaje');
    }
    else if (nombre==""){
        alert ('Falta ingresar nombre');
    }
    else if (correo==""){
        alert ('Falta ingresar correo');
    }
    else if (mensaje==""){
        alert ('Falta ingresar mensaje');
    }
    
    else{
        alert("Lo logró :D")
    }
    
}