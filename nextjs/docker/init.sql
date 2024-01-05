CREATE USER user1 with password '123456';
CREATE DATABASE authentication_app;
GRANT ALL PRIVILEGES ON DATABASE authentication_app to user1;
\c authentication_app postgres
GRANT ALL ON SCHEMA public TO user1;
\c authentication_app user1