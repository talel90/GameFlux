# GameFlux - Your Gaming News Hub

A modern, feature-rich gaming news application built with Expo and React Native. GameFlux delivers the latest gaming news, reviews, and upcoming game information with a beautiful, responsive interface that works across web and mobile platforms.

![GameFlux Screenshot](https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg)

## Features

- 📱 Cross-platform (iOS, Android, Web) support
- 🎮 Latest gaming news and updates
- ⭐ Game reviews with detailed ratings
- 🎯 Upcoming games tracker
- 🔍 Powerful search functionality
- 👤 User profiles with bookmarks
- 🌙 Dark mode support
- 🎨 Beautiful, responsive UI with smooth animations

## Tech Stack

- [Expo](https://expo.dev/) - React Native development framework
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Smooth animations
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - Native-driven gesture management
- [Lucide Icons](https://lucide.dev/) - Beautiful, consistent icons
- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/) - Typography

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gameflux.git
   cd gameflux
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Development

The project uses Expo's managed workflow and follows a file-based routing structure with Expo Router:

```
app/
├── _layout.tsx              # Root layout
├── +not-found.tsx          # 404 page
├── (tabs)/                 # Tab-based navigation
│   ├── _layout.tsx         # Tab configuration
│   ├── index.tsx           # Home screen
│   ├── games.tsx           # Games list
│   ├── reviews.tsx         # Reviews
│   ├── search.tsx          # Search functionality
│   └── profile.tsx         # User profile
├── article/
│   └── [id].tsx            # Article detail page
├── game/
│   └── [id].tsx            # Game detail page
└── review/
    └── [id].tsx            # Review detail page
```

## Project Structure

- `/app` - Application routes and screens
- `/components` - Reusable React components
- `/constants` - Theme configuration and constants
- `/data` - Mock data and data utilities
- `/hooks` - Custom React hooks
- `/types` - TypeScript type definitions

## Features in Detail

### Home Screen
- Featured articles with beautiful hero layout
- Latest news section
- Upcoming games carousel
- Popular reviews
- Category-based filtering

### Games Section
- Comprehensive game listings
- Detailed game information
- Release date tracking
- Platform and genre filtering

### Reviews
- In-depth game reviews
- Rating system with pros and cons
- User engagement metrics
- Rich media integration

### Search
- Global search functionality
- Category-based filtering
- Real-time search results
- Rich result previews

### Profile
- User preferences
- Bookmarked articles
- Theme customization
- Notification settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
