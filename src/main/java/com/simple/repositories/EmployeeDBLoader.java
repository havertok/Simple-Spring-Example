package com.simple.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.simple.entities.Employee;

//Will call this before the rest allowing us to add the test user
@Component
public class EmployeeDBLoader implements CommandLineRunner {
	
	private final EmployeeRepo empRep;
	
	@Autowired
	public EmployeeDBLoader(EmployeeRepo empRep) {
		this.empRep = empRep;
	}

	@Override
	public void run(String... args) throws Exception {
		this.empRep.save(new Employee("Testman", "Probus", "testman", "testpass"));
		
	}

	
	
}
