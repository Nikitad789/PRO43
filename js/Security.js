class Security {

    constructor(){

        // Add code to create the input and button elements
        this.button=createButton('check')
        this.input=createInput('Code1')

        this.button2=createButton('check')
        this.input2=createInput('Code1')

        this.button3=createButton('check')
        this.input3=createInput('Code1')

        this.button.position(100,130)
        this.input.position(100,100)

        this.button2.position(700,230)
        this.input2.position(700,200)

        this.button3.position(100,330)
        this.input3.position(100,300)
    }
  
    
    display(){

        

        // Add code to make the buttons function as expected
        this.button.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.input.value())){
               this.button.hide()
               this.input.hide()
               score++
            }
        })
              this.button2.mousePressed(()=>{
                if(system.authenticate(accessCode2,this.input2.value())){
                   this.button2.hide()
                   this.input2.hide()
                   score++
                }
            })
    
              this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.input3.value())){
               this.button3.hide()
               this.input3.hide()
               score++
            }
              })

        }
}