const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener ('click', () => { 
    alert('Служит для вывода информации в консоль');  
})

const Myalert = document.querySelector('#alert');

Myalert.addEventListener ('click', () => { 
    alert('выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК».');  
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener ('click', () => { 
    alert('Выводит в появившееся окно сообщение для пользователя, к примеру вопрос о возрасте пользователя, "Сколько вам лет?".');  
})