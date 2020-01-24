# Node.js React App for Azure

## Get Started

1. Clone this repository

```bash
  git clone https://github.com/paulohenriquepm/node-react-app-azure.git
```
2. Change into the directory that was cloned and run npm install

```bash
  cd node-react-app-azure
  npm install
```

## Running the App

In development, the app runs via two separate process...

### Start the Express Server

```bash
node server/server.js
```

### Start Create React App

In a different terminal tab...

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![alt text](https://imgur.com/7wZ1YD7.png)

## Building for Production

First of all, you need to change the baseURL of axios API in `src/services/Api.js` <br />
to your web app link.

![alt text](https://imgur.com/cVVVOmM.png)

Now, you need to build your React App and move the folder into `server` folder

```bash
npm build
mv build server
```
Everything in the `server` folder is what is needed in production.

## Deploying to Azure 

To be able to do this, we will use the **Azure App Service** extension on VSCode

![alt text](https://imgur.com/oiujxco.png)

You will be asked to login with your azure account <br />
Once you done that, click in the up blue arrow and browse to the `server` folder <br />
Then select the app service that you want to deploy.

![alt text](https://imgur.com/fAfrqYm.png)
