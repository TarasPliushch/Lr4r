body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    color: #2c3e50;
}

.input-section {
    margin-bottom: 30px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 5px;
}

input[type="text"] {
    width: 70%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
}

button:hover {
    background-color: #2980b9;
}

.tasks-section {
    margin-bottom: 30px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    margin-bottom: 5px;
    background-color: #f9f9f9;
    border-radius: 4px;
    display: flex;
    align-items: center;
}

li:hover {
    background-color: #eee;
}

input[type="checkbox"] {
    margin-right: 10px;
}

.complete-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background-color: #2ecc71;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
}

.complete-btn:hover {
    background-color: #27ae60;
}

.completed-task {
    text-decoration: line-through;
    color: #888;
}
