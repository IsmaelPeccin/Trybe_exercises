SELECT JOB_ID, SUM(SALARY) AS 'Folha salarial por profissão' FROM hr.employees
GROUP BY JOB_ID ORDER BY SUM(SALARY) DESC;

/*7. Escreva uma query que exiba a quantidade de dinheiro 
necessária para efetuar o pagamento de cada profissão ( JOB_ID ).*/