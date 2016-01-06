# react-present remote

Mobile remote control for [react-present](../README.md).
See slide previews and switch slides from your mobile device.

 * [Download the Android version from Google Play](https://play.google.com/apps/testing/com.github.limscoder.ReactPresent)

![](../lib/monster-trucking/images/device.png)

## Pairing mobile device

The presentation browser and the remote device must both be connected to the internet for pairing.
Press the space bar in the presentation browser to get a numeric pairing code.
Enter the pairing code on the start page of the remote app and tap the screen.

## How it works

A [react-native](https://facebook.github.io/react-native/) app on the mobile device uses [PubNub](https://www.pubnub.com/) to communicate with the presentation running in a browser.

![](../lib/monster-trucking/images/remote.png)

## Android development

 * Follow [android setup instructions](https://facebook.github.io/react-native/docs/android-setup.html)
 * `cd` to `/remote`
 * Install dependencies

    > npm install

 * Start emulator

    > emulator -avd ...

 * Build react-native

    > react-native run-android
