class BmiScreen{
    constructor() {
        this.back = createButton('BACK');
    this.weight = createInput('WEIGHT(kg)');
    this.height = createInput('HEIGHT(mtr)');
    this.calculate = createButton('CALCULATE');
    this.weightValue = null;
    this.heightValue = null;
    this.bmi = null;
    }
    display() {
        this.weight.position(displayWidth/2- 270, 150);
    this.weight.style('font-size', '26px')
    this.height.position(displayWidth/2- 270, 250);
    this.height.style('font-size', '26px');
    this.calculate.position(displayWidth/2- 150, 350);
    this.calculate.size(300, 70)
    this.calculate.style('font-size', '26px')
    this.calculate.style('border-top-right-radius', '50px');
    this.calculate.style('border-bottom-left-radius', '50px');

    this.calculate.mousePressed(()=>{
        this.weightValue = int( this.weight.value());
        this.heightValue = int (this.height.value());
        this.bmiValue = this.weightValue/(this.heightValue*this.heightValue);
       
        this.weight.hide();
        this.height.hide();
        this.calculate.hide();
        console.log(this.bmiValue);
        screen = "bmi"
        this.bmi=createElement("h1",this.bmiValue);
        this.bmi.position(200,200)
       this.back.show()
       this.back.position(100,30)
    })
    this.back.mousePressed(()=>{
        homescreen=new HomeScreen()
        homescreen.display()
        this.weight.hide();
        this.height.hide();
        this.calculate.hide();
        this.bmi.hide()
        this.back.hide();
        })
    }
}
