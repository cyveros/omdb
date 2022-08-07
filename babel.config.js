module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '^@omdb/(.+)': './src/app/\\1',
          '^@omdb-x/(.+)': './src/x/\\1',
          '^@omdb-ui/(.+)': './src/ui/\\1',
        },
      },
    ],
  ],
}
