USE Pixar; 

SELECT m.title, m.director, m.year, m.length_minutes, box.rating
FROM Movies AS m 
INNER JOIN BoxOffice AS box
ON box.movie_id = m.id
WHERE box.rating > 8
ORDER BY box.rating DESC;

/*Exercício 6: Utilizando o INNER JOIN , 
selecione todas as informações dos filmes
 com avaliação maior que 8.*/