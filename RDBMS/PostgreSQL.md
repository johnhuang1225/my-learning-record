## Lesson 1. Retrieving Data

##### Retrieving Individual Columns

```sql
SELECT prod_name
FROM Products;
```

##### Retrieving Multiple Columns

```sql
SELECT prod_id, prod_name, prod_price
FROM Products;
```

##### Retrieving All Columns

```sql
SELECT *
FROM Products;
```

##### Retrieving Distinct Rows

```sql
SELECT DISTINCT vend_id
FROM Products;
```

##### Limiting Results

```sql
SELECT prod_name
FROM Products
LIMIT 5 OFFSET 5;
```

## Lesson 2. Sorting Retrieved Data

##### Sorting Data

```sql
SELECT prod_name
FROM Products
ORDER BY prod_name;
```

##### Sorting by Multiple Columns

```sql
SELECT prod_id, prod_price, prod_name
FROM Products
ORDER BY prod_price, prod_name;
```

##### Specifying Sort Direction

```sql
SELECT prod_id, prod_price, prod_name
FROM Products
ORDER BY prod_price DESC;
```

## Lesson 3. Filtering Data

##### Checking Against a Single Value

```sql
SELECT prod_name, prod_price
FROM Products
WHERE prod_price < 10;
```

##### Checking for Nonmatches

```sql
SELECT vend_id, prod_name
FROM Products
WHERE vend_id <> 'DLL01';
```

##### Checking for a Range of Values

```sql
SELECT prod_name, prod_price
FROM Products
WHERE prod_price BETWEEN 5 AND 10;
```

##### Checking for No Value

```sql
SELECT prod_name
FROM Products
WHERE prod_price IS NULL;
```

## Lesson 4. Advanced Data Filtering

##### Using the AND Operator

```sql
SELECT prod_id, prod_price, prod_name
FROM Products
WHERE vend_id = 'DLL01' AND prod_price <= 4;
```

##### Using the OR Operator

```sql
SELECT prod_name, prod_price
FROM Products
WHERE vend_id = 'DLL01' OR vend_id = 'BRS01';
```

##### Using the IN Operator

```sql
SELECT prod_name, prod_price
FROM Products
WHERE vend_id IN ('DLL01','BRS01')
ORDER BY prod_name;
```

##### Using the NOT Operator

```sql
SELECT prod_name
FROM Products
WHERE NOT vend_id = 'DLL01'
ORDER BY prod_name;
```

## Lesson 5. Using Wildcard Filtering

##### The Percent Sign (%) Wildcard

The most frequently used wildcard is the percent sign (%). Within a search string, %
means, match any number of occurrences of any character.

```sql
SELECT prod_id, prod_name
FROM Products
WHERE prod_name LIKE 'Fish%';
```

##### The Underscore `(_)` Wildcard

Another useful wildcard is the underscore `(_)`. The underscore is used just like `%`, but
instead of matching multiple characters the underscore matches just a single character.

```sql
SELECT prod_id, prod_name
FROM Products
WHERE prod_name LIKE 'Fish%';
```

##### The Brackets `([])` Wildcard

The brackets `([])` wildcard is used to specify a set of characters, any one of which
must match a character in the specified position (the location of the wildcard).

```sql
SELECT cust_contact
FROM Customers
WHERE cust_contact LIKE '[JM]%'
ORDER BY cust_contact;
```

## Lesson 6. Summarizing Data

##### Combining Aggregate Functions

```sql
SELECT COUNT(*) AS num_items,
MIN(prod_price) AS price_min,
MAX(prod_price) AS price_max,
AVG(prod_price) AS price_avg
FROM Products;
```

## Lesson 7. Grouping Data

##### Creating Groups

```sql
SELECT vend_id, COUNT(*) AS num_prods
FROM Products
GROUP BY vend_id;
```

###### Filtering Groups

```sql
SELECT cust_id, COUNT(*) AS orders
FROM Orders
GROUP BY cust_id
HAVING COUNT(*) >= 2;
```

## Lesson 8. Joining Tables

##### Creating a Join

```sql
SELECT vend_name, prod_name, prod_price
FROM Vendors, Products
WHERE Vendors.vend_id = Products.vend_id;
```

##### Inner Joins

```sql
SELECT vend_name, prod_name, prod_price
FROM Vendors INNER JOIN Products
ON Vendors.vend_id = Products.vend_id;
```

## Lesson 9. Inserting Data

```sql
INSERT INTO Customers(cust_id,
                      cust_contact,
                      cust_email,
                      cust_name,
                      cust_address,
                      cust_city,
                      cust_state,
                      cust_zip)
  VALUES('1000000006',
         NULL,
         NULL,
         'Toy Land',
         '123 Any Street',
         'New York',
         'NY',
         '11111');
```

## Lesson 10. Updating and Deleting Data

##### Updating Data

```sql
UPDATE Customers
SET cust_email = NULL
WHERE cust_id = '1000000005';
```

##### Deleting Data

```sql
DELETE FROM Customers
WHERE cust_id = '1000000006';
```

## Lesson 11. Creating and Manipulating Tables

###### Basic Table Creation

```sql
CREATE TABLE Products
(
  prod_id CHAR(10) NOT NULL,
  vend_id CHAR(10) NOT NULL,
  prod_name CHAR(254) NOT NULL,
  prod_price DECIMAL(8,2) NOT NULL,
  prod_desc VARCHAR(1000) NULL
);
```

###### Specifying Default Values

```sql
CREATE TABLE OrderItems
(
  order_num INTEGER NOT NULL,
  order_item INTEGER NOT NULL,
  prod_id CHAR(10) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  item_price DECIMAL(8,2) NOT NULL
);
```

###### Updating Tables

```sql
ALTER TABLE Vendors
ADD vend_phone CHAR(20);
```

##### Deleting Tables

```sql
DROP TABLE CustCopy;
```
