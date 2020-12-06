class TrackScreen{
    constructor() {
this.submit = createButton('SUBMIT');;
this.submit.position(displayWidth/2 +200, displayHeight/2 -200)

this.beans = createCheckbox('Beans', false);
this.cabbage = createCheckbox('Cabbage', false);
this.chappati = createCheckbox('Chappati', false);
this.chicken = createCheckbox('Chicken', false);
this.egg = createCheckbox('Egg', false);
this.dal = createCheckbox('Dal', false);
this.paneer = createCheckbox('Paneer', false);
this.rice = createCheckbox('Rice', false);

this.result = createElement('h1');
this.result.hide();
    }
    display() {
        this.beans.position(100, 100);
        this.cabbage.position(100, 200);
        this.chappati.position(100, 300);
        this.chicken.position(100, 400);
        this.egg.position(200, 100);
        this.dal.position(200, 200);
        this.paneer.position(200, 300);
        this.rice.position(200, 400);  

        this.submit.mousePressed(() => {
            if (this.beans.checked()) {
                this.result.show();
                this.result.html('Beans');
                this.result.position(displayWidth / 2, displayHeight / 2);
            }
            if (this.cabbage.checked()) {
                this.result.show();
                this.result.html('Cabbage');
                this.result.position(displayWidth / 2, displayHeight / 2);
            }
            if (this.chappati.checked()) {
                this.result.show();
                this.result.html('Chappati');
                this.result.position(displayWidth / 2, displayHeight / 2);
            }
            if(this.chicken.checked()){
                this.result.show();
                this.result.html('Chicken');
                this.result.position(displayWidth/2, displayHeight/2);
            }
            if(this.egg.checked()){
                this.result.show();
                this.result.html('Egg');
                this.result.position(displayWidth/2, displayHeight/2);
            }
            if(this.dal.checked()){
                this.result.show();
                this.result.html('Dal');
                this.result.position(displayWidth/2, displayHeight/2);
            }

        })



    }
}