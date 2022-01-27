USE Pixar; 
SET SQL_SAFE_UPDATES = 0;

UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';


/*Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, 
na verdade ele foi dirigido por Andrew Staton. 
Corrija esse dado utilizando o UPDATE . */ 