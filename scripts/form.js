function createForm() {
  // Create elements
  const form = document.createElement("form");
  const divInput = document.createElement("div");
  const inputText = document.createElement("input");
  const inputTextArea = document.createElement("textarea");
  const divButton = document.createElement("buttons-input");
  const button = document.createElement("button");
  const ulIcons = document.createElement("ul");
  const paletteIcon = addIconNote("palette-icon","images/paleta.png","palette-icon");
  const trashIcon = addIconNote("note-icon-filter","images/trash.png","trash-icon");
  const divImages = document.createElement("div");
  const texthidden = document.createElement("input");
  ulIcons.innerHTML = 
    `<li data-color="#FFFFFF" class="FFFFFF"></li>
    <li data-color="#F28B82" class="F28B82"></li>
    <li data-color="#FBBC04" class="FBBC04"></li>
    <li data-color="#FFF475" class="FFF475"></li>
    <li data-color="#CCFF90" class="CCFF90"></li>
    <li data-color="#A7FFEB" class="A7FFEB"></li>
    <li data-color="#CBF0F8" class="CBF0F8"></li>
    <li data-color="#AECBFA" class="AECBFA"></li>
    <li data-color="#D7AEFB" class="D7AEFB"></li>
    <li data-color="#FDCFE8" class="FDCFE8"></li>`;

  // setup elements
  form.classList.add("js-form");
  inputText.classList.add("title_input");
  inputTextArea.setAttribute("id", "text-body");
  divButton.classList.add("buttons-input");
  inputText.placeholder = "Title";
  inputTextArea.name = "textArea";
  inputText.name = "textTitle";
  inputTextArea.placeholder = "Take a note";
  button.setAttribute("type", "submit");
  button.textContent = "Keep it";
  ulIcons.classList.add("note-palette");
  divImages.classList.add("note-icons");
  texthidden.type = "hidden";
  texthidden.value = "#FFFFFF";
  texthidden.name = "colorText";

  // build template
  divInput.append(inputText, inputTextArea, texthidden);
  divButton.append(button);
  divImages.append(paletteIcon, trashIcon);
  form.append(divInput, divButton, divImages, ulIcons);

  // event listener

  paletteIcon.addEventListener("click", (event) => {
    ulIcons.classList.toggle("show-palette");
    event.target.classList.toggle("palette-selected");
})

  ulIcons.addEventListener("click", (event) => {
    const color = `${event.target.getAttribute("data-color")}`;
    texthidden.value = color;

    
  })
  return form;

}

function addIconNote(className,src,alt) {
  const iconImg = new Image(25, 25);
  iconImg.src = src;
  iconImg.alt= alt;
  iconImg.classList.add(className);

  return iconImg
};

function renderForm() {
  const containerForm = document.querySelector(".container-form");

  containerForm.innerHTML = "";

  containerForm.append(createForm());

}

renderForm();