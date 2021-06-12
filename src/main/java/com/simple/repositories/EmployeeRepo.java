package com.simple.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simple.entities.Employee;

@Repository
public interface EmployeeRepo extends CrudRepository<Employee, Long>{

	//automagic
	
}
