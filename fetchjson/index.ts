import axios from 'axios'

// interface defines the structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get('https://jsonplaceholder.typicode.com/todos/1').
    then(response => {
        const todo = response.data as Todo; // response.data must be of type Todo

        logTodo(todo.id, todo.title, todo.completed);
    }).
    catch(err => {

    })

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The Todo with id: ${id}`)
    console.log(`The Todo with title: ${title}`)
    console.log(`The Todo with id: ${completed}`) // would throw an error in TS if property wasn't on interface to help catch errors
}