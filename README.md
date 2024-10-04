# **Pick-A-Book: AI Recommendation Activity**

This project is an educational tool designed to teach students how recommender systems work, similar to those used by popular platforms like YouTube, TikTok, and Netflix. The app includes two activities where users interact with book recommendations and compare their guesses to the AI's choices, providing insight into how algorithms operate.

## **How It Works**

The app presents two different activities where users interact with a set of books and the AI makes a recommendation based on the metadata associated with those books (such as author, age range, and tags). The user is challenged to manipulate the metadata to influence or guess the AI's recommendation.

### **Activity 1: Guess the Recommendation**

In this activity, the user is presented with two groups of books:
- **Group 1:** A set of books the user is familiar with.
- **Group 2:** A set of target books for the AI to recommend from.

The user guesses which book the AI will recommend based on the characteristics of Group 1 (such as shared authors, tags, and age ranges). After making their guess, the user is shown what the AI would recommend and how their guess compares to the AI's choice.

**Results for Activity 1**: The results of this activity will be shown on a separate results page, `activity1results.html`.

### **Activity 2: Manipulate Metadata**

In the second activity, the user is challenged to edit the metadata (such as author, age range, and tags) of books in Group 1 to influence the AI’s recommendation from Group 2. The goal is to make the AI recommend a specific book by changing the information in Group 1.

- Users can edit details like **author**, **age range**, and **tags**.
- The AI aggregates the traits from Group 1, and then compares those to the books in Group 2 to make a recommendation.
- The user can view the recommendation and compare how well they influenced the AI.

**Results for Activity 2**: The results of this activity will be shown on a separate results page, `activity2results.html`.

## **Technologies Used**

- **HTML**: For the structure of the app.
- **CSS**: For styling the pages.
- **JavaScript**: For the interactive behavior and logic.
- **GitHub Pages**: For hosting the project.

## **How to Run the Project**

1. **Clone the Repository:**
   - Clone the repository to your local machine using:
     ```bash
     git clone https://github.com/your-username/your-repository.git
     ```

2. **File Structure:**
   - The project is organized as follows:
     ```
     /your-project
       ├── /Images                # Contains images used in the app
       ├── index.html             # Title page
       ├── /activities            # Contains activity1.html and activity2.html files
       │    ├── activity1.html    # Guess the Recommendation activity
       │    ├── activity1results.html # Results page for activity 1
       │    ├── activity2.html    # Manipulate Metadata activity
       │    ├── activity2results.html # Results page for activity 2
       └──  /scripts               # Contains JavaScript files
       │    ├── booksData.js # Contains book data
       
     ```

3. **Launch the App:**
   - Open `index.html` in a browser. This is the main title page, where the user can enter their username and start the activities.
   - From the title page, users can navigate to **Activity 1** or **Activity 2**.

4. **GitHub Pages:**
   - You can also run this project directly from the browser by visiting the GitHub Pages URL, which will be available after deployment.

## **How the AI Works**

The AI uses metadata from Group 1 books to calculate a score for each book in Group 2. The score is based on how many matching characteristics (author, age range, and tags) there are between the two groups. The book with the highest score is recommended by the AI.

The formula used is:
\[
\text{Book Score} = (\text{Author Points}) + (\text{Age Range Points}) + (\text{Tag Points})
\]

- **Author Points:** +1 for each matching author.
- **Age Range Points:** +3 for each matching age range.
- **Tag Points:** +2 for each matching tag.

The AI compares the characteristics of Group 1 books with the Group 2 target books and recommends the book with the highest score.

## **License**
This project is licensed under the MIT License.
