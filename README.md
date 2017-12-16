# Snapshot

Snapshot

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

6. note: you will need a Cloudinary account to test this app.  If you do not feel like create an account, feel free to visit [the deployed site](https://jkcodes-snapshot.herokuapp.com) to test the functionalities.