# React-Native-AQI-App
A iOS and Android mobile app using React Native and Redux for getting the Air Quality index.

## API Setup

We are using the [https://aqicn.org/api/](https://aqicn.org/api/) API  to get the AQI details.

The first step is to make sure to acquire your own token for all API access.

### [Get your token from here](https://aqicn.org/data-platform/token/)

Once you get the token create `src/config/Config.js` add your token in this file.

```javascript
export const Config = {
  API_TOKEN: 'Your token here',
};

```

## Requirements

Make sure you have the following setup
- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development.

For more details please have a look at [Getting Started with React Native](https://facebook.github.io/react-native/docs/getting-started.html).

## Get Started


#### 1. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/dev-pacific22/react-native-aqi-app.git

$ cd react-native-aqi-app/

$ npm install or yarn

```
#### 2. Simulate for iOS
```sh
$ cd ios && pod install
```

**Method One**

*	Open the project in Xcode from **ios/AirQualityIndex.xcworkspace**.

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal.

```sh
$ react-native run-ios
```

#### 3. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal.

```sh
$ react-native run-android
```

- Note: If you get any error while running the android app, open the android project in Android Studio. It will be easier to get the exact error and fix the problem. 