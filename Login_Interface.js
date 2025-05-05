function btn() {
  let loDiv = document.createElement('div');
  let inDiv = document.createElement('div');
  let inp = document.createElement('input');
  let inp2 = document.createElement('input');
  let h1 = document.createElement('h1');
  let lobtn = document.createElement('button');

  // Style for animation
  loDiv.style.opacity = "0";
  loDiv.style.transition = "opacity 0.5s ease";

  loDiv.style.width = "300px";
  loDiv.style.padding = "50px";
  loDiv.style.borderRadius = "30px";
  loDiv.style.background = "#ccc";
  loDiv.style.display = "flex";
  loDiv.style.justifyContent = "center";
  loDiv.style.alignItems = "center";
  loDiv.style.flexDirection = "column";
  loDiv.style.position = "absolute";
  loDiv.style.top = "50%";
  loDiv.style.left = "50%";
  loDiv.style.transform = "translate(-50%, -50%)";

  h1.innerHTML = "Login";
  h1.style.margin = "10px";
  loDiv.appendChild(h1);

  inp.style.width = "260px";
  inp.style.height = "40px";
  inp.style.borderRadius = "10px";
  inp.style.fontSize = "1.2em";
  inp.type = "email";
  inp.placeholder = " Email";
  inp.style.margin = "10px";
  inp.style.border = "none";
  inp.style.outline = "none";

  inp2.style.width = "260px";
  inp2.style.height = "40px";
  inp2.style.borderRadius = "10px";
  inp2.style.fontSize = "1.2em";
  inp2.type = "password";
  inp2.placeholder = " Password";
  inp2.style.margin = "10px";
  inp2.style.border = "none";
  inp2.style.outline = "none";

  lobtn.style.width = "280px";
  lobtn.style.height = "40px";
  lobtn.style.borderRadius = "100px";
  lobtn.style.fontSize = "1.5em";
  lobtn.style.fontWeight = "700";
  lobtn.style.background = "blue";
  lobtn.style.color = "white";
  lobtn.style.margin = "20px";
  lobtn.innerHTML = "Login";

  inDiv.style.padding = "10px";

  document.querySelector("body").appendChild(loDiv);
  loDiv.appendChild(inDiv);
  inDiv.appendChild(inp);
  inDiv.appendChild(inp2);
  loDiv.appendChild(lobtn);

  // Fade-in animation
  setTimeout(() => {
    loDiv.style.opacity = ".9";
  }, 10);
}