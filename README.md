# To-Do List Application

This project is a to-do list application developed with React. It allows users to add, edit, delete, and mark tasks as completed. Additionally, users can filter tasks to display all, completed, or pending items, and sort them alphabetically for better organization and efficiency.

## Features
- **Add tasks** with category and initial status as not completed.
- **Delete tasks** easily through a delete button.
- **Mark tasks as completed** or revert to not completed.
- **Filter tasks** to display all, only completed, or only pending.
- **Search tasks** by keywords.
- **Sort tasks** alphabetically in ascending or descending order.
- **Data persistence** in `localStorage` to retain tasks after reloading the page.

## Technologies Used
- **React** - JavaScript library for building the interface.
- **CSS3** - Application styling.
- **HTML5** - Project structure.

## Project Structure

```
.
|-- src
|   |-- components
|   |   |-- ToDo.js
|   |   |-- ToDoForm.js
|   |   |-- Search.js
|   |   |-- Filter.js
|   |-- App.js
|   |-- App.css
|-- public
|-- package.json
|-- README.md
```

## How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/repository-name.git
```

### 2. Install Dependencies
```bash
cd repository-name
npm install
```

### 3. Run the Project
```bash
npm start
```
The application will run at `http://localhost:3000`.

## How to Use
1. **Add a Task**: Fill in the field and click add.
2. **Delete a Task**: Click the trash icon next to the task.
3. **Mark as Completed**: Click on the task to toggle between completed and pending.
4. **Filter Tasks**: Use the filter buttons to view all, completed, or pending tasks.
5. **Search**: Type in the search field to find specific tasks.
6. **Sort**: Select the desired sorting option (Ascending or Descending).


## Author
- **Your Name**  
- [LinkedIn](https://linkedin.com/in/verônica-souza-b8096533a/)  
- [GitHub](https://github.com/codebyveronica)  

---

This project is ideal for practicing fundamental React concepts, such as state, components, and side effects with `useState` and `useEffect`.

