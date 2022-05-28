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

### Download the repo
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
or use the batch file provided `StartCypress.bat`

## Useful commands
### NPM
`nmp outdated`: this will show you which dependencies have updated versions available

`npm update`: this will update automatically update the dependencies which don't have major changes 

`npm install <packagename>@latest`: use this command to update a dependencie with a major change


### Other suggestions
For Valori i have created a repo with a lot of cool features already installed, for example:
- Cucumber support
- NTLM support
- Linting (EsLint)
- PDF and Word reader
- Accessibility testing (WCAG)
- Visual testing (comparing screens or elements with image snapshot)
- Database support MS-SQL and MySQL
`https://github.com/ValoriSolutions/SALUTE_Javascript_Cypress`

Contact me if you are interested.