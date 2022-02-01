SELECT * FROM Pixar.Movies;
SET SQL_SAFE_UPDATES = 0;

DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies 
WHERE title = 'WALL-E';

/* Exercício 6 : Exclua da tabela Movies o filme "WALL-E". */