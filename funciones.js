function mostrarAlerta(){
    window.alert("Esto es un aviso :))");
}
function Suma(){
    //1. Llamar a los elementos
    var num_1 = document.getElementById("n1").value;
    var num_2 = document.getElementById("n2").value;
    var res = document.getElementById("resultado");

    //2. Validar los campos
    if(num_1.length>0 && num_2.length>0){
        var num_uno = parseInt(num_1);
        var num_dos = parseInt(num_2);
        res.textContent = num_uno+num_dos;
    }else{
        res.textContent = "Llenar todos los campos";
    }
    //3. Transformar a Int
    //Lanzar mi resultado
}
function Resta(){
    //1. Llamar a los elementos
    var num_1 = document.getElementById("n1").value;
    var num_2 = document.getElementById("n2").value;
    var res = document.getElementById("resultado");

    //2. Validar los campos
    if(num_1.length>0 && num_2.length>0){
        var num_uno = parseInt(num_1);
        var num_dos = parseInt(num_2);
        res.textContent = num_uno-num_dos;
    }else{
        res.textContent = "Llenar todos los campos";
    }
    //3. Transformar a Int
    //Lanzar mi resultado
}
function Multipicación(){
    //1. Llamar a los elementos
    var num_1 = document.getElementById("n1").value;
    var num_2 = document.getElementById("n2").value;
    var res = document.getElementById("resultado");

    //2. Validar los campos
    if(num_1.length>0 && num_2.length>0){
        var num_uno = parseInt(num_1);
        var num_dos = parseInt(num_2);
        res.textContent = num_uno*num_dos;
    }else{
        res.textContent = "Llenar todos los campos";
    }
    //3. Transformar a Int
    //Lanzar mi resultado
}
function División(){
    //1. Llamar a los elementos
    var num_1 = document.getElementById("n1").value;
    var num_2 = document.getElementById("n2").value;
    var res = document.getElementById("resultado");

    //2. Validar los campos
    if(num_1.length>0 && num_2.length>0){
        var num_uno = parseInt(num_1);
        var num_dos = parseInt(num_2);
        res.textContent = num_uno/num_dos;
    }else{
        res.textContent = "Llenar todos los campos";
    }
    //3. Transformar a Int
    //Lanzar mi resultado
}