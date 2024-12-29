# syncRoom

![Project Screenshot](./src/assets/homepage.png)

## Overview
syncRoom is an open-source video conferencing app built with Vite and React. Designed for teams to stay connected and collaborate effectively, syncRoom offers powerful video meeting features and an intuitive user interface.

## Features
- Start and join meetings with unique room codes.
- Built-in integration with Jitsi for seamless video conferencing.
- Responsive and user-friendly design.
- Customizable themes and layouts powered by Tailwind CSS.
- Real-time meeting management and controls.

## Installation
To run syncRoom locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cybertiwari/syncRoom.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd syncRoom
   ```

3. **Install the dependencies**:
   Using Yarn:
   ```bash
   yarn install
   ```
   Or, if you prefer npm:
   ```bash
   npm install
   ```

4. **Copy the environment file**:
   ```bash
   cp .env.sample .env
   ```

5. **Replace the environment variables**:
   Generate your credentials from [Jitsi as a Service (JaaS)](https://jaas.8x8.vc/#/apikeys) and update the `.env` file:

   ```env
   VITE_JAAS_APP_ID="Your App ID"
   VITE_JWT_TOKEN="Your Authentication Token"
   ```

6. **Run the development server**:
   Using Yarn:
   ```bash
   yarn dev
   ```
   Or with npm:
   ```bash
   npm run dev
   ```

7. **Open the app in your browser**:
   Visit the app at `http://localhost:3000`.

## Usage
- **Start a Meeting**: Create a room to start a new meeting.
- **Join a Meeting**: Enter the meeting code to join an existing room.
- **Manage Meetings**: Use simple and accessible controls to manage your meetings.

## License
This project is licensed under the [MIT License](https://github.com/cybertiwari/syncRoom/blob/main/LICENSE).

## Repository Link
[GitHub Repository](https://github.com/cybertiwari/syncRoom)