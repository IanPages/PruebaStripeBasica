package com.example.stripePrueba.Controller;

import com.example.stripePrueba.Service.StripeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class StripeController {

    @Autowired
    private StripeService stripeService;

    @PostMapping("/create-checkout-session")
    public ResponseEntity<String> createCheckoutSession() throws Exception {
        String sessionUrl = stripeService.createCheckoutSession();
        return ResponseEntity.ok(sessionUrl);
    }

}
