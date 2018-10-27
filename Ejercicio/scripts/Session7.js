function cambiarStyle()
{
  document.getElementById('idMensaje').style.fontSize = "45px";
}
function SumarRestar(suma)
{
  var Arreglo=[5,2];
  resultado = Arreglo[0]+Arreglo[1];
  alert("Suma: "+suma+"; Resultado "+resultado);
}
function suma_y_resta()
 {
  resultado = 5;
  resultado ++;
  alert(resultado);
  resultado--;
  alert(resultado);
}
function c()
{
  /*var visible=true;
  alert(!visible);*/
  var cantidad =0;
  var resultado=!cantidad;
  alert(resultado);
  cantidad=2;
  resultado=!cantidad;
  alert(resultado);
  var mensaje = "";
  resultado=!mensaje;
  alert(resultado);
}
function AND()
{
  var valor1 = true;
  var valor2 = false;
  resultado = valor1&&valor2;
  alert(resultado);
  valor1=true;
  valor2=true;
  resultado = valor1&&valor2;
  alert(resultado);
}
function OR()
{
  var valor1 = true;
  var valor2 = false;
  resultado = valor1||valor2;
  alert(resultado);
  valor1=false;
  valor2=false;
  resultado = valor1||valor2;
  alert(resultado);
}
function Operadores_Mat(suma1,suma2,resta,multiplicacion,division)
{
  var sumar = suma1 + suma2;
  var resta = sumar - resta;
  var multiplicacion = sumar * multiplicacion;
  var division = sumar / division;
  var modulo = sumar % division;
  alert("Suma = "+sumar+" Restar = "+resta+" Multiplicacion= "+multiplicacion+" Division = "+division+" Modulo ="+modulo);
}
function relacionales(numero1,numero2)
{
  var mayorque=numero1>numero2;
  var menorque=numero1<numero2;
  var mayoroigula=numero1>=numero2;
  var menorogual=numero1<=numero2;
  var validaigual=numero1==numero2;
  var validadiferente=numero1!=numero2;
  alert("Validar los numeros "+numero1+" y "+numero2+" Mayor: "+mayorque+" Menor: "+menorque+" Mayor o Igual: "+mayoroigula+" Menor o Igual: "+menorogual+" Igual: "+validaigual+" Diferente: "+validadiferente);
}
function relacionalesCadena(cadena1,cadena2)
{
  var mayorque=cadena1.length>cadena2.length;
  var menorque=cadena1<cadena2;
  var mayoroigula=cadena1>=cadena2;
  var menorogual=cadena1<=cadena2;
  var validaigual=cadena1==cadena2;
  var validadiferente=cadena1!=cadena2;
  alert("Validar las cadenas "+cadena1+" y "+cadena2+" Mayor: "+mayorque+" Menor: "+menorque+" Mayor o Igual: "+mayoroigula+" Menor o Igual: "+menorogual+" Igual: "+validaigual+" Diferente: "+validadiferente);
}
