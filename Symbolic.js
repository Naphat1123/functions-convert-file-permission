function convert(symbolic) {
  let arrSymbolic = symbolic.split("");

  for (let i = 0; i < arrSymbolic.length; i++) {
    if (arrSymbolic[i] === "r") {
      arrSymbolic[i] = 4;
    } else if (arrSymbolic[i] === "w") {
      arrSymbolic[i] = 2;
    } else if (arrSymbolic[i] === "x") {
      arrSymbolic[i] = 1;
    } else if (arrSymbolic[i] === "-") {
      arrSymbolic[i] = 0;
    }
  }
  let firstConCode = arrSymbolic[0];
  let seconConCode = arrSymbolic[1] + arrSymbolic[2] + arrSymbolic[3];
  let thirdConCode = arrSymbolic[4] + arrSymbolic[5] + arrSymbolic[6];
  let fourConCode = arrSymbolic[7] + arrSymbolic[8] + arrSymbolic[9];
  
  console.log(`${firstConCode}${seconConCode}${thirdConCode}${fourConCode}`);
}

convert("-r-xr-xr-x");
