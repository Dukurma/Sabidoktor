
# SabiDoktor health Chat Bot

SabiDoktor is a simple  bot powered by OpenAI's GPT-3 technology. This project includes a Node.js server for handling chat interactions and an HTML interface for user interaction.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sabidoktor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sabidoktor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the SabiDoktor server:

   ```bash
   node sabidoktor-server.js
   ```

   The server will run on [http://localhost:3000](http://localhost:3000).

2. Start the HTTP server for the HTML interface:

   ```bash
   http-server
   ```

   The HTML interface will be available at [http://localhost:8080](http://localhost:8080).

3. Open your web browser and navigate to [http://localhost:8080](http://localhost:8080) to interact with the SabiDoktor chat bot.

## Configuration

### OpenAI API Key

To use the OpenAI GPT-3 API, you need to obtain an API key. Add your OpenAI API key to the `.env` file in the root directory:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
