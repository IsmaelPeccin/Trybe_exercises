USE Pixar; 

SELECT m.title, box.rating 
FROM Movies AS m
INNER JOIN BoxOffice AS box
ON m.id = box.movie_id
ORDER BY box.rating DESC;

/*Exercício 3: Utilizando o INNER JOIN , 
faça uma busca que retorne os filmes e sua avaliação 
( rating ) em ordem decrescente.*/ 