
        const name = prompt("Як тебе звати?");
        
        const age = prompt("Скільки тобі років?");
        if (name && age) {
            alert(`Привіт, ${name}! Тобі ${age} років.`);
        }   
        else {
            alert("Будь ласка, введіть своє ім'я та вік.");
        }   