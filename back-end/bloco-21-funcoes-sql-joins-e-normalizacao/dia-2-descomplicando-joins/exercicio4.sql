USE Pixar; 

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater AS t
LEFT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

/*Exercício 4: Utilizando o LEFT JOIN , 
faça uma busca que retorne todos os dados dos cinemas, 
mesmo os que não possuem filmes em cartaz e, adicionalmente, 
os dados dos filmes que estão em cartaz nestes cinemas. 
Retorne os nomes dos cinemas em ordem alfabética.*/