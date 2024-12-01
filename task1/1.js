
function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        
    }
}


function fetchUserDataSync(userId) {
    sleep(2000); 
    const mockDatabase = {
        1: { id: 1, name: "johan doe" },
              
    };

    const userData = mockDatabase[userId];
    if (userData) {
        return userData;
    } else {
        throw new Error(`User with ID ${userId} not found`);
    }
}


function fetchUserTasksSync(userId) {
    sleep(2000); 
    const mockTasksDatabase = {
        1: [
            { taskId: 101, title: "write code ", completed: false },
            { taskId: 102, title: "review Prs", completed: true },
        ],
       
    };

    const userTasks = mockTasksDatabase[userId];
    if (userTasks) {
        return userTasks;
    } else {
        throw new Error(`Tasks for user ID ${userId} not found`);
    }
}


function getUserDataAndTasksSync(userId) {
    try {
        const userData = fetchUserDataSync(userId);
        console.log("User data fetched:", userData);

        const userTasks = fetchUserTasksSync(userId);
        console.log("User tasks fetched:", userTasks);
    } catch (error) {
        console.error("Error:", error.message);
    }
}


getUserDataAndTasksSync(1);
