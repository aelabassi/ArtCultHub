import { describe, it, beforeAll, afterAll, expect } from "vitest";
import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import supertest from "supertest";
import jwt from "jsonwebtoken";
import { UserModel } from '../../src/models/user';
import {Request, Response, Express} from 'express';
import {app} from '../../src/server';
import config from '../../src/config';
import * as dotenv from 'dotenv';


dotenv.config();

let mongoServer: MongoMemoryServer;
const JWT_SECRET = config.secret!.jwtSecret;
let server: Express.Application;

beforeAll(async () => {
    await mongoose.disconnect();
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    process.env.MONGO_URI = mongoUri;
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();

});

describe("App home", () => {
    it("/ GET", async () => {
        const response = await supertest(app).get("/");
        expect(response.status).toBe(200);

    })

});