# Lint
A Mint clone designed to further understanding of the [Plaid](https://plaid.com/) API

## Prerequisites
- Install **node**
- Install **npm**
- Install **docker**
- Install **docker-compose**

## Setup 
Download this source code into a working directory.

- Install the requirements using npm for the client:

    ```cd Client && npm install```

- Install the requirements using npm for the server:

    ```cd Server && npm install```

This will install all the required packages and libraries for using both the Node.js Server and the React Client.

- Update both of the **key.js** files (one in Client and in Server) to use the correct Plaid credentials supplied to you by Plaid

Update the MonogoDB server connection url
    ```cd Server```
- Open **app.js**
- Edit the mongoose.connect() string to use the IP and PORT your mongo server is running on

>Note: In my workflow (using docker-compose) I run my mongo server on PORT 9090 instead of the default mongodb port of 27017
> so my connection string would be __mongodb://localhost:9090/users?authSource=admin__

## Usage

Run the MongoDB server using the following command:

```cd Server && docker-compose up```

Run the server using the following command:

```cd Server && npm start```

The server will run on localhost:3001

Start the client using the following command:

```cd Client && npm start```

Visit localhost:3000 to see the running website!


## Series
Checkout my [YouTube](https://www.youtube.com/watch?v=CIGd9JvmIZ0&t=6s) channel where I release videos as I develop the app.


## Licensing

- Source code Copyright &copy; 2020 ShandonCodes.

  ![GPL3](https://www.gnu.org/graphics/lgplv3-147x51.png)

  This program is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with this program; if not, see <http://www.gnu.org/licenses>.