
### Interactive Kanban Board Application using React JS

This project is an interactive Kanban board application designed using React JS. It integrates with the provided API endpoint (https://api.quicksell.co/v1/internal/frontend-assignment)) to fetch and display ticket data dynamically. The application offers flexible grouping, sorting, and state persistence, ensuring a responsive and visually appealing user experience.

---

#### Key Features

1. Dynamic Grouping Options:
   - By Status: Groups tickets based on their current status (e.g., Open, In Progress, Closed).
   - By User: Organizes tickets according to the assigned user.
   - By Priority: Groups tickets based on their priority level (Urgent, High, Medium, Low, No Priority).

2. Sorting Options:
   - By Priority: Displays tickets in descending order of priority.
   - By Title: Sorts tickets alphabetically by their title.

3. Priority Levels (fetched from the API):
   - Urgent (Priority 4)
   - High (Priority 3)
   - Medium (Priority 2)
   - Low (Priority 1)
   - No Priority (Priority 0)

4. State Persistence:
   - The Kanban board retains the user's selected grouping and sorting preferences even after page reloads.

5. Responsive Design:
   - The application is optimized for various devices, ensuring an engaging experience on both desktops and mobile screens.

6. Deployed Application:
   - Live Demo: [Kanban Board Application](https://mohit-quicksell-assignment.netlify.app/)

---

#### How to Run the Project Locally

1. Clone the Repository:
      git clone https://github.com/mtg718/QuickSell_Kanban_Assignment
   

2. Install Node Modules:
   Use the following command to install all dependencies:
      npm install
   

3. Start the Development Server:
   Run the server using:
      npm start
   

4. Access the Application:
   Navigate to http://localhost:3000 in your browser to view the application.

---

#### Project Links

- Live Application: [(https://mohit-quicksell-assignment.netlify.app/)](https://mohit-quicksell-assignment.netlify.app/)
- GitHub Repository: [https://github.com/mtg718/QuickSell_Kanban_Assignment](https://github.com/mtg718/QuickSell_Kanban_Assignment)

This application leverages React JS's powerful state management and rendering capabilities to create a seamless and intuitive Kanban board interface. Its integration with the provided API ensures real-time data interaction, while state persistence and responsive design enhance usability.
