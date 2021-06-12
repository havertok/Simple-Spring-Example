package com.simple.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.simple.entities.Employee;

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
