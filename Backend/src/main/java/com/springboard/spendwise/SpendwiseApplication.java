package com.springboard.spendwise;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SpendwiseApplication {


	public static void main(String[] args) {
		SpringApplication.run(SpendwiseApplication.class, args);
	}

}
