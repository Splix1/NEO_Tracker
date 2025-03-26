# NEO Tracker
React Native application for monitoring NEOs (Near-Earth Objects) based on date using NASA's Open APIs.  

## Prerequisites

- Node.js (version 14 or higher)
- npm
- Expo Go installed in mobile device and signed in
- Expo signed into on computer with the same account as mobile:
```bash
npx expo login
```
- Computer and mobile device are on the same network
- NASA API key stored locally in .env.local

## Installation

1. Clone the repository:
```bash
git clone git@github.com:Splix1/NEO_Tracker.git
cd NEO_Tracker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the app

1. Start the development server:
```bash
npx expo start
```

2. Scan the QR code shown in the terminal with your phone's camera if on iOS, or Expo Go's QR scanner if on Android

### Troubleshooting Connection Issues

1. Ensure your phone and computer are on the same WiFi network

2. Check that you're logged into Expo with the same account on both desktop and mobile:
```bash
npx expo whoami
```

3. If you're not logged in, create an account if needed and log in:
```bash
npx expo login
```

## Development Scripts

- `npx expo start` - Start the development server
- `npx expo start --tunnel` - Start in tunnel mode
- `npx expo start --clear` - Start with cleared cache
