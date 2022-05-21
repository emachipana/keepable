function createForm() {
  // Create elements
  const form = document.createElement("form");
  const divInput = document.createElement("div");
  const inputText = document.createElement("input");
  const inputTextArea = document.createElement("textarea");
  const button = document.createElement("button");
  const ulIcons = document.createElement("ul");
  const paletteIcon = addIconNote("palette-icon","images/paleta.png","palette-icon");
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
  divInput.classList.add("input-container")
  inputTextArea.setAttribute("id", "text-body");
  inputText.placeholder = "Title";
  inputText.required = "true";
  inputTextArea.name = "textArea";
  inputTextArea.required = "true";
  inputText.name = "textTitle";
  inputTextArea.placeholder = "Take a note";
  button.classList.add("button-form");
  button.setAttribute("type", "submit");
  button.textContent = "Keep it!";
  ulIcons.classList.add("note-palette");
  divImages.classList.add("note-icons", "icons--form");
  texthidden.type = "hidden";
  texthidden.value = "#FFFFFF";
  texthidden.name = "colorText";

  // build template
  divInput.append(inputText, inputTextArea, texthidden);
  divImages.append(paletteIcon, button);
  form.append(divInput, divImages, ulIcons);

  // event listener

  paletteIcon.addEventListener("click", (event) => {
    ulIcons.classList.toggle("show-palette");
    event.target.classList.toggle("palette-selected");
})

  ulIcons.addEventListener("click", (event) => {
    const color = `${event.target.getAttribute("data-color")}`;
    texthidden.value = color;
    form.style.backgroundColor = color;
    ulIcons.classList.toggle("show-palette");
  })
  return form;

}

function addIconNote(className,src,alt) {
  const iconImg = new Image(34, 34);
  iconImg.src = src;
  iconImg.alt= alt;
  iconImg.classList.add(className);

  return iconImg
};

function renderForm() {
  const containerForm = document.querySelector(".container-form");
  console.log(containerForm);

  containerForm.innerHTML = "";

  containerForm.append(createForm());

}

renderForm();