document.getElementById('name_input').oninput = () => {
    document.getElementById('name_input').value !== 'Xxxx' 
        ? document.getElementById('name_input').classList.add("red") 
        : document.getElementById('name_input').classList.remove("red")
}