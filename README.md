# Snapshot

Snapshot allows users to create a short message with a picture on a given location on the map. The app will only fetch posts from all users that are in close proximity to where the user has centered on the map. All messages that are outside the range will not be displayed. Upon moving the map, a new filter request will be sent that will include a new set of messages from the new location. Users must be signed in to post messages, and users cannot create a message without a picture at this time. This app also features responsive layout that will gracefully and beautifully scale all the way down to mobile sizes. Even though users are expected to push the 'Add Image' button, users can alternatively just drop the image on the button, and the app will process that request as well. All images are saved on Cloudinary.

## Instructions
After cloning into repo, cd to project root directory, and do the following steps

1. run npm install
```
$ npm install
```

2. Create .env file with the following environment variables
```
SESSION_SECRET=yourSessionSecret
CLOUDINARY_CLOUDNAME=yourCloudinaryCloudname
CLOUDINARY_API_KEY=yourCloudinaryApiKey
CLOUDINARY_API_SECRET=yourCloudinaryApiSecret
CLOUDINARY_UPLOAD_PRESET=yourCloudinaryUploadPreset
```

3. run mongo on another tab
```
$ mongod
```

4. run webpack on another tab
```
$ webpack
```

5. run nodemon on another tab
```
$ nodemon
```

6. note: you will need a Cloudinary account to test this app.  If you do not feel like creating an account, feel free to visit [the deployed site](https://jkcodes-snapshot.herokuapp.com) to test the functionalities.