//Saved Data
let savedData = () => {
    let data = localStorage.getItem('todo-app')

    if(data !== null){
        return JSON.parse(data)
    } else {
        return []
    }
}

//Remove Todo
let removeTodo = (id) => {
    let todoIndex = todo.findIndex(x => {
        return x.id === id
    })


    if(todoIndex > -1){
        todo.splice(todoIndex, 1)
    }
    

    localStorage.setItem('todo-app', JSON.stringify(todo))
    render()
    todoStatus()
}

//Create Dom
let createDom = (x) => {
    

    let div = document.createElement('div')
    let p = document.createElement('p')
    let button = document.createElement('button')

    p.textContent = x.text

    div.setAttribute('class', 'todo-item')
    div.appendChild(p)
    
    
    button.addEventListener('click', (e)=>{
        removeTodo(x.id)
        // console.log(x)
    })
    button.innerHTML = '<i class="fas fa-trash"></i>'

    
    div.appendChild(button)
    document.querySelector('.todo-list').appendChild(div)
}

//Render
let render = () => {
    document.querySelector('.todo-list').innerHTML = ''

    todo.forEach(x => {
        createDom(x)
    })
}

// Current Status
let todoStatus = () => {
    document.querySelector('.status').innerHTML = ''

    let p = document.createElement('p')
    p.textContent = `You have ${todo.length} pending tasks`
    document.querySelector('.status').appendChild(p)
}


//Save Element
let saveElement = (input) => {
    if(input.text.length == 0){
        input.text = 'Un-named todo'
    } 
    todo.push(input)
    
    localStorage.setItem('todo-app', JSON.stringify(todo))

}


//
let clearAll = () => {
    localStorage.removeItem('todo-app');
    todo = []
}