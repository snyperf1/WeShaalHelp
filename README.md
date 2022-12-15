# The app named Rebot, made by the company We Shaal Help

## Current state of app:

The following will outline how the app was done

### Admin pages consist of:

- Editing tips page
- messaging students page
- dashboard page (All placeholder data), which will link to
  - broken appliances table
  - working appliances table

### Student pages consist of:

- dashboard page (supposed to have nothing)
- reporting page
  - links to the full report which can be submitted and will be stored in the database
  - Everything was hardcoded
- tips page
  - Shows tips about the current state of the app
- messaging staff page

### Miscellaneous information

- Landing page is at the root
- login page can be accessed from there
- After logging in you will be classified as admin or student depending on your email
- If the person logging in has a "@ssts.edu.sg" at the back of his email, the user will be assumed to be a student and will be redirected to a new page, to ask for more information

- login for all pages works
  - Students will NEED to login with google
  - When logging in for the first time, students need to provide:
    - Class
    - Name
    - Register number
  - If user is not logged in he will be redirected to login page
- 404 page is present (will show for every error and will state error code)

### Technologies used:

- **svelte** for frontend
- **tailwind** for styling
- **Firebase** for backend
