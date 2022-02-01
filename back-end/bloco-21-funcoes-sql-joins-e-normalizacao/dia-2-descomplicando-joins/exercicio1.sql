SELECT 
	M.title, 
	B.domestic_sales, 
	B.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id;

/*Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais 
( domestic_sales ) e internacionais ( international_sales ) de cada filme.*/