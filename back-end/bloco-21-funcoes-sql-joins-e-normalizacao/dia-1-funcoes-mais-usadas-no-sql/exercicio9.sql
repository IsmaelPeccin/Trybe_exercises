SELECT JOB_ID, SUM(SALARY) AS 'Folha salarial por profissão' FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG' 
ORDER BY SUM(SALARY) DESC;

/*9. Escreva uma query que exiba em ordem decrescente 
a média salarial de todos os cargos, 
exceto das pessoas programadoras ( IT_PROG ).*/