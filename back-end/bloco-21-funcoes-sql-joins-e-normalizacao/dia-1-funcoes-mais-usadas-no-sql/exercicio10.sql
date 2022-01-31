SELECT 
	AVG(salary) AS 'Média salarial', 
    COUNT(department_id) AS 'Número de Funcionários' 
FROM hr.employees
GROUP BY department_id
HAVING COUNT(department_id) > 10;


/*10. Escreva um query que exiba média salarial e o 
número de funcionários de todos os departamentos
 com mais de dez funcionários. 
 Dica: agrupe pelo department_id .*/