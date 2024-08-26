# Git-Autocorrect---Force

A very innocent Autocorrect implementation on a web-based file editor.

## Description 
`git-autocorrect---force` is a unique type of autocorrector, especially useful for those who just can't seem to spell correctly. It corrects any misspelled words but also "incorrects" words that are spelled correctly, forcing you to purposely write the incorrect spelling. It comes with various modes depending on the severity of your dyslexia.

## Installation

### Dependencies:
- Node.js 20+

### Steps to Install:

1. Clone the repository and navigate into it:
   ```bash
   git clone https://github.com/Ekuspreet/git-autocorrect---force 
   cd git-autocorrect---force
   ```

2. Install the required Node packages:
   ```bash
   npm install
   ```

3. Run the web-based editor:
   ```bash
   npm run watch
   ```

4. Visit `http://localhost:3000` in your browser to start using the editor.

## Contribution Guide

### Technologies Used:
- **Node.js**
- **Express.js**
- **EJS**
- **Tailwind CSS**
- **DaisyUI**

### Project Structure:
- **configurations/**: Contains configuration files for project settings.
- **controllers/**: Contains all server-side functions.
- **middleware/**: Middleware files.
- **public/**: Contains all static files.
- **routes/**: Route definitions for the API and web.
- **utils/**: Contains autocorrection logic.
- **views/**: Contains all HTML files.

### Coding Standards:

- **Naming Files**: `fileName.containingFolder.extension`
- **Naming Folders**: lowercase
- **Import Aliases**: Defined in `package.json` (e.g., `/utils` is `@utils`).
- **Naming Modules**: camelCase
- **Naming Variables**: lower_snake_case
- **Global Variables**: UPPER_SNAKE_CASE

### Routes:
- API routes should be placed under `/api`.
- Web routes should be placed under `/web`.
- Use `text-text-text` for naming routes.
Eg: /api/autocorrect

### Committing:
1. **Always** create a local branch (with no upstream, as we don't want to see your embarrassing commit history).
2. **Always** pull before working on a feature:
   ```bash
   git checkout main 
   git pull
   ```
3. Merge changes into your branch:
   ```bash
   git checkout <your-branch> main
   ```
4. Make commits on this local branch.
5. Merge commits into the `main` branch and push to remote.
6. If it asks to rebase, **do it**.

### Writing Commit Messages:
Use the following tags:
- **feat**: New feature
- **chore**: Enhancement, but not a new feature
- **bug**: Bug fix
- **test**: For testing
- **unstable**: Unstable commit (don't do it)
- **misc**: Miscellaneous

## Contributors

- [Raghavjit Rana](https://github.com/RaghavJit)
- [Ekuspreet Singh](https://github.com/Ekuspreet)
- [Chandanbir Singh](https://github.com/singh-chandanbir)


