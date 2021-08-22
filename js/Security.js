class Security {
  constructor() {
    this.access1 = createInput("Answer");
    this.access1.position(200, 160);
    this.access1.style("background", "lavender");

    this.button1 = createButton("Check");
    this.button1.position(200, 190);
    this.button1.style("background", "lavender");

    this.access2 = createInput("Answer");
    this.access2.position(200, 310);
    this.access2.style("background", "lavender");

    this.button2 = createButton("Check");
    this.button2.position(200, 340);
    this.button2.style("background", "lavender");

    //add code for creating and positioning the third input box and button
    this.access3 = createInput("Answer");
    this.access3.position(200, 460);
    this.access3.style("background", "lavender");

    this.button3 = createButton("Check");
    this.button3.position(200, 490);
    this.button3.style("background", "lavender");

    this.access4 = createInput("Answer");
    this.access4.position(200, 590);
    this.access4.style("background", "lavender");

    this.button4 = createButton("Check");
    this.button4.position(200, 620);
    this.button4.style("background", "lavender");

    this.access5 = createInput("Answer");
    this.access5.position(200, 680);
    this.access5.style("background", "lavender");

    this.button5 = createButton("Check");
    this.button5.position(200, 710);
    this.button5.style("background", "lavender");

    this.access6 = createInput("Answer");
    this.access6.position(670, 160);
    this.access6.style("background", "lavender");

    this.button6 = createButton("Check");
    this.button6.position(670, 190);
    this.button6.style("background", "lavender");

    this.access7 = createInput("Answer");
    this.access7.position(870, 460);
    this.access7.style("background", "lavender");

    this.button7 = createButton("Check");
    this.button7.position(870, 490);
    this.button7.style("background", "lavender");
  }

  display() {
    this.button1.mousePressed(() => {
      if (system.authenticate(accessCode1, this.access1.value())) {
        this.button1.hide();
        this.access1.hide();
        score = score+1;
      }
    });

    this.button2.mousePressed(() => {
      if (system.authenticate(accessCode2, this.access2.value())) {
        this.button2.hide();
        this.access2.hide();
        score = score+1;
      }
    });

    //add code for what happens when the third button is pressed
    this.button3.mousePressed(() => {
      if (system.authenticate(accessCode3, this.access3.value())) {
        this.button3.hide();
        this.access3.hide();
        score = score+1;
      }
    });

    this.button4.mousePressed(() => {
      if (system.authenticate(accessCode4, this.access4.value())) {
        this.button4.hide();
        this.access4.hide();
        score = score+1;
      }
    });

    this.button5.mousePressed(() => {
      if (system.authenticate(accessCode5, this.access5.value())) {
        this.button5.hide();
        this.access5.hide();
        score = score+1;
      }
    });

    this.button6.mousePressed(() => {
      if (system.authenticate(accessCode6, this.access6.value())) {
        this.button6.hide();
        this.access6.hide();
        score = score+1;
      }
    });

    this.button7.mousePressed(() => {
      if (system.authenticate(accessCode7, this.access7.value())) {
        this.button7.hide();
        this.access7.hide();
        score = score+1;
      }
    });
  }
}
