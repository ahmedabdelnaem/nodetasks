
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockDatabase = {
                1: { id: 1, name: "john Doe" },
                2: { id: 2, name: "mohamed", email: "mohamed88@gmail.com" }
            };

            const userData = mockDatabase[userId];
            if (userData) {
                resolve(userData);
            } else {
                reject(new Error(`User with ID ${userId} not found`));
            }
        }, 2000);
    });
}


function fetchUserTasks(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockTasksDatabase = {
                1: [
                    { taskId: 101, title: "weite code", completed: true },
                    { taskId: 102, title: "review PRS", completed: true },
                ]
            };

            const userTasks = mockTasksDatabase[userId];
            if (userTasks) {
                resolve(userTasks);
            } else {
                reject(new Error(`Tasks for user ID ${userId} not found`));
            }
        }, 2000);
    });
}


function getUserDataAndTasks(userId) {
    fetchUserData(userId)
        .then(userData => {
            console.log("User data fetched:", userData);
            return fetchUserTasks(userId); 
        })
        .then(userTasks => {
            console.log("User tasks fetched:", userTasks);
        })
        .catch(error => {
            console.error("Error:", error.message);
        });
}


getUserDataAndTasks(1);
