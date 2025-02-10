body = document.body;

container = document.createElement("div");
container.classList.add("container");
body.append(container);

redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = "Hey I'm red!";
redText.setAttribute("style", "color: red;")
container.append(redText);

blueH3 = document.createElement("h3");
blueH3.classList.add("blueH3");
blueH3.textContent = "I'm a blue h3";
blueH3.setAttribute("style", "color: blue;")
container.append(blueH3);

blackBorder = document.createElement("div");
blackBorder.classList.add("blackBorder");
blackBorder.setAttribute("style", "background-color: pink; border: solid black; border-width: 1px;");
blackBorder.append(redText);
container.append(blackBorder);

inDiv = document.createElement("h1");
inDiv.textContent = "I'm an h1 in the div";
inDiv.setAttribute("style", "color: black");
blackBorder.append(inDiv);

p = document.createElement("p");
p.textContent = "ME TOO!";
blackBorder.append(p);