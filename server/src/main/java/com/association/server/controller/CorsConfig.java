package com.association.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(
        origins = {
                "http://localhost:3000",
                "https://localhost:3000/{id}",
                "https://localhost:3000/update/{id}",
                "https://localhost:3000/createPerson/{id}"
        },
        methods = {
                RequestMethod.OPTIONS,
                RequestMethod.GET,
                RequestMethod.PATCH,
                RequestMethod.DELETE,
                RequestMethod.POST
        })
public class CorsConfig {
}
