# react-present remote

Mobile remote control.
See slide previews and switch slides from your mobile device.

## Pairing remote device

Both devices must be connected to the internet for pairing.
Press the space bar in the main presentation window to view the pairing code.
Enter the pairing code on the start page of the remote app.

## Android development

 * Follow [android setup instructions](https://facebook.github.io/react-native/docs/android-setup.html)
 * `cd` to `/remote`
 * Install dependencies

    > npm install

 * Start emulator

    > emulator -avd ...

 * Build react-native

    > react-native run-android

 * Press `F2` to open emulator dev tools and select `Enable Live Reload`
 * Start editing within `/remote/components/android`
 * Debugging: press `F2` and select `Debug in Chrome`
