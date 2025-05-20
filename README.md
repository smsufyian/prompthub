# PromptHub

Platform for developing and managing AI applications for the enterprises.

## Description

PromptHub is a platform designed to help users create, organize, and share prompts for various AI models and automation tools.

## Dependencies

### Installing Node.js through NVM (Node Version Manager)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# OR using wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Reload shell configuration
source ~/.bashrc  # or source ~/.zshrc for Zsh users

# Install the latest version of Node.js
nvm install node

# Use the installed latest version
nvm use node
```

### Installing Yarn version 4

```bash
# Make sure you have Node.js installed first
# Install Yarn globally using npm
npm install -g yarn

# Enable Yarn Berry (version 4)
yarn set version 4.9.1
```

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

## Running the project locally

```bash
# Start the application in development mode
yarn start:dev

# Start the application in production mode
yarn start:prod

# Build the application
yarn build
```

## API Documentation

The project uses Swagger for API documentation. After starting the application, you can access the Swagger UI at:

```
http://localhost:3000/api
```

This provides an interactive interface to:
- Explore available API endpoints
- View request/response schemas
- Test API endpoints directly from the browser

### Adding Documentation to New Endpoints

When creating new endpoints, use Swagger decorators to document them:

```typescript
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('category')
@Controller('example')
export class ExampleController {

  @Get()
  @ApiOperation({ summary: 'Description of what the endpoint does' })
  @ApiResponse({ status: 200, description: 'Success response description' })
  exampleEndpoint() {
    // Implementation
  }
}
```

## Running tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:cov

# Run end-to-end tests
yarn test:e2e
```
