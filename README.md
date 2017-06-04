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

## Browser Windows

Spawns a browser window. Completely separate from app process. Has access to CommonJS require as well fs, crypto, etc.

## Separation of Concerns

Anything related to the operating system use the Electron app process. Anything that can be
used on the web store in the BrowserWindow process.

## IPC System - Interprocess Communication

Allows different processes to communicate between each other.

IPC Renderer sends message to Electron app and IPC Main receives the message. Electron sends message back to front-end and the front-end receives it with the IPC Renderer.

## Menus

Each menu in the menu bar has a sub menu that contains text called labels.
When using your own custom menu it will displace the normal Electron menu.
This will also remove the default key binds in Electron. In Mac OS X the very
first menu is the name of the application (i.e. Electron).

## Issues

You will likely need to run electron as sudo if the module does not have proper permissions.
