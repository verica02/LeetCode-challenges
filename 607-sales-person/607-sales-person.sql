# Write your MySQL query statement below
with q1 as (
select sales_id
from company a, orders b
where a.com_id = b.com_id and a.name = 'RED'
)
select name
from salesperson
where sales_id not in (select sales_id from q1)