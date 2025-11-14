const darkColorsArr = [
    "#2C3E50",
    "#FAAC5E",
    "#D0ACAB",
    "#50BADB",
    "#4A235A",
    "#2F4F4F",
    "#0EDA5A",
    "#BB1F4F",
    "#2C3E50",
    "#801220",
    "#4DA25F",
    "#BC43A5",
    "#AD3C4F",
    "#ABCCE0",
    "#01AF53",
    "#000FFF",
    "#A23BCC",
    "#1AB2C3",
    "#FFFAA2"
  ];
  
  function getRandomIndex() {
    let randomIndex =  Math.floor(Math.random() * darkColorsArr.length);
    return randomIndex;
  }
  console.log(getRandomIndex())
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  console.log(bgHexCodeSpanElement)
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
    
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector(".btn");
  console.log(btn)
  
  btn.addEventListener("click", changeBackgroundColor);