let textaarea = document.getElementById("myTextArea");


button_uppercase = document.getElementById("upper-case");
button_lowercase = document.getElementById("lower-case");
button_propercase = document.getElementById("proper-case");
button_sentencecase = document.getElementById("sentence-case");
button_save = document.getElementById("save-text-file");


button_uppercase.addEventListener("click", function () {
    let text = textaarea.value;
    textaarea.value = text.toUpperCase();
})


button_lowercase.addEventListener("click", function () {
    let text = textaarea.value;
    textaarea.value = text.toLowerCase();
})

button_propercase.addEventListener("click", function () {
    let text = textaarea.value;
    text = text.toLowerCase();
    proper_text= text.split(' ')
        .map(function(word){
            return word.charAt(0).toUpperCase()+ word.slice(1);
    });
    textaarea.value = proper_text.join(' ');
})

button_sentencecase.addEventListener("click", function () {
    let text = textaarea.value.toLowerCase();
    sentence = text.split(". ").
        map(function (sentence){
            return sentence.charAt(0).toUpperCase()+ sentence.slice(1);
        });
    console.log("sentence" + sentence);
    textaarea.value = sentence.join(". ")
})

button_save.addEventListener("click", download_text)

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function download_text(){
    download("text.txt", textaarea.value)
}