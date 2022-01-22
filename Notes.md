TODO:

[ ] Setup
    [x] Create DB and tables using `data.sql`
    [x] Start the server
    [x] npm install
    [x] npm run server
    [x] npm client

[ ] Base Mode
    [ ] Add new Feedback
        [ ] 4 views for the form parts
            [ ] Feeling
            [ ] Understanding
            [ ] Support
            [ ] Comments
            [ ] Each part of the form should have its own route
            [ ] Clicking next should move the user to the next step in the process
    [ ] Input Validation
        [ ] each step should only allow the user to advance if there was an input provided
        [ ] tell the user in some way that an input must be provided
        [ ] Comments section does not need to be validated (empty value is ok)
    [ ] Review component
        [ ] Allows user to review their feedback
        [ ] does not allow user to change their input
        [ ] does not allow the user to go back
    [ ] Submit the feedback
        [ ] `Review` step needs a submit button
            [ ] saves the submission in the DB
        [ ] user should see a submission success page
        [ ] success page should have a button to start a new survey
            [ ] should reset all data 
            [ ] should take user back to page one

[ ] Stretch Goals (complete in order)
    [ ] allow user to go back and change scores
    [ ] style using Material-UI
    [ ] display feedback at route `/admin`
        [ ] most recent at the top
        [ ] allow user to delete existing feedback
        [ ] prompt the user prior to deletion
        [ ] add the ability to flag feedback entries
    [ ] deploy to Heroku

