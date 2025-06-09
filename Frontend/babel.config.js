module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Necessário para o expo-router reconhecer os atalhos de caminho.
      'expo-router/babel',
    ],
  };
};