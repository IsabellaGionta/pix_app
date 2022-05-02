PIX

PIX is an image storage app, where users will be able to log into their account and see their stored images. They will be able to navigate through the app using both stack and tab navigation.
Users will be able to add, delete any images or collections.

This application was tested using an Android device.

I have placed all my code in different folders depending on its use. Config, assets, components, navigation, screens are all the folders within the app. Within each folder is the relevant files.

The DataManager.js file is located within the config folder. This file is where all the data stored and created within the app is kept.

Features:

- Can login and register successfully
- Can view photos
- Can view collections
- Can add photos
- Can add collections
- Can delete collections
- Can delete photos

Bugs (issues) with the app:

- The edit button does not work
- The filter button does not work
- When adding a photo / collection (on the photos / Collections screens), to see them you need to click out off the overlay and refresh the screen (by swiping down) twice.

Things to note:

- On the Collections screen, each collection is a AppListItem with OnSwipeLeft activated to display the delete and edit icons. This is how the users will be able to make those actions within this particular screen.

npm install – will allow all the dependencies to be downloaded prior to opening the app.
npm start - will open the react-native app
