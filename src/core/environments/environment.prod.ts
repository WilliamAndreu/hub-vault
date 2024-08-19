export const environment = {
  production: true,
  apiBaseUrl: process.env['API_BASE_URL'],
  cryptoKey: process.env['CRYPTO_KEY'],
  gitHubToken: process.env['GB-TOKEN'],
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
