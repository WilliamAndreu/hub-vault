const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
    const targetPath = './src/core/environments/environment.prod.ts';
  // Load node modules
    const colors = require('colors');
    const appVersion = require('../../package.json').version;
    require('dotenv').config({
      path: 'src/environments/.env'
    });
  // `environment.ts` file structure
    const envConfigFile = `export const environment = {
    production: true,
    apiBaseUrl: '${process.env.GBT_TOKEN}',
    cryptoKey: '${process.env.CRYPTO_KEY}',
    gitHubToken: '${process.env.GBT_TOKEN}',
    mainDirectories: [
      {
        directoryName: "Angular",
        directoryPath: "angular",
        icon: "assets/angular.webp"
      },
      
      {
        directoryName: "Flutter",
        directoryPath: "flutter",
        icon: "assets/flutter.webp"
      }
    ]


  };
  `;
    console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
    writeFile(targetPath, envConfigFile, (err) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
      }
    });
  };
  
  setEnv();
  