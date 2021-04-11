# Getting Started

Full overview of the App 

https://youtu.be/jQR-ff8e-Vc

Open one terminal and start the api server if you don't have json-server install via 

`npm install -g json-server`

and then:

`json-server api/db.json`

Meanwhile your api-server will be ready at `http://localhost:3000/login` and `http://localhost:3000/users`

```
    {
      "username": "test",
      "password": "test@123"
    }
```

```
    {
      "name": "Tom",
      "username": "tom12345",
      "email": "tom123@test.com",
      "id": 3
    },
    {
      "id": 4,
      "name": "Hary",
      "username": "hry123",
      "email": "hry123@test.com"
    },
    {
      "name": "Adam",
      "username": "adm123",
      "email": "adm123@test.com",
      "id": 5
    },
    {
      "name": "Eve",
      "username": "eve123",
      "email": "eve@test.com",
      "id": 6
    }
    
```

  Now open another terminal and Run:
  
  `npm install`
  
  `npm start`
  
  `Y`
  
  Your App will be ready at ` http://localhost:3001`
