  //getting reference
  let btn1 = document.getElementById("myButton");
  let btn2 = document.getElementById("myButton2");
  let rgb1 = "#a29dcd";
  let rgb2 = "#a1e410";
  let myHexaValues = "0123456789abcdef";
  //hexvalues retrieve randomly
  let copyDiv = document.querySelector(".gradientCode");

  const hexValues = () => {
    let colors = "#";
    for (let i = 0; i < 6; i++) {
      colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
    }
    return colors;
  };

  const innerChange = () => {
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`;
  };

  const handleButton1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    innerChange();
    btn1.innerText = rgb1;
  };

  btn1.addEventListener("click", handleButton1);

  const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    innerChange();

    btn2.innerText = rgb2;
  };

  btn2.addEventListener("click", handleButton2);

  copyDiv.addEventListener('click', () => {
navigator.clipboard.writeText(copyDiv.innerText)
.then(() => {
  alert('Your Gradient is copied successfully!');
})
.catch(err => {
  console.error('Failed to copy: ', err);
  alert('Failed to copy the gradient. Please try again.');
});
});
  
