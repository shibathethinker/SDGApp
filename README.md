# SDGApp
This project is a simple react-native app which shows UN Sustainable development Goals.
Goals data is retrieved from SDG API -
https://unstats.un.org/SDGAPI/swagger/#!/Target/V1SdgTargetDataGet

To Run The App:

1.  Clone the master branch of this Repo
2. run # npm i
3. run #pod install (for IOS)
4. run gradle sync (for Android)
5. Run #react-native run-ios (for IOS)
6. Run #react-native run-android (for Android)

This App once launched will show the following Home screen -

![Home screen of the App](SDG_App_Home.png)

Known Issues:

1. Slowness in loading the images on Home screen. This could be avoided with pre-buffering on splash screen.
2. Non-uniform font styles
3. No .env files as of now (hard-coded API urls)

Possible improvements:
1. Add AsyncStorage for caching images/data
