SELECT JOB_ID, SUM(SALARY) AS 'Folha salarial por profissão' FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

/*8. Utilizando a query anterior, faça as alterações 
para que seja exibido somente a quantidade de dinheiro 
necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).*/