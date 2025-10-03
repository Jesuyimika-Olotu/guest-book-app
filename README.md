# Guest Book App

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/guest-book-app.git
```
2. Navigate to the project directory:
```
cd guest-book-app
```
3. Install the dependencies:
```
npm install
```

## Usage

1. Start the development server:
```
npm run dev
```
2. Open your web browser and navigate to `http://localhost:3000` to access the guest book app.
3. Fill out the form with your name and message, then click the "Submit" button.
4. To view all the submitted comments, navigate to `http://localhost:3000/guestbook`.

## API

The guest book app provides the following API endpoints:

- `GET /`: Serves the main index.html file.
- `POST /`: Handles the submission of the guest book form and saves the data to a JSON file.
- `GET /guestbook`: Serves the guestbook.html file, which displays all the submitted comments.

## Contribution Guide

If you would like to contribute to the guest book app, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.


## Testing


To run the tests, use the following commands:

```
npm test       # Run backend tests
npm run test:frontend # Run frontend tests
```

The backend tests are implemented using Jest.
