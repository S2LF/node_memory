# Base NodeJS with Express, Typescript & ESLint

![Node+TS+ESLint+Prettier](https://github.com/S2LF/Base_NodeJS/blob/master/NoExTyESPre.png)


## After clone

First, you need to `npm install`

Check if `eslint --v` 

## Create .env

Create a .env file & add MongoDB logs

## Test if it work

<details>
 <summary>Test lint warning</summary>
    Add this console.log on `server.ts` line 7
    ```
    console.log('TypeScript Eslint Prettier Starter Template!');
    ```

    Run `npm run lint`
        
    Should have a warning in src/index.ts :
    `warning  Unexpected console statement  no-console`
</details>

<details>

 <summary>Test lint error</summary>
    Todo...
</details>



Run `npm run lint-fix` to auto-fix



## Let's code !

`npm start`
