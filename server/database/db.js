/*import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async (username, password) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-uile64k-shard-00-00.onipj2s.mongodb.net:27017,ac-uile64k-shard-00-01.onipj2s.mongodb.net:27017,ac-uile64k-shard-00-02.onipj2s.mongodb.net:27017/?ssl=true&replicaSet=atlas-agfmsi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;*/

import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-uile64k-shard-00-00.onipj2s.mongodb.net:27017,ac-uile64k-shard-00-01.onipj2s.mongodb.net:27017,ac-uile64k-shard-00-02.onipj2s.mongodb.net:27017/?ssl=true&replicaSet=atlas-agfmsi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;