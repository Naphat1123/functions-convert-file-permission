function cd(local, parem) {
  let arrLocal = local.split("/");
  let arrParem = parem.split("/");
  let result;

  for (let i = 0; i < arrParem.length; i++) {
    if (arrParem[i] === "..") {
      arrLocal.pop();
      result = arrLocal.join("/");
    } 

    else {
      result = parem
    }
  }

  if (parem === '.'){
    result = arrLocal.join('/')
  }

  if (parem === './') {
    result = arrLocal.join('/')
  }

  return result 
}
var path = "a/b/c/d/e/f";

console.log(cd(path, "/a/b"));
console.log(cd(path, ".."));
console.log(cd(path, "../../.."));
console.log(cd(path, "./"));
console.log(cd(path, "."));
console.log(cd(path, "/"));
