![Primer Banner](https://github.com/primer-io/example-backend/raw/main/images/primer-banner.png)

# 💳 Primer Example Backend

This project is a very simple companion backend to the example apps of [Primer](https://primer.io) Universal Checkout:

- [Example iOS apps](https://github.com/primer-io/checkout-examples-ios)
- [Example Android apps](https://github.com/primer-io/checkout-examples-android)

---

_This server uses [Node](https://nodejs.org/) as the runtime (v16 to be compatible with Glitch) and [Fastify](https://fastify.dev/) as the HTTP server framework._

# 🚀 Get started

## Pre-requisites

- A Primer sandbox account 👤

- An API key for your Sandbox 🔑 <br /> You can grab your API key or create a new one from the [Primer Dashboard](https://sandbox-dashboard.primer.io/developers/apiKeys).

## Deploy on Glitch ⚡️

_We recommend using Glitch to quickly spin up a new instance of your server for free._

1. First, click on this button to open the project in Glitch and start the server. <br /> _It may take a moment to start._

   [![Remix With Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button-v2.svg?v=1622676640618)](https://glitch.com/edit/#!/import/github/primer-io/example-backend)

2. On Glitch, open the file `.env`. <br /> Set the environment variable `PRIMER_API_KEY` to your Primer sandbox API key.

3. On Glitch, grab the URL of your Glitch instance. <br /> It should look like `https://xxx-yyy-zzz.glitch.me`.

4. Paste your Glitch instance URL in the example project.

## Run it locally

1. First, make sure [Node](https://nodejs.org) is installed on your machine.
2. Clone this repository:

   ```sh
   git clone https://github.com/primer-io/example-backend.git

   cd ./example-backend
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Clone the file `.env.example` and call it `.env`. Set the environment variable `PRIMER_API_KEY` to your Primer sandbox API key.

5. Execute the following script on a terminal window:
   ```sh
   npm start
   ```

# 🤖 Capabilities

- `GET /` <br /> Health check

- `POST /client-session` <br /> Create a client session
