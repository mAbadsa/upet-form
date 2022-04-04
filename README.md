# upet-form

## Getting Started 📣
**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://github.com/mAbadsa/upet-form.git
cd upet-form
```

**2. Install all of the dependencies:**

```sh
yarn run project-setup
```
**3. Database Setup: 📋**

1. If you have mongo skip this step.
  **Connect to local mongoDB server**
   - Install mongodb database
   - [instructions on how to install mongoDB](https://www.mongodb.com/docs/manual/administration/install-on-linux/)
   - [instructions on how to install MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/?_ga=2.146147763.604431809.1648843607-1173777031.1648843607)
   - [Connect to a MongoDB Server on Your Local Machine](https://www.mongodb.com/docs/manual/installation/)
  **Connect to cloud mongoDB**
    - [Get Started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/#get-started-with-atlas)

2. Open your terminal, run `mongo`:
  - run use <YOUR_DATABASE_NAME>
3. Install ORM, we will use mongoose
   - [react mongoose document to connect to the local mongoDB](https://mongoosejs.com/docs/connections.html)
     local server`mongoose.connect('mongodb://localhost:27017/myapp');`
     could server **use your database url from your atlas account** `mongoose.connect('mongodb://username:password@host:port/database?options...')`;


**4. Environment variables:🔑**
- create .env file
- add your Environment variables
    ```sh
    MONGO_DB= # Your mongodb atlas uri
    PORT= # 8080
    ```
**5. run the app locally:🔌**
In the main directory
```sh
yarn run run-both
```

Now the app should be running at [http://localhost:8080](http://localhost:8080)

