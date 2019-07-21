#!/bin/bash

rm -Rf node_modules package.json package-lock.json platforms plugins hooks www index.html
cp -Rf ../www ./
# cd ..
# npx gulp cordovaLinksReplace
# cd cordova
# cp -f index.html ./www/
node ../build/cordova-deploy.js
cordova platform add ios
cordova platform add android
# cordova platform add browser
cp -Rf ./google-services.json ./platforms/android/app
cp -Rf ./google-services.json ./platforms/android/app
cp -Rf platforms/android/app/src/main/res/mipmap-hdpi/ic_launcher.png platforms/android/app/src/main/res/mipmap-hdpi/icon.png
cp -Rf platforms/android/app/src/main/res/mipmap-ldpi/ic_launcher.png platforms/android/app/src/main/res/mipmap-ldpi/icon.png
cp -Rf platforms/android/app/src/main/res/mipmap-mdpi/ic_launcher.png platforms/android/app/src/main/res/mipmap-mdpi/icon.png
cp -Rf platforms/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png platforms/android/app/src/main/res/mipmap-xhdpi/icon.png
cp -Rf platforms/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png platforms/android/app/src/main/res/mipmap-xxhdpi/icon.png
cp -Rf platforms/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png platforms/android/app/src/main/res/mipmap-xxxhdpi/icon.png
# cordova run android
# sed -i -e 's/com.android.support:support-compat:28.+/com.android.support:support-compat:26.0.1/g' ./platforms/android/app/build.gradle
# sed -i -e 's/applicationId privateHelpers.extractStringFromManifest("package")/applicationId privateHelpers.extractStringFromManifest("package") \'$'\n\t\tmultiDexEnabled true/g' ./platforms/android/app/build.gradle
# sed -i -e 's/multiDexEnabled true/multiDexEnabled true \'$'\n\t\tminSdkVersion 19/g' ./platforms/android/app/build.gradle
# sed -i -e 's/minSdkVersion 19/minSdkVersion 19 \'$'\n\t\ttargetSdkVersion 28/g' ./platforms/android/app/build.gradle
# cordova run android