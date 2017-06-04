# Electron App Boilerplate

A simple boilerplate and notes about creating Electron Apps.

## How It Works

- Electron App creates the Main Window (browser window).
- Create index.html document to be displayed in the window.
- App is the initial running process created by Electron. Everything else is created by the developer.

### Life Cycle

1. Electron starts
2. App process is created
3. App is ready to start doing things
4. App closes down

Uses event based programming (i.e. listens to life cycle).
You have to create separate windows to communicate content to users.

## Issues

You will likely need to run electron as sudo if the module does not have proper permissions.
