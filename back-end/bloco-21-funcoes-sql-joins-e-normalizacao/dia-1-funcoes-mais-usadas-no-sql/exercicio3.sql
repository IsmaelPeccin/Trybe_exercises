SELECT JOB_ID AS 'Função' ,AVG(SALARY) AS 'Média salarial' FROM hr.employees
GROUP BY JOB_ID ORDER BY AVG(SALARY) DESC;

/* 3. Escreva uma query que exiba a média salarial de cada JOB_ID ,
ordenando pela média salarial em ordem decrescente.*/