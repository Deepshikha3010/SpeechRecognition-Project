let button = document.querySelector("button")

button.addEventListener("click",(e) => {
    window.SpeechRecognition =
     window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.interimResults=true;

    let p= document.createElement('p');
    let word= document.querySelector(".word");
     word.appendChild(p);

     recognition.addEventListener("result",(e)=>{
        button.innerHTML="speak";
        let transcript= Array.from(e.results)
        .map((result)=> result[0] )
        .map((result)=> result.transcript)
        .join("");
        p.textContent=transcript;
       
    });

   recognition.start();
})