SELECT 
	CONCAT(first_name, " ", last_name),
    DATEDIFF(CURRENT_DATE(),hire_date)
FROM hr.employees;

/*18: Escreva uma query que exiba as seguintes informações de cada funcionário: 
nome , sobrenome , tempo que trabalha na empresa (em dias) .*/