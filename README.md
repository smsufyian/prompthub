# PromptHub

A hub for managing and sharing prompts for AI and automation workflows.

## Description

PromptHub is a platform designed to help users create, organize, and share prompts for various AI models and automation tools.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/prompthub.git

# Navigate to the project directory
cd prompthub

# Install dependencies
yarn install

# Make git hooks executable (if they're not already)
chmod +x .husky/pre-push
```

This project uses git hooks to ensure code quality. The pre-push hook will run tests before allowing a push to the remote repository. If tests fail, the push will be aborted.

## Usage

```bash
# Start the application in development mode
yarn start:dev

# Start the application in production mode
yarn start:prod

# Build the application
yarn build
```

### API Endpoints

The application provides the following RESTful API endpoints:

#### Prompts

- `GET /prompts` - Get all prompts
- `GET /prompts/:id` - Get a specific prompt by ID
- `POST /prompts` - Create a new prompt
- `PUT /prompts/:id` - Update an existing prompt
- `DELETE /prompts/:id` - Delete a prompt

## Features

- Create and manage prompts
- Organize prompts by categories
- Share prompts with others
- Import and export prompt collections

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
