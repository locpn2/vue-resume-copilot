// Vue Plugin cho Logging System
import { reactive } from 'vue'

// Cấu hình logging levels
const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
}

// Store cho logs (có thể mở rộng với Vuex/Pinia)
const logStore = reactive({
  logs: [],
  maxLogs: 1000
})

class Logger {
  constructor() {
    this.isDev = import.meta.env.DEV
    this.currentLevel = this.isDev ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO
  }

  // Phương thức log chính
  log(level, message, data = null, component = null) {
    if (level < this.currentLevel) return

    const logEntry = {
      timestamp: new Date().toISOString(),
      level: Object.keys(LOG_LEVELS)[level],
      message,
      data,
      component,
      userAgent: navigator.userAgent,
      url: window.location.href
    }

    // Thêm vào store
    logStore.logs.unshift(logEntry)
    if (logStore.logs.length > logStore.maxLogs) {
      logStore.logs.pop()
    }

    // Console log trong dev
    if (this.isDev) {
      const consoleMethod = this.getConsoleMethod(level)
      console[consoleMethod](`[${logEntry.level}] ${component ? `[${component}]` : ''} ${message}`, data || '')
    }

    // Gửi về server trong production (giả định)
    if (!this.isDev && level >= LOG_LEVELS.WARN) {
      this.sendToServer(logEntry)
    }
  }

  getConsoleMethod(level) {
    switch (level) {
      case LOG_LEVELS.DEBUG: return 'debug'
      case LOG_LEVELS.INFO: return 'info'
      case LOG_LEVELS.WARN: return 'warn'
      case LOG_LEVELS.ERROR: return 'error'
      default: return 'log'
    }
  }

  // Gửi log về server (mock implementation)
  async sendToServer(logEntry) {
    try {
      // Mock API call - trong thực tế sẽ gửi về backend
      console.log('Sending log to server:', logEntry)
      // await fetch('/api/logs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(logEntry)
      // })
    } catch (error) {
      console.error('Failed to send log to server:', error)
    }
  }

  // Các phương thức tiện ích
  debug(message, data, component) {
    this.log(LOG_LEVELS.DEBUG, message, data, component)
  }

  info(message, data, component) {
    this.log(LOG_LEVELS.INFO, message, data, component)
  }

  warn(message, data, component) {
    this.log(LOG_LEVELS.WARN, message, data, component)
  }

  error(message, data, component) {
    this.log(LOG_LEVELS.ERROR, message, data, component)
  }

  // Log các sự kiện đặc biệt
  logUserInteraction(action, element, component) {
    this.info('User Interaction', { action, element }, component)
  }

  logPageView(route) {
    this.info('Page View', { route, loadTime: performance.now() })
  }

  logComponentPerformance(component, renderTime) {
    this.debug('Component Performance', { component, renderTime })
  }

  logApiCall(endpoint, method, duration, status) {
    const level = status >= 400 ? LOG_LEVELS.ERROR : LOG_LEVELS.INFO
    this.log(level, 'API Call', { endpoint, method, duration, status })
  }
}

// Tạo instance logger
const logger = new Logger()

// Vue Plugin
export default {
  install(app) {
    // Thêm logger vào global properties
    app.config.globalProperties.$logger = logger
    app.provide('logger', logger)

    // Thêm directive để log user interactions
    app.directive('log-click', {
      mounted(el, binding) {
        el.addEventListener('click', () => {
          logger.logUserInteraction('click', binding.value || el.tagName, binding.arg)
        })
      }
    })

    // Error handler global
    app.config.errorHandler = (error, instance, info) => {
      logger.error('Vue Error', { error: error.message, info }, instance?.$options.name)
    }
  }
}

// Export logger instance và store
export { logger, logStore }
