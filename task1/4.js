
async function fetchUserData(userId) {
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


(async () => {
    try {
        const user = await fetchUserData(1);
        console.log("User data fetched:", user);
    } catch (error) {
        console.error("Error fetching user data:", error.message);
    }
})();




async function fetchUserTasks(userId) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const mockTasksDatabase = {
                1: [
                    { taskId: 101, title: "weite code", completed: true },
                    { taskId: 102, title: "review PRS", completed: true },
                ],
            
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


(async () => {
    try {
        const userId = 1; 
        const tasks = await fetchUserTasks(userId);
        console.log(`Tasks for user ${userId}:`, tasks);
    } catch (error) {
        console.error("Error fetching user tasks:", error.message);
    }
})();

