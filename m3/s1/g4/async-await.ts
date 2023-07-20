

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))

async function Call(url:string){

    //let todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
    //let users = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())

    let [todos, users] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()),//5
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())//10
    ])

}