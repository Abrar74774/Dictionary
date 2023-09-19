let btn = document.getElementById("srchbtn");
let word = document.getElementById("word")
let wordType = document.getElementById("wordtype");
let desc = document.getElementById("desc");


btn.addEventListener("click", function() {
    desc.innerHTML="";
    let input = document.getElementById("input").value;
    word.innerHTML=input;
    console.log(input);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data[0].meanings.forEach(mean => {
                desc.innerHTML += 
                `<li>
                    <p id="wordtype">${mean.partOfSpeech}</p>
                    <p id="def">${mean.definitions[0].definition}</p>
                </li>`                
            });                     
        })
        .catch(err => console.log(err));
})

