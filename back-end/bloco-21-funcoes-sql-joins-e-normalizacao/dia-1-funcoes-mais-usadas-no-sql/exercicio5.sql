SELECT 
	ROUND(MAX(SALARY), 2) AS 'Maior Salário', 
    ROUND(MIN(SALARY), 2) AS 'Menor Salário', 
    ROUND(SUM(SALARY), 2) AS 'Folha de pagamento',
    ROUND(AVG(SALARY), 2) AS 'Média salarial'
FROM hr.employees;

/*5. Escreva uma query que exiba quatro informações: 
o maior salário, o menor salário, a soma de todos os 
salários e a média dos salários. 
Todos os valores devem ser formatados para ter apenas duas casas decimais.*/