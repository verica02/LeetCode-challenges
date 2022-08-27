# Write your MySQL query statement below
select
    a.id as id
from
    weather a
join weather b 
on datediff(a.recordDate, b.recordDate) = 1
and a.Temperature > b.Temperature