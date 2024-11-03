# My-test-repository

Task 3.

Given the following form:
<label for="tentacles">Number of tentacles (10-100):</label>
<input type="number" id="tentacles" name="tentacles"
min="10" max="100">
<button>Send</button>

Write all necessary test cases to make sure the input field is working as expected; valid
values will lead to a "Success" message, and invalid to an "Error" message.

Min valid value = 10; Max valid value = 100

Test Case 1: Check min valid value
Given: the user enters 10 in the input field
When: the user clicks "Send"
Then: the "Success" message should be displayed

Test Case 2: Check man valid value
Given: the user enters 100 in the input field
When: the user clicks "Send"
Then: the "Success" message should be displayed

Test Case 3: Check mid valid value
Given: the user enters 55 in the input field.
When: the user clicks "Send"
Then: the "Success" message should be displayed

Test Case 4: Check the value below the valid
Given: the user enters 9 in the input field
When: the user clicks "Send"
Then: the "Error" message should be displayed (validation ‘Value must be greater than or equal to 10.’)

Test Case 5: Check the value above the valid
Given: the user enters 101 in the input field
When: the user clicks "Send"
Then: the "Error" message should be displayed (validation ‘Value must be less than or equal to 100’)

Test Case 6: Send the empty field
Given: the user doesn’t enter anything in the input field
When: the user clicks "Send"
Then: the "Error" message should be displayed

Test Case 7: Input letters to the field
Given: the user enters “E” (letters) in the input field
When: the user clicks "Send"
Then: the "Error" message should be displayed (validation ‘Please enter a number.’)

Test Case 8: Input symbols to the field
Given: the user enters “+” (symbols) in the input field 
When: the user clicks "Send"
Then: the "Error" message should be displayed (validation ‘Please enter a number.’)

Test Case 9: Input negative numbers to the field
Given: the user enters -25 (a negative number) in the input field
When: the user clicks "Send"
Then: the "Error" message should be displayed (validation ‘Value must be greater than or equal to 10.’)

Test Case 10: Input fractional number to the field
Given: the user enters 75.5 (a fractional number) in the input field
When: the user clicks "Send"
Then: the "Error" message should be displayed



Task 4. Bug report
FRONT | Top Box Office | Movie rate | The “Rate” button is disabled when user tries to rate a movie with 10 stars 

Environment: Chrome, version 130.0.6723.92 
Preconditions: open the website https://www.imdb.com 
Steps to reproduce:
1. Open your browser on the website https://www.imdb.com
2. Unfold side menu
3. Select the “Movies”
4. Click on the “Top Box Office” menu item
5. Click the 2nd movie from the list
6. Click on the “Rate” button
7. Try to rate the movies with 10 stars
8. Click “Rate” button

Actual Result: 
The “Rate” button is disabled

Expected results: 
The “Rate” button is enabled. The user can click on the button and Rate the movie
