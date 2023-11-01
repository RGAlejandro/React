let  extLet= 1;
var  extVar= 1;
if(true){
    let intLet = 1;
    var intVar = 1;

    console.log("Inside Function -----");
    console.log("extLet:",extLet);
    console.log("extVar:",extVar);
    console.log("intLet:",intLet);
    console.log("intVar:",intVar);

}

console.log("Outside Function -----");
    console.log("extLet:",extLet);
    console.log("extVar:",extVar);
    console.log("intLet:",intVar);
    // console.log("intVar:",intLet); Si se descomenta te da error ya que la variable let no se puede usar si viene de alguna parte externa al codigo

const a=1;

// a = 2; Al ser const no se puede cambiar el valor