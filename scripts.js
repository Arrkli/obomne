
        const name = prompt("Як тебе звати?");
        
        const age = prompt("Скільки тобі років?");
        
        if (name && age) {
            if (parseInt(age) >= 18) {
                alert("Привіт, " + name + "! Ти повнолітній(я). Ласкаво просимо на сторінку!");
            } else {
                alert("Привіт, " + name + "! Ти ще неповнолітній(я). \ Ухади з цієї сторінки!");
                window.location.href = "https://www.google.com";
            }
        } else {
            alert("Будь ласка, введи своє ім’я та вік!");
        }