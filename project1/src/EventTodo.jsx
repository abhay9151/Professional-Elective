export default function EventToDo() 
{
    function handleClick(prop) {
        alert(`Your Name is ${prop}.`)
    }

    function handleClickList(e){
        if(e.target.classList.contains("deleteBtn")){
            const li = e.target.parentElement;
            li.remove();
        }
    }

    function handleSubmit(e) {
        e.preventDefault();  // To prevent page reloading

        const input = e.target.task.value;
        const inputValue = input.trim();

        if(inputValue === ""){
            alert("Task cannot be empty.")
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${inputValue}</span>
            <button class="deleteBtn">Delete</button>
        `; 

        document.getElementById("taskList").appendChild(li);

        e.target.task.value = ""; 
    }

    return(
        <>
            <h1>To-Do App</h1>

            <button onClick={()=>handleClick("Arnav Srivastava")}>
                Click Me
            </button>

            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Add your task here" />
                <input type="submit" value="Add Task"/>
            </form>

            <ul id="taskList" onClick={handleClickList}>
            </ul>
        </>
    )
}
