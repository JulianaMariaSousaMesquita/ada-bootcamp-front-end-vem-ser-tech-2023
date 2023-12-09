class Task {
    static taskId = 1
  
    constructor(description, completed = false) {
      this.id = Task.taskId++
      this.description = description
      this.completed = completed
    }
  }
  
  class TodoList {
    constructor() {
      this.tasks = []
    }
  
    addTask(description) {
      const task = new Task(description)
      this.tasks.push(task)
    }
  
    viewTasks() {
      this.tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}`)
      })
    }
  
    editTask(taskId, newDescription) {
      const task = this.tasks.find(task => task.id === taskId)
      if (task) {
        task.description = newDescription
      }
    }
  
    markCompleted(taskId) {
      const task = this.tasks.find(task => task.id === taskId)
      if (task) {
        task.completed = true
      }
    }
  
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    }
  }
  
const todoList = new TodoList()

todoList.addTask("Estudar JavaScript")
todoList.addTask("Fazer exercícios de programação")

todoList.viewTasks()

todoList.editTask(1, "Estudar JavaScript para a aula")

todoList.markCompleted(1)

todoList.deleteTask(2)

todoList.viewTasks()
