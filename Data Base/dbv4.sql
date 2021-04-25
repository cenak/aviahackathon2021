CREATE TABLE requests
(request_id integer NOT NULL,
request_name text NOT NULL,
company_name text NOT NULL,
company_id integer NOT NULL,
user_id integer NOT NULL,
user_comment text,
office_status text,
airport_status text NOT NULL,
airport_note text,
PRIMARY KEY (request_id),
FOREIGN KEY (company_id)
 REFERENCES companies (company_id),
FOREIGN KEY (user_id)
 REFERENCES users (user_id)); 

 CREATE TABLE users
(user_id integer UNIQUE NOT NULL,
 company_name text NOT NULL,
 user_name text,
 flight_id text,
 PRIMARY KEY (user_id)); 
 
  CREATE TABLE companies
 (company_id integer UNIQUE NOT NULL,
 company_name text NOT NULL,
 PRIMARY KEY (company_id)); 
 
 CREATE TABLE list_of_reqs_2
 (request_id integer UNIQUE NOT NULL,
 request_name text NOT NULL,
 PRIMARY KEY (request_id),
  FOREIGN KEY (request_id)
 REFERENCES requests (request_id));

 INSERT INTO companies (company_id, company_name)
 VALUES (23, 'Pobeda'),
 (48, 'Aeroflot'),
 (55, 'S7'),
 (21, 'UTair'),
 (123, 'Atran'),
 (768, 'Rossiya'),
 (45, 'Rusline'),
 (12, 'Nordwind');

 INSERT INTO users (user_id, company_name, user_name, flight_id)
 VALUES (256, 'Pobeda', 'Fedor Ivanov', 'DP158'),
 (347, 'UTair', 'Elena Nikonova', 'UT400'),
 (134, 'S7', 'Pavel Valeev', 'S71012'),
 (976, 'Aeroflot', 'Irina Kudaeva', 'SU1117'),
 (537, 'Rusline', 'Igor Fadeev', '7R136'),
 (309, 'Pobeda', 'Olga Komarova', 'DP180'),
 (789, 'S7', 'Ivan Korneev', 'S72062'),
 (977, 'Aeroflot', 'Maria Romashkina', 'SU1193');
 
 INSERT INTO list_of_reqs_2 (request_id, request_name)
 VALUES (1, 'Авиационные стремянки'),
 (2, 'Насосы'),
 (3, 'Устройства воздушного запуска'),
 (4, 'Трапы'),
 (5, 'Буксиры'),
 (6, 'Сервисное оборудование'),
 (7, 'Транспортеры'),
 (8, 'Место стоянки самолета');
 
 INSERT INTO requests (request_id, request_name, company_name, company_id, user_id, 
 user_comment, office_status, airport_status, airport_note)
 VALUES (8, 'Место стоянки самолета', 'Pobeda', 23, 256, 'В течение 15 минут', 'одобрено', 'одобрено', ''),
 (5, 'Буксиры', 'UTair', 21, 347, '', 'одобрено', 'выполняется', ''),
 (7, 'Транспортеры', 'S7', 55, 134, '', 'одобрено', 'выполняется', 'Сделать за 20 минут перед вылетом'),
 (3, 'Устройства воздушного запуска', 'Aeroflot', 48, 976, 'Сделать срочно', 'одобрено', 'выполняется', ''),
 (2, 'Насосы', 'S7', 55, 789, 'Самолет прибывает позже графика. На полосу 14L', 'одобрено', 'выполняется', ''),
 (1, 'Авиационные стремянки', 'Aeroflot', 48, 977, 'Требуется внеплановый техосмотр перед полетом', 'одобрено', 'одобрено', 'Подготовить тех. документы'),
 (6, 'Сервисное оборудование', 'Rusline', 45, 537, 'Срочно', 'одобрено', 'одобрено', ''),
 (4, 'Трапы', 'UTair', 21, 347, '', 'одобрено', 'выполняется', 'Прибудут в течение 5 минут');
 
 SELECT * FROM requests
 SELECT * FROM users
 SELECT * FROM companies
 SELECT * FROM list_of_reqs_2
 
 

 
 
 