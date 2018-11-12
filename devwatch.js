module.exports = {
  watchers: function(Monitor) {
      return [
          new Monitor('start', {
              command        : '/usr/local/bin/npm run',
              cwd            : '/react-spark',
              logFile        : '/log/react-spark',
              killSignal     : 'SIGTERM',
              minUptime      : 3000,
              spinSleepTime  : 15000,
              silent         : false,
              watch          : false,
          })
      ];
  },
};
