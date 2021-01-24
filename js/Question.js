class Question{
    constructor(){
    this.name = createInput("Enter Your Name");
    this.answer = createInput('Enter Correct Option');
    // this.greeting = createElement('h2');
    this.title = createElement('h2');
    // this.reset = createButton('Reset');
    this.ques = createElement("h3");
    this.options = createElement("li");
    this.options2 = createElement("li");
    this.options3 = createElement("li");
    this.options4 = createElement("li");

    }
    hide(){
        this.answer.hide();
        this.ques.hide();
        this.name.hide();
        this.title.hide();
        this.options.hide();

      }
      display(){
          this.title.position(width/2-50, 100);
          this.ques.position(width/2-200, 200);
          this.options.position(width/2-200, 250);
          this.options2.position(width/2-200, 270);
          this.options3.position(width/2-200, 290);
          this.options4.position(width/2-200, 310);
          this.name.position(width/2-200, 350);
          this.answer.position(width/2+200, 350);
          this.title.html("My Quiz At Last");
          this.ques.html("When did India show Pakistan their Aukat")
          this.options.html("1961");
          this.options2.html("1971");
          this.options3.html("1991");
          this.options4.html("1981");

      }
}