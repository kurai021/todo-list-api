## Install
* Create a new Postgres database with this code:

```sql
DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;

CREATE TABLE todos (
  ID SERIAL PRIMARY KEY,
  taskname VARCHAR,
  taskdate DATE,
  picture BYTEA,
  priority VARCHAR,
  description VARCHAR,
  place VARCHAR
);
```
* Include host, port, database name, user and password in a .env file at the root project folder

```env
PGHOST=host
PGPORT=port
PGDB=database
PGUSER=user
PGPASSWORD=password
```

* Install all the dependencies

```js
npm install
```

## How-to

### Create

```bash
curl --data 'taskname=sacar la basura&taskdate=2018-10-18&picture=&priority=baja&description=test de createTask&place=en casa' \ http://localhost:3000/api/tasks
```

### Get all tasks

```bash
curl http://localhost:3000/api/tasks
```

### Get a task by ID

```bash
curl http://localhost:3000/api/tasks/1
```

### Remove task

```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

### Update (still pending)
