let bot = document.querySelector('.bot-text');
let userText = document.querySelector('.user-text');
let send = document.querySelector('#send');
let input = document.querySelector('#user-data');
let back = document.querySelector('#arrow');
let more = document.querySelector('#more')
let conversion = document.querySelector('.conversion')




send.addEventListener('click',()=>{
    
        
 let userDiv = document.createElement('div')
     userDiv.setAttribute('class', 'pre')
     conversion.appendChild(userDiv)
     userDiv.textContent = input.value


        const apiKey = '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'; 
           
        
        fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: input.value
              }
            ]
          })
        })
          .then(response => response.json())
          .then(data => {
            var bott = data.choices[0].message.content;
            
            let botDiv = document.createElement('div')
            conversion.appendChild(botDiv)
     
            botDiv.setAttribute('class', 'bot-text')
            botDiv.textContent = bott
            // Handle the response data as needed
          })
          .catch(error => console.error('Error:', error));
        
         
          input.value = ''
          
})
back.addEventListener('click',()=>{
    window.history.back()
})
more.addEventListener('click',()=>{
    alert('Sorry This Feature is not available')
})
