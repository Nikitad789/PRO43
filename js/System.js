class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
        authenticate(actualcode,entercode){
            textSize(50)
            fill("black")
            text(code,300,300)
            if(actualcode === entercode.toUpperCase()){
                return true
            }
            else{
                return false
            }
        }
}
    
        

    