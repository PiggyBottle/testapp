Environment

- Node version 20.18.1
- Expo SDK version 52.0.17
- Windows 10 Pro
- Android 13

Device

- POCO f4

How to run

1. In vscode terminal run `npm install`
1. In vscode terminal run `npm start`
1. Scan QR Code that appears in the terminal with Expo Go on a mobile device

About delete all notes button

- It only deletes the current 3 latest notes for each category, so remaining notes can exist as per the requirements.
- Added a commented deleteAllNotes() function in \app\Screens\settings\index.tsx that can replace the current deleteExposedNotes() function instead

This application was bootstraped with create-expo-app
