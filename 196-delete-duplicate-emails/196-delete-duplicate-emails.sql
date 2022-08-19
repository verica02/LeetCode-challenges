# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
delete from person
where id not in(
select id 
from (select min(id) as Id, Email
     from person
     group by Email) as i)