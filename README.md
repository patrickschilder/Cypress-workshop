# Cypress workshop

## Installation
The installtion instructions are mainly for setting up the framework on windows.

### Download NodeJs
https://nodejs.org

Download and install

Set Environment variable (run as admin !!):
```
setx /M NODE_HOME "C:\Program Files\nodejs"
```

Go to the folder where you want to setup up your framework. For example:
```
C:\Projects
```
There put a copy of this repo by downloading the zip (only clone if you want to make changes to the project itself)

### Install Cypress
Run the following command
```
npm install
```

## Run Cypress tool
To start the Cypress console run the following command
```
npx cypress open
```

## Useful commands
### NPM
`nmp outdated`: this will show you which dependencies have updated versions available

`npm update`: this will update automatically update the dependencies which don't have major changes 

`npm install <packagename>@latest`: use this command to update a dependencie with a major change



