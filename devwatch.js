module.exports = {
  watchers: function(Monitor) {
    return [
      new Monitor('start:webpack', {
        command: '/usr/local/bin/npm run',
        cwd: '/react-spark',
        logFile: '/log/react-spark.log',
        killSignal: 'SIGTERM',
        minUptime: 3000,
        spinSleepTime: 15000,
        silent: false,
        watch: false
      })
    ]
  }
}
