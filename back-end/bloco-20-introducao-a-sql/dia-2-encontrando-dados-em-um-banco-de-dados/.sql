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

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM AssignedTo;

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 1;

SELECT Name, Hours FROM Projects
ORDER BY Hours LIMIT 1 OFFSET 1;

SELECT * FROM Projects 
ORDER BY Hours LIMIT 5;

SELECT CONCAT('Existem', ' ',COUNT(Name),' ',  'cientistas na tabela Scientists.') FROM Scientists;
