/* Type something input */
function typesomething() {
    const input = document.getElementById("textInput");
    const output = document.getElementById("font1");
    const output1 = document.getElementById("font2");
    const output2 = document.getElementById("font3");
    const output3 = document.getElementById("font4");
    const output5 = document.getElementById("font6");
    const output6 = document.getElementById("font7");
    const output7 = document.getElementById("font8");
    const output8 = document.getElementById("font9");

    output.value = input.value;
    output1.value = input.value;
    output2.value = input.value;
    output3.value = input.value;
    output5.value = input.value;
    output6.value = input.value;
    output7.value = input.value;
    output8.value = input.value;

  }
  /*change font size */
  const output = document.getElementById("font1");
  const output1 = document.getElementById("font2");
  const output2 = document.getElementById("font3");
  const output3 = document.getElementById("font4");
  const output5 = document.getElementById("font6");
  const output6 = document.getElementById("font7");
  const output7 = document.getElementById("font8");
  const output8 = document.getElementById("font9");

  
  function smallest() {
    output.style.fontSize = "20px";
    output1.style.fontSize = "20px";
    output2.style.fontSize = "20px";
    output3.style.fontSize = "20px";
    output5.style.fontSize = "20px";
    output6.style.fontSize = "20px";
    output7.style.fontSize = "20px";
    output8.style.fontSize = "20px";
  }
  
  function small() {
    output.style.fontSize = "24px";
    output1.style.fontSize = "24px";
    output2.style.fontSize = "24px";
    output3.style.fontSize = "24px";
    output5.style.fontSize = "24px";
    output6.style.fontSize = "24px";
    output7.style.fontSize = "24px";
    output8.style.fontSize = "24px";
  }
  
  function middle() {
    output.style.fontSize = "32px";
    output1.style.fontSize = "32px";
    output2.style.fontSize = "32px";
    output3.style.fontSize = "32px";
    output5.style.fontSize = "32px";
    output6.style.fontSize = "32px";
    output7.style.fontSize = "32px";
    output8.style.fontSize = "32px";
  }
  
  function largest() {
    output.style.fontSize = "40px";
    output1.style.fontSize = "40px";
    output2.style.fontSize = "40px";
    output3.style.fontSize = "40px";
    output5.style.fontSize = "40px";
    output6.style.fontSize = "40px";
    output7.style.fontSize = "40px";
    output8.style.fontSize = "40px";
  }
  /* dark/light mode */
  
  function darkFunction() {
    document.body.classList.toggle("dark-mode");
  }
  
  function lightFunction() {
    document.body.classList.toggle("light-mode");
  }
  
  /* list-grid view */
  function listView() {
    document.getElementById("font-grid").style.gridTemplateColumns = "5000px";
  }
  
  function gridView() {
    document.getElementById("font-grid").style.gridTemplateColumns =
      "auto auto auto auto ";
  }
  
  /* back to top button */
  mybutton = document.getElementById("myBtn");
  
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  