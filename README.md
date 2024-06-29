# Form Builder Next.js Fullstack Application

## Overview

This project is a full-featured form builder application built with Next.js. It allows users to dynamically create, customize, and manage forms with ease. The application supports various input types, form validation, and data storage.

## Features

- **Dynamic Form Creation**: Add and remove input fields on the fly.
- **Customizable Input Types**: Supports text, number, email, date, select, and more.
- **Form Validation**: Built-in validation using `Formik` and `Yup`.
- **Responsive Design**: Mobile-friendly interface using Material UI (`@mui/material`).
- **Backend Integration**: RESTful API for form data storage and retrieval.
- **Database**: Integration with PostgreSQL using Massive.js.

## Technologies Used

- **Frontend**:

  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Formik](https://formik.org/)
  - [Yup](https://github.com/jquense/yup)
  - [Material UI](https://mui.com/)

- **Database**:

  - PostgreSQL

## Installation

### Prerequisites

- Node.js
- PostgreSQL
- Docker (optional, for containerization)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/form-builder-nextjs.git
   cd form-builder-nextjs
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DATABASE_URL=postgres://user:password@localhost:5432/form_builder
   ```

4. **Run database migrations**:

   ```bash
   npm run migrate
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Open your browser**:

   Navigate to `http://localhost:3000` to see the application in action.

## Usage

1. **Creating a Form**:

   - Go to the form builder page.
   - Add input fields by selecting the desired type from the dropdown.
   - Customize each field with labels, placeholders, and validation rules.

2. **Managing Forms**:

   - View a list of all created forms.
   - Edit or delete existing forms as needed.

3. **Submitting Forms**:
   - Fill out the form and submit to see real-time validation.
   - Submitted data will be stored in the PostgreSQL database.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Special thanks to the contributors of the libraries and frameworks used in this project.
