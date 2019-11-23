let btn = document.getElementById("srchbtn");
let word = document.getElementById("word")
let wordType = document.getElementById("wordtype");
let desc = document.getElementById("desc");


btn.addEventListener("click", function() {
    desc.innerHTML="";
    let input = document.getElementById("input").value;
    word.innerHTML=input;
    console.log(input);
    fetch(`https://owlbot.info/api/v3/dictionary/${input}`,{headers:{'Authorization':'Token 94c5b78ce14a2d373e9c108d8c3d5520df087d7c'}})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.definitions.forEach(def => {
                desc.innerHTML += 
                `<li>
                    <p id="wordtype">${def.type}</p>
                    <p id="def">${def.definition}</p>
                </li>`                
            });                     
        })
        .catch(err => console.log(err));
})

