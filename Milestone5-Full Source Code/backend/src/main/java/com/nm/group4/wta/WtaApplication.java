package com.nm.group4.wta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;
@SpringBootApplication
public class WtaApplication {

	public static void main(String[] args) {
		SpringApplication.run(WtaApplication.class, args);
	}

}
@CrossOrigin(origins = "*")
@RestController
class Controller {


	private static final String HARDCODED_USERNAME = "user";
    private static final String HARDCODED_PASSWORD = "password";
 	private List<Strength> strengthList =new ArrayList<>();
	private List<Endurance> enduranceList = new ArrayList<>();
	@PostMapping("/signup")
		public ResponseEntity<String> signup(@RequestBody Auth signupRequest) {
			return ResponseEntity.ok("Signup successful");
		}

		@PostMapping("/login")
		public ResponseEntity<String> login(@RequestBody Auth loginRequest) {
			String providedUsername = loginRequest.getUsername();
			String providedPassword = loginRequest.getPassword();
			if (HARDCODED_USERNAME.equals(providedUsername) && HARDCODED_PASSWORD.equals(providedPassword)) {
				return ResponseEntity.ok("Login successful");
			} else {
				return ResponseEntity.status(401).body("Invalid credentials");
			}
		}
		
    @PostMapping("/setStrength")
    public ResponseEntity<String> setStrength(@RequestBody Strength strengthRequest) {
        // Implement logic to set strength for a user
        strengthList.add(strengthRequest);
        return ResponseEntity.ok("Strength set successfully");
    }
	@GetMapping("/getStrength")
		public ResponseEntity<Strength> getStrength(@RequestParam("date") String date) {
			// Implement logic to get strength for the given date
			for (Strength strength : strengthList) {
				if (strength.getDate().equals(date)) {
					return ResponseEntity.ok(strength);
				}
			}
			return ResponseEntity.notFound().build(); // Return 404 if strength for the given date is not found
		}
    @PostMapping("/setEndurance")
    public ResponseEntity<String> setEndurance(@RequestBody Endurance enduranceRequest) {
        enduranceList.add(enduranceRequest);
        return ResponseEntity.ok("Endurance set successfully");
    }

    @GetMapping("/getEndurance")
    public ResponseEntity<Endurance> getEndurance(@RequestParam("date") String date) {
        for (Endurance endurance : enduranceList) {
            if (endurance.getDate().equals(date)) {
                return ResponseEntity.ok(endurance);
            }
        }
        return ResponseEntity.notFound().build();
    }
}
