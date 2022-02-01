SELECT 
	M.title, 
	(B.domestic_sales + B.international_sales) AS "Totalde vendas"
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;

/*Exercício 2: Utilizando o INNER JOIN , 
faça uma busca que retorne o número de vendas 
para cada filme que possui um número maior de vendas internacionais 
( international_sales ) do que vendas nacionais ( domestic_sales ).*/