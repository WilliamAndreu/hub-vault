const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    const targetPath = './src/core/environments/environment.prod.ts';
    const envConfigFile = `export const environment = {
    production: true,
    apiBaseUrl: '${process.env.API_BASE_URL}',
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
    writeFile(targetPath, envConfigFile, (err) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
      }
    });
  };
  
  setEnv();
  