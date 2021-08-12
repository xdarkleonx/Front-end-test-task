Specs
1. You are expected to use React + Redux to build the forms.
2. User should be allowed to go to next step only if all fields on current step are valid.
3. There is a blue progress meter on top that shows current progress of steps.
4. When moving from step to step, the page should not reload. This is a Single Page Application.
5. Style the app exactly as given in the screens above. Though, you are encouraged to suggest
improvements to the form in a note along with your test.
6. You are free to use bleeding edge CSS features like Flexbox to make your work easy.
7. You need to implement following validations:
7.1. Email should be required.
7.2. Email should be a valid email address. Use regex validation.
7.3. Password is required.
7.4. Password should be minimum 6 characters long.
7.5. Password confirmation should match the password.
7.6. All fields in “Date of birth” are required.
7.7. All fields in “Date of birth” should be valid respectively.
7.7.1. DD should be a number and 31 ≥ DD ≥ 1.
7.7.2. MM should be a number and 12 ≥ MM ≥ 1.
7.7.3. YYYY should be a number.
7.7.4. Dates like 30/2/1991 are invalid.
7.8. The user must be 18 year old or more.
7.9. One gender option must be selected from the 3 given.
7.10. “Where did you hear about us?” is optional.
8. When a field is invalid, it should show a useful message in the label itself, red in colour.
9. The “Go to Dashboard” button at the last step should print all the details entered as a JSON in
the Browser console, something like:
9.1. { “user_data”: { “email”: …, “password”: …, “date_of_birth”: 1485761262,
“gender”: “female”, “how_hear_about_us”: null } }

Extras
• Write unit tests for React components and reducers.
• Add animations between step transitions and to the progress bar.
• Implement Server side rendering of the form.
• Use redux-form to implement the forms and validation.
