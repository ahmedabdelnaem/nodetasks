
function fetchUserData(userId, callback) {
    setTimeout(() => {
        const mockDatabase = {
            1: { id: 1, name: "john Doe" },
               
               
        };

        const userData = mockDatabase[userId];
        if (userData) {
            callback(null, userData);
        } else {
            callback(new Error(`User with ID ${userId} not found`));
        }
    }, 2000);
}


function fetchUserTasks(userId, callback) {
    setTimeout(() => {
        const mockTasksDatabase = {
            1: [
                { taskId: 101, title: "weite code", completed: true },
                { taskId: 102, title: "review PRS", completed: true },
            ]
        };

        const userTasks = mockTasksDatabase[userId];
        if (userTasks) {
            callback(null, userTasks);
        } else {
            callback(new Error(`Tasks for user ID ${userId} not found`));
        }
    }, 2000);
}


function getUserDataAndTasks(userId) {
    fetchUserData(userId, (userError, userData) => {
        if (userError) {
            console.error("Error fetching user data:", userError.message);
            return;
        }

        console.log("User data fetched:", userData);

        fetchUserTasks(userId, (tasksError, userTasks) => {
            if (tasksError) {
                console.error("Error fetching user tasks:", tasksError.message);
                return;
            }

            console.log("User tasks fetched:", userTasks);
        });
    });
}


getUserDataAndTasks(1);
