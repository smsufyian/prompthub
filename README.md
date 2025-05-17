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
# Start the application
yarn start
```

## Features

- Create and manage prompts
- Organize prompts by categories
- Share prompts with others
- Import and export prompt collections

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
