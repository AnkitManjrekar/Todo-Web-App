let todo = savedData()

render()

todoStatus()

document.querySelector('.add_box').addEventListener('submit', (e)=>{
    e.preventDefault()
    let input = {
        id : uuidv4(),
        text : e.target.input_box.value
    }
    saveElement(input)
    render()
    todoStatus()
    e.target.input_box.value = ''
})

document.querySelector('.clear-btn').addEventListener('click', (e)=>{
    clearAll()
    render()
    todoStatus()
})



