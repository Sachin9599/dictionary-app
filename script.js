// searchinput
// searchbtn

const dictionary =(word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '517a25c3d2mshd203602748fd78ap159dd6jsn0a11a4525172',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {


            // console.log(response)
            wordheading.innerHTML = "Here is the meaning for: " + response.word;
            definition.innerHTML = response.definition.replace("2.","\<br>2.").replace("3.","\<br>3.").replace("4.","\<br>4.");
        
        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})