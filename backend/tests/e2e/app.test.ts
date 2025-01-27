import { describe, it, beforeAll, afterAll, expect } from "vitest";
import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from "mongoose";
import supertest from "supertest";
import jwt from "jsonwebtoken";
import { UserModel } from '../../src/models/user';
import {Request, Response} from 'express';
import {app} from '../../src/server';
import config from '../../src/config';
import * as dotenv from 'dotenv';
import { token } from "morgan";


dotenv.config();

let mongoServer: MongoMemoryServer;
const JWT_SECRET = config.secret.jwtSecret;
let server;

beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    process.env.MONGO_URI = mongoUri;
    await mongoose.connect(mongoUri);

    server = app.listen(config.port, () => {
        console.log(`Server is running on ${config.host}:${config.port}`);
    });

});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
    server.close();

});

describe("End to End to test", () => {
    it("should return Hello World", async () => {
        const response = await supertest(server).get("/");
        expect(response.status).toBe(200);
    });
    it("User sign up", async () => {
        const response = await supertest(server).post("/api/signup").send({
            username: "FatherMatt",
            email: "Matt.Mordock@daredevil.com",
            password: "hellskitchen@manwithoutfear"
        });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe({
            token: expect.any(String),
            username: "FatherMatt",
            isAdim: false
        })

    })

});