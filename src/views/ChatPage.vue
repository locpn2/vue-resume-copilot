<template>
  <div class="chat-page">
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">AI Copilot</h1>
        <div class="page-line"></div>
        <p class="page-subtitle">
          Trợ lý AI thông minh giúp bạn tối ưu hóa CV và tìm kiếm cơ hội nghề nghiệp
        </p>
      </div>
      
      <div class="content-placeholder">
        <div class="ai-icon">🤖</div>
        <h2>AI Chat Assistant</h2>
        <p>Tính năng AI Chat đang được phát triển và sẽ sớm ra mắt với các tính năng:</p>
        <ul class="feature-list">
          <li>💬 Tư vấn cải thiện CV</li>
          <li>🎯 Gợi ý kỹ năng cần phát triển</li>
          <li>📝 Hỗ trợ viết cover letter</li>
          <li>🔍 Tìm kiếm cơ hội việc làm</li>
          <li>📊 Phân tích thị trường lao động</li>
        </ul>
        <div class="coming-soon">
          <span class="badge">Coming Soon</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChatSuggestion from '../components/ChatSuggestion.vue'
import { chatSuggestions } from '../data.js'
import logger from '../utils/logger.js'
import { onMounted } from 'vue'

onMounted(() => {
  logger.info('ChatPage mounted')
})
</script>

<style scoped>
/* Glassmorphism Background - ChatPage */
.chat-page {
  min-height: 100vh;
  position: relative;
  width: 100%;
  background: 
    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%),
    radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 25% 75%, rgba(255, 20, 147, 0.3) 0%, transparent 50%);
  background-attachment: fixed;
  background-size: 100% 100%, 100% 100%, 100% 100%;
  padding: 6rem 2rem 2rem;
}

.chat-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%),
    radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  animation: chatBackgroundShift 45s ease-in-out infinite;
}

@keyframes chatBackgroundShift {
  0%, 100% { 
    background-position: 0% 50%, 50% 50%, 75% 25%; 
  }
  50% { 
    background-position: 100% 50%, 25% 75%, 50% 50%; 
  }
}

.page-container {
  width: 100%;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-line {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(63, 94, 251, 0.4);
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.content-placeholder {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 4rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.ai-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.content-placeholder h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
}

.content-placeholder p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list li {
  padding: 1rem 1.5rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.feature-list li:hover {
  transform: translateX(5px);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.coming-soon {
  margin-top: 2rem;
}

.badge {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  color: white;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 
    0 4px 15px rgba(63, 94, 251, 0.4),
    0 0 20px rgba(240, 147, 251, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { 
    transform: scale(1); 
    box-shadow: 
      0 4px 15px rgba(63, 94, 251, 0.4),
      0 0 20px rgba(240, 147, 251, 0.3);
  }
  50% { 
    transform: scale(1.05); 
    box-shadow: 
      0 6px 20px rgba(63, 94, 251, 0.5),
      0 0 30px rgba(240, 147, 251, 0.4);
  }
}

/* Responsive Design */
@media (min-width: 768px) {
  .page-container {
    padding: 0 2rem;
  }
  
  .feature-list {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    max-width: 600px;
  }
}

@media (min-width: 1024px) {
  .chat-page {
    padding: 6rem 3rem 2rem;
  }
  
  .page-container {
    padding: 0 3rem;
  }
  
  .content-placeholder {
    padding: 5rem 4rem;
  }
}

@media (min-width: 1440px) {
  .chat-page {
    padding: 6rem 4rem 2rem;
  }
  
  .page-container {
    padding: 0 4rem;
  }
}

@media (max-width: 768px) {
  .chat-page {
    padding: 4rem 1rem 2rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .content-placeholder {
    padding: 3rem 2rem;
  }

  .content-placeholder h2 {
    font-size: 1.6rem;
  }

  .ai-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .content-placeholder {
    padding: 2rem 1.5rem;
  }

  .content-placeholder h2 {
    font-size: 1.4rem;
  }

  .feature-list li {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 3px solid #f093fb;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .content-placeholder,
  .feature-list li {
    border: 2px solid white;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .ai-icon,
  .badge,
  .chat-page::before {
    animation: none;
  }
}
</style>