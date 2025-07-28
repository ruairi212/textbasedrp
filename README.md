# Text-Based Roleplay Web Application

A web-based platform for immersive, text-based roleplaying sessions—no downloads, no installations, just your browser. Inspired by tools like Roll20, this application empowers GMs and players to create, manage, and enjoy collaborative storytelling adventures entirely online.

---

## Features

- **Purely Web-Based**: Access from any modern browser on any device—no client installs required.
- **Live Roleplay Chat**: Real-time text chat with formatting support for expressive roleplay.
- **Room & Campaign Management**: Create, organize, and join rooms for unique campaigns or one-shots.
- **Character Sheets**: Customizable, interactive character sheets with built-in dice rolling.
- **Advanced Dice Roller**: Supports standard and custom dice expressions (e.g., `2d6+3`).
- **Handouts & Shared Notes**: Upload handouts, share images, and collaborate on session notes.
- **Turn & Initiative Tracker**: Streamlined tools for managing initiative and player turns.
- **Theming & Accessibility**: Light/dark modes, adjustable font sizes, and accessible design for all users.
- **User Profiles**: Personalize your experience with avatars, bios, and campaign history.

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection

### Accessing the Application

1. **Open your browser.**
2. **Navigate to the web app URL:**  
   [https://your-app-domain.com](https://your-app-domain.com)

   *(Replace with your actual deployment URL)*

3. **Sign up or log in.**
4. **Start a new campaign or join an existing room.**

---

## Local Development

If you want to run the application locally or contribute:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/textbased-roleplay-app.git
    cd textbased-roleplay-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**
    - Copy `.env.example` to `.env` and fill in your local credentials.

4. **Start the local server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Access locally:**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

- **Frontend:** React / Next.js / Tailwind CSS
- **Backend:** Node.js / Express / WebSocket
- **Database:** PostgreSQL / MongoDB (configurable)
- **Authentication:** JWT, OAuth (Google, Discord, etc.)

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Roadmap

- Voice and video chat integration
- Map and grid tools for enhanced gameplay
- Additional RPG system templates (D&D 5e, Pathfinder, etc.)
- Mobile device optimization

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Inspired by [Roll20](https://roll20.net/) and the broader tabletop RPG community.
- Thanks to all open-source contributors and playtesters!

---

> **Gather your party online—adventure awaits in your browser!**
