package com.ram.ems_backend.service;

import com.ram.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

	EmployeeDto createEmployeeDto(EmployeeDto employeeDto);

	EmployeeDto getEmployeeById(Long employeeId);

	List<EmployeeDto> getAllEmployees();

	EmployeeDto updateEmployee(Long employeeId,EmployeeDto updateEmployee);

	void deleteEmployee(Long employeeId);
}
