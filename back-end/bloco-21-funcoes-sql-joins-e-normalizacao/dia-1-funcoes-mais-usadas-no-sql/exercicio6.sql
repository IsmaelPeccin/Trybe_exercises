SELECT JOB_ID, COUNT(*) AS 'Total de pessoas programadoras' FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT * from hr.employees;
/*6. Escreva uma query que exiba a quantidade de pessoas
 que trabalham como pessoas programadoras ( IT_PROG ).*/