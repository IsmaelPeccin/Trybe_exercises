USE Scientists; 
SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 1,2,3;

SELECT 10+15;

SELECT 5*5;

SELECT * FROM Scientists;

SELECT * FROM Projects;
SELECT Name AS 'Nome do Projeto', Hours As 'Tempo de Trabalho' FROM Projects;

SELECT Name FROM Scientists ORDER BY Name;

SELECT Name FROM Projects ORDER BY name DESC;

SELECT CONCAT('O projeto', Name, 'precisou de', Hours, 'para ser concluído.') AS resultado FROM Projects;