
module.exports = function (config) {

  var watchMode = process.env.WATCH === '1';
  var showCoverage = process.env.COVERAGE === '1';
  var minCoverage = Number(process.env.COVERAGE_MIN || 80);
 

  var conf = {
    
    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/browser.js',
      'test/helpers/utils/stub-logs.js',
      {
        pattern: './all-tests.js',
        watched: false,
        included: true,
        served: true
      }
    ],

    plugins: [
      require('karma-mocha'),
      require('karma-webpack'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require('karma-coverage'),
      require('karma-threshold-reporter'),
      require('karma-sourcemap-loader')
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'all-tests.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      process.env.REPORTER || 'dots'
    ].concat(showCoverage ? ['coverage', 'threshold'] : []),

    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'coverage/' },
        { type: 'lcov', subdir: 'coverage/' }
      ],
      check: {
        global: {
          lines: minCoverage,
          branches: minCoverage,
          functions: minCoverage,
          statements: minCoverage
        }
      }
    },


    // the configure thresholds
    thresholdReporter: {
      statements: minCoverage,
      branches: minCoverage,
      functions: minCoverage,
      lines: minCoverage
    },

    // web server port
    port: 9876,
    
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    
    client: {
      mocha: {
        grep: process.env.GREP
      }
    },

    //
    webpack: require('./webpack.config.js'),

    //
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_DISABLE,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome_travis_ci'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !watchMode,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  };


  if (showCoverage) {
    conf.webpack.module.preLoaders = [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|.*-test)/,
        loader: 'isparta'
      }
    ];
  }

  config.set(conf);
}
