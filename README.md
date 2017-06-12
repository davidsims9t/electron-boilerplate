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

Use webPreferences: { backgroundThrottling: false }, allows the app to run at full speed when the app is not in the focused state. Useful if you're displaying content in the tray like a timer.

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

## Garbage Collection

When creating a new window and then closing it, the variable assigned to the browser window object is still
pointing to the browser window object in memory. The best way to avoid this is to use an event listener to assign the variable to null when closed.

## Roles

Allows you to easily add back Electron functionality that is normally lost from creating custom menus.

## System Tray

A system tray is something that displays in the operating system right hand bar.
All trays must have an icon and are specific to the operating system.

### Bounds

Used to tell where the click event occurs and the window size. The click event bounds are
the x and the y offset and the window bounds are the x and y window size (width and height).

To get the x offset use the click event bound minus half of the window x bound. The y bound is the y click bound.

## Issues

- You will likely need to run electron as sudo if the module does not have proper permissions.
- If you close out the main window and you have another window open, there's no way to bring it back up without re-opening the app.
