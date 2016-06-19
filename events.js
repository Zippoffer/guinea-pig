// var sections = document.getElementsByClassName("article-section");
var outputElement = document.getElementById("output-target")
var pageTitle = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input")
var guineaPig = document.getElementById("guinea-pig");
var opTarget = document.getElementById("output-target")
var buttons = document.getElementsByTagName("button");

for (i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener("click", handleButton);
}

// for (i = 0; i < sections.length; i++) {
//     sections.item(i).addEventListener("click", handleClick);
// }

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
window.addEventListener("click", function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
    console.log("you clicked the", text);
    outputElement.innerHTML = "you clicked the " + event.target.innerHTML;
});


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

pageTitle.addEventListener("mouseover", function() {
    outputElement.innerHTML = 'Get that mouse outta me!!';
})


// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

pageTitle.addEventListener("mouseout", function() {
    outputElement.innerHTML = 'Where did you go?!';
})


// When you type characters into the input field, the output element should mirror the text in the input field.

inputField.addEventListener("input", function() {
    outputElement.innerHTML = inputField.value;
})


// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// function handleClick() {
//     outputElement.innerHTML = "You clicked on the " + event.target.innerHTML + " section";

// };


function handleButton() {
    guineaPig.classList.toggle(event.target.id);
}

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

// The first section's text should be bold.

// The last section's text should be bold and italicized.

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.