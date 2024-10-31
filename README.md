# Pick-A-Book: Interactive Book Recommendation System

Pick-A-Book is an interactive web application that lets users explore how recommendation algorithms work. Through two engaging activities, users interact with a simulated book recommendation system, making selections and influencing recommendations based on the system’s similarity-based algorithm. 

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Activities Overview](#activities-overview)
  - [Activity 1](#activity-1)
  - [Activity 2](#activity-2)
- [Data and Recommendations](#data-and-recommendations)
- [Logging and Tracking](#logging-and-tracking)

## Features
- **User-Based Recommendations**: Users choose books based on previously read selections, enabling the system to recommend books that align with their preferences.
- **Editable Recommendation Influencing**: In Activity 2, users can modify book attributes to see how data manipulation influences algorithmic recommendations.
- **Algorithm Explanation**: Detailed explanations on results pages provide insights into the recommendation algorithm, including similarity scoring.

## Project Structure
The project is organized into folders as follows:
Pick-A-Book/ ├── index.html # Main entry point where users input details to start activities ├── README.md # Project documentation ├── activities/ # Folder containing HTML files for each activity and result page │ ├── activity1.html # Activity 1: Book recommendation selection │ ├── activity1results.html # Results page for Activity 1 with similarity analysis │ ├── activity2.html # Activity 2: Manipulate book data to influence recommendations │ └── activity2results.html # Results page for Activity 2, showing recommendation outcome ├── Images/ # Folder containing images for each book │ └── [book images].jpg # Book cover images used throughout the activities └── scripts/ # Folder for JavaScript files └── booksData.js # Book data file with titles, authors, age ranges, tags, and image paths


## Getting Started
1. **Clone the Repository**: Download the project to your local machine.
2. **Run via GitHub Pages**: Access the project directly at [Pick-A-Book on GitHub Pages](https://rabidplatypus.github.io/PickABook).
3. **Enter User Information**: Input your first name, last initial, and grade level to begin.

## Activities Overview

### Activity 1
- **Goal**: Select a book recommendation based on the user’s previous reads.
- **Process**: 
  - The user is presented with books they've read (Set 1) and books to recommend (Set 2).
  - The user selects a book from Set 2 that they feel would be a good recommendation.
  - The system’s recommendation, based on similarity scoring, is displayed alongside the user’s selection.
- **Results**: Activity 1’s results page (`activity1results.html`) shows the user’s choice, the algorithm’s choice, and similarity scores with explanations.

### Activity 2
- **Goal**: Influence the recommendation by editing book data.
- **Process**: 
  - Users can adjust author, age range, and tags of books in Set 1.
  - The goal is to make minimal edits to influence the algorithm to select a specific book from Set 2.
- **Results**: Activity 2’s results page (`activity2results.html`) displays whether the user succeeded in influencing the recommendation, the total edits made, and similarity scores.

## Data and Recommendations
The recommendation algorithm uses **cosine similarity** to compare books. Each book is represented as a vector based on:
  - **Age Range** (weighted heavily)
  - **Tags** (moderate weight)
  - **Author** (minimal weight)

Similarity scores are calculated to determine how closely books in Set 2 match with Set 1 based on these attributes. The book in Set 2 with the highest similarity score is recommended.

## Logging and Tracking
This project logs user actions, edits, and results in `localStorage`. Each session’s data is stored as CSV-formatted entries, which can be downloaded for analysis upon completing the activities.

--- 

Access the application live at [Pick-A-Book on GitHub Pages](https://rabidplatypus.github.io/PickABook).
