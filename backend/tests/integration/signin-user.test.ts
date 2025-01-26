import {test, vi, expect, describe }  from 'vitest'
import { Response, Request }  from 'express';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import UserRouter from '../../src/route/user';


const servr = setupServer(
    http.post('/api/signin', () => {
        return (
            HttpResponse.json({
                token:"",
                id: "",
                username: "",
                email: "",
                isAdmin: false
            })
        )

    }
))