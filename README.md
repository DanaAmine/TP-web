# TP3 JavaScript - Complete Documentation

## Overview
This practical work (TP) is divided into two main parts focusing on JavaScript programming fundamentals and DOM manipulation. The TP is designed for L3 SEC students at USTHB.

## Part 1: JavaScript Language Basics

### Exercise 1: Basic Client-Side Programming
- Introduction to JavaScript integration methods:
  - Inline JavaScript: `<button onclick="...">`
  - Script tags in HTML: `<script>...</script>`
  - External JavaScript files: `<script src="script.js"></script>`
- Implementation of a simple "Hello World" example using all three methods

### Exercise 2: Variables & Constants
- Creation of a page with interactive buttons
- Demonstration of variable and constant declarations
```javascript
let nom = "John Doe";
const PHONE = "123-456-789";
```
- Display of different data types in the console
- Implementation of click handlers for each button

### Exercise 3: Complex Types, Functions & Loops
- Working with arrays, objects, and arrays of objects
```javascript
const etudiantsTab = ["Etudiant1", "Etudiant2", "Etudiant3"];
const etudiantObjet = {nom: 'John', prenom: 'DOE', age: 30};
```
- Implementation of different display functions
- Use of various loop types (for, for...in, for...of)
- Console output formatting

### Exercise 4: Operations and Tests
- Student management system implementation
```javascript
const etudiants = [
    {matricule: 1000, nom: "JOHN", prenom: "DOE", note: 14, assiduite: 5}
];
```
- Calculation of final grades with attendance points
- Implementation of admission criteria
- Use of conditional statements

### Exercise 5: Mini Program (Movie Management)
- Creation of a movie management system
```javascript
let films = [
    {titre: "Inception", annee: 2010, producteur: "Christopher Nolan"}
];
```
- Implementation of CRUD operations
- Array manipulation
- Dynamic console output

## Part 2: Dynamic Table Application

### Key Components

#### 1. HTML Structure
```html
<div id="table_container">
    <div id="form_container">
        <!-- Input fields -->
    </div>
    <table id="dataTable">
        <!-- Table structure -->
    </table>
    <div id="summary">
        <!-- Summary info -->
    </div>
</div>
```

#### 2. CSS Styling
```css
.col_number {
    width: 50px;
    text-align: center;
}
.col_text {
    width: 150px;
    text-align: left;
}
/* More styling rules... */
```

#### 3. JavaScript Functionality
```javascript
let lignes = 0;
let total_points = 0;

function doInsert(nom, prenom, points) {
    lignes++;
    total_points += parseInt(points);
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}
```

### Implementation Steps

#### Step 1: Static Table
- Basic HTML structure with table layout
- CSS styling for table appearance
- Initial static data display

#### Step 2: Basic Interactivity
- Adding new rows dynamically
- Event listeners for buttons
- Basic DOM manipulation methods

#### Step 3: Dynamic Data Management
- Data array implementation
- Table initialization
- Console output functionality

#### Step 4: Summary Section
- Counter implementation
- Points calculation
- Real-time updates

#### Step 5: Form Integration
```html
<div class="form-field">
    <label for="nom">Nom:</label>
    <input type="text" id="nom" name="nom">
</div>
```
- Input validation
- Data insertion logic

#### Step 6: Delete Functionality
- Checkbox selection system
- Multiple row deletion
- Data synchronization

### File Structure
```
TP3_JavaScript/
├── Part1/
│   ├── Exercise1/
│   │   ├── exo1.html
│   │   └── script1.js
│   └── ...
└── Part2/
    ├── style.css
    ├── script.js
    └── etape6.html
```

### Learning Objectives
- Understanding JavaScript basics and advanced concepts
- DOM manipulation and event handling
- Form processing and validation
- Dynamic table operations
- Data structure management
- CSS styling and layout
- Code organization

### Technical Requirements
- Modern web browser with developer tools
- Text editor or IDE
- Basic understanding of HTML and CSS
- No external libraries required

### Note
This practical work provides hands-on experience with JavaScript fundamentals and web development concepts. Each part builds upon the previous one, gradually introducing more complex concepts and features.
