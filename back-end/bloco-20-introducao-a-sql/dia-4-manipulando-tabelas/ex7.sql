SELECT * FROM Pixar.Movies;
SET SQL_SAFE_UPDATES = 0;

DELETE FROM BoxOffice 
WHERE movie_id IN (2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';


/*Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton". */