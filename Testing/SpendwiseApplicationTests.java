package Springboard.Spendwise;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpendwiseApplicationTests {

	@Test
	void contextLoads() {
		TestCase 1: VALID CREDENTIALS

INPUT:Valid Username and Case-insensitive Password.
EXPECTEDRESULT: User Should be Successfully logged in.
ACTION: Redirected to dashboard.

Test Case 2: REMEMBER ME FUNCTIONALITY

INPUT: Checking the "Remember Me" option during login.
EXPECTEDRESULT: User Should be Automatically logged in When returning to Site.
ACTION: Redirected to dashboard.

Test Case 3: INVALID USERNAME OR MAILID

INPUT: Invalid Username or Mail id, Valid Password.
EXPECTEDRESULT:Error message should be displayed indicating that the username is incorrect.
ACTION: Reload the page again and empty the username and password fields.

Test Case 4: INVALID PASSWORD

INPUT: Valid Username and Invalid Password.
EXPECTEDRESULT: Error message should be displayed indicating that the password is incorrect.
ACTION: Reload the page again and empty the username and password fields.

Test Case 5: EMPTY USERNAME

INPUT: Empty username and valid password.
EXPECTEDRESULT: Error message should be displayed indicating that the username field is required.
ACTION: Reload the page again and empty the fields.

Test Case 6: EMPTY PASSWORD

INPUT:Valid username and empty Password.
EXPECTEDRESULT: Error message should be displayed indicating that the password field is required.
ACTION: Reload the page again and empty the fields.

TestCase 7: BRUTE FORCE ATTACKS

INPUT: Multiple login attempts with various username and password combinations, exceeding the maximum allowed attempts.
EXPECTEDRESULT: An appropriate message should be displayed and account should be locked after certain number of failed attempts.
ACTION: Account should be locked.
	}

}
