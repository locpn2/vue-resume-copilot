<template>
  <div class="contact-page">
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Liên Hệ</h1>
        <div class="page-line" aria-hidden="true"></div>
        <p class="page-subtitle">
          Hãy kết nối với tôi để thảo luận về cơ hội hợp tác hoặc dự án mới
        </p>
      </div>
      
      <div class="contact-content">
        <!-- Contact Information -->
        <div class="contact-info">
          <h2 class="section-title">Thông Tin Liên Hệ</h2>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h3>Email</h3>
                <a 
                  :href="`mailto:${personalInfo.email}`"
                  class="contact-link"
                  :aria-label="`Gửi email đến ${personalInfo.email}`"
                >
                  {{ personalInfo.email }}
                </a>
                <p>Phản hồi trong vòng 24 giờ</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">📱</div>
              <div class="contact-details">
                <h3>Điện thoại</h3>
                <a 
                  :href="`tel:${personalInfo.phone}`"
                  class="contact-link"
                  :aria-label="`Gọi điện đến ${personalInfo.phone}`"
                >
                  {{ personalInfo.phone }}
                </a>
                <p>Sẵn sàng từ 9:00 - 18:00</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h3>Địa điểm</h3>
                <span class="contact-text">{{ personalInfo.location }}</span>
                <p>Có thể làm việc remote</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="social-section">
            <h3 class="social-title">Kết nối qua mạng xã hội</h3>
            <div class="social-links">
              <a 
                :href="personalInfo.socialLinks.github"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link github"
                aria-label="Xem GitHub profile"
                @click="logSocialClick('github')"
              >
                <span class="social-icon">🔗</span>
                <span>GitHub</span>
                <span class="social-desc">Xem source code</span>
              </a>

              <a 
                :href="personalInfo.socialLinks.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link linkedin"
                aria-label="Xem LinkedIn profile"
                @click="logSocialClick('linkedin')"
              >
                <span class="social-icon">💼</span>
                <span>LinkedIn</span>
                <span class="social-desc">Kết nối chuyên nghiệp</span>
              </a>

              <a 
                :href="personalInfo.socialLinks.portfolio"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link portfolio"
                aria-label="Xem Portfolio website"
                @click="logSocialClick('portfolio')"
              >
                <span class="social-icon">🌐</span>
                <span>Portfolio</span>
                <span class="social-desc">Xem thêm dự án</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-section">
          <h2 class="section-title">Gửi Tin Nhắn</h2>
          
          <form @submit.prevent="submitForm" class="contact-form" novalidate>
            <div class="form-group">
              <label for="name" class="form-label">Họ và tên *</label>
              <input 
                type="text" 
                id="name"
                v-model="form.name"
                class="form-input"
                :class="{ error: errors.name }"
                required
                aria-describedby="name-error"
                @blur="validateField('name')"
              />
              <span v-if="errors.name" id="name-error" class="error-message" role="alert">
                {{ errors.name }}
              </span>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email *</label>
              <input 
                type="email" 
                id="email"
                v-model="form.email"
                class="form-input"
                :class="{ error: errors.email }"
                required
                aria-describedby="email-error"
                @blur="validateField('email')"
              />
              <span v-if="errors.email" id="email-error" class="error-message" role="alert">
                {{ errors.email }}
              </span>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Chủ đề *</label>
              <select 
                id="subject"
                v-model="form.subject"
                class="form-select"
                :class="{ error: errors.subject }"
                required
                aria-describedby="subject-error"
                @blur="validateField('subject')"
              >
                <option value="">Chọn chủ đề</option>
                <option value="job-opportunity">Cơ hội việc làm</option>
                <option value="project-collaboration">Hợp tác dự án</option>
                <option value="freelance-work">Freelance</option>
                <option value="consultation">Tư vấn</option>
                <option value="other">Khác</option>
              </select>
              <span v-if="errors.subject" id="subject-error" class="error-message" role="alert">
                {{ errors.subject }}
              </span>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Tin nhắn *</label>
              <textarea 
                id="message"
                v-model="form.message"
                class="form-textarea"
                :class="{ error: errors.message }"
                rows="5"
                required
                aria-describedby="message-error"
                @blur="validateField('message')"
                placeholder="Mô tả chi tiết về yêu cầu của bạn..."
              ></textarea>
              <span v-if="errors.message" id="message-error" class="error-message" role="alert">
                {{ errors.message }}
              </span>
            </div>

            <button 
              type="submit" 
              class="submit-btn"
              :disabled="isSubmitting"
              :aria-label="isSubmitting ? 'Đang gửi tin nhắn' : 'Gửi tin nhắn'"
            >
              <span v-if="!isSubmitting">
                <span class="btn-icon">📤</span>
                Gửi tin nhắn
              </span>
              <span v-else>
                <span class="btn-icon loading">⏳</span>
                Đang gửi...
              </span>
            </button>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="submitStatus === 'success'" class="status-message success" role="alert">
            <span class="status-icon">✅</span>
            <div>
              <h4>Gửi thành công!</h4>
              <p>Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong vòng 24 giờ.</p>
            </div>
          </div>

          <div v-if="submitStatus === 'error'" class="status-message error" role="alert">
            <span class="status-icon">❌</span>
            <div>
              <h4>Có lỗi xảy ra!</h4>
              <p>Vui lòng thử lại hoặc liên hệ trực tiếp qua email.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section">
        <h2 class="section-title">Câu Hỏi Thường Gặp</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3>🤝 Bạn có nhận freelance không?</h3>
            <p>Có, tôi nhận các dự án freelance phù hợp với kỹ năng và thời gian. Hãy liên hệ để thảo luận chi tiết.</p>
          </div>
          
          <div class="faq-item">
            <h3>⏰ Thời gian phản hồi như thế nào?</h3>
            <p>Tôi thường phản hồi email trong vòng 24 giờ, trừ cuối tuần và ngày lễ.</p>
          </div>
          
          <div class="faq-item">
            <h3>💼 Bạn có sẵn sàng làm việc remote không?</h3>
            <p>Có, tôi có kinh nghiệm làm việc remote và có thể hợp tác với team ở bất kỳ đâu.</p>
          </div>
          
          <div class="faq-item">
            <h3>🛠️ Công nghệ nào bạn chuyên về?</h3>
            <p>Tôi chuyên về Vue.js, React, TypeScript và các công nghệ frontend hiện đại.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, reactive, ref } from 'vue'
import { resumeData } from '@/data/resumeData.js'

const logger = inject('logger')
const { personalInfo } = resumeData

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success', 'error', or null

// Validation rules
const validateField = (field) => {
  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        errors.name = 'Vui lòng nhập họ và tên'
      } else if (form.name.trim().length < 2) {
        errors.name = 'Họ và tên phải có ít nhất 2 ký tự'
      } else {
        delete errors.name
      }
      break
    
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim()) {
        errors.email = 'Vui lòng nhập email'
      } else if (!emailRegex.test(form.email)) {
        errors.email = 'Email không hợp lệ'
      } else {
        delete errors.email
      }
      break
    
    case 'subject':
      if (!form.subject) {
        errors.subject = 'Vui lòng chọn chủ đề'
      } else {
        delete errors.subject
      }
      break
    
    case 'message':
      if (!form.message.trim()) {
        errors.message = 'Vui lòng nhập tin nhắn'
      } else if (form.message.trim().length < 10) {
        errors.message = 'Tin nhắn phải có ít nhất 10 ký tự'
      } else {
        delete errors.message
      }
      break
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('subject')
  validateField('message')
  return Object.keys(errors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    logger?.warn('Form validation failed', { errors }, 'ContactPage')
    return
  }

  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock success (in real app, this would be an actual API call)
    logger?.info('Contact form submitted', { 
      subject: form.subject,
      messageLength: form.message.length 
    }, 'ContactPage')
    
    submitStatus.value = 'success'
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
  } catch (error) {
    logger?.error('Contact form submission failed', { error }, 'ContactPage')
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const logSocialClick = (platform) => {
  logger?.logUserInteraction('social_link_click', platform, 'ContactPage')
}

onMounted(() => {
  logger?.logPageView('/contact')
  logger?.info('ContactPage mounted', {}, 'ContactPage')
})
</script>

<style scoped>
/* Glassmorphism Background - ContactPage */
.contact-page {
  min-height: 100vh;
  position: relative;
  width: 100%;
  background: 
    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%),
    radial-gradient(circle at 40% 60%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 60% 40%, rgba(255, 20, 147, 0.3) 0%, transparent 50%);
  background-attachment: fixed;
  background-size: 100% 100%, 100% 100%, 100% 100%;
  padding: 6rem 2rem 2rem;
}

.contact-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, transparent 30%, rgba(255, 255, 255, 0.04) 50%, transparent 70%),
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
  animation: contactBackgroundShift 40s ease-in-out infinite;
}

@keyframes contactBackgroundShift {
  0%, 100% { 
    background-position: 0% 50%, 20% 80%, 80% 20%; 
  }
  50% { 
    background-position: 100% 50%, 80% 20%, 20% 80%; 
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
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Contact Content - Enhanced */
.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Contact Info - Enhanced */
.contact-info {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: fit-content;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.contact-methods {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-method {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(15px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.contact-link {
  color: #f093fb;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.contact-link:hover,
.contact-link:focus {
  color: #3F5EFB;
  text-decoration: underline;
}

.contact-text {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.contact-details p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-top: 0.25rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Social Links - Enhanced */
.social-section {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
}

.social-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.social-links {
  display: grid;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.social-link:hover,
.social-link:focus {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  transform: translateX(5px);
  box-shadow: 
    0 6px 20px rgba(63, 94, 251, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.social-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.social-link span:nth-child(2) {
  font-weight: 600;
  font-size: 1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.social-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-left: auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Contact Form - Enhanced */
.contact-form-section {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.contact-form {
  display: grid;
  gap: 1.5rem;
}

.form-group {
  display: grid;
  gap: 0.5rem;
}

.form-label {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.form-input,
.form-select,
.form-textarea {
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(15px);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3F5EFB;
  box-shadow: 
    0 0 0 3px rgba(63, 94, 251, 0.3),
    0 6px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #FC466B;
  box-shadow: 
    0 0 0 3px rgba(252, 70, 107, 0.3),
    0 4px 15px rgba(252, 70, 107, 0.2);
}

.error-message {
  color: #f093fb;
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.submit-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 50%, #f093fb 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  box-shadow: 
    0 4px 15px rgba(63, 94, 251, 0.4),
    0 0 20px rgba(240, 147, 251, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(63, 94, 251, 0.5),
    0 0 30px rgba(240, 147, 251, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 1.1rem;
}

.btn-icon.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Status Messages - Enhanced */
.status-message {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: 16px;
  margin-top: 1.5rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.status-message.success {
  background: 
    linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 100%);
}

.status-message.error {
  background: 
    linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.1) 100%);
}

.status-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.status-message h4 {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.status-message p {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* FAQ Section - Enhanced */
.faq-section {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(25px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.faq-item:hover {
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  transform: translateY(-3px);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.faq-item h3 {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.faq-item p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (min-width: 768px) {
  .page-container {
    padding: 0 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .contact-page {
    padding: 6rem 3rem 2rem;
  }
  
  .page-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1440px) {
  .contact-page {
    padding: 6rem 4rem 2rem;
  }
  
  .page-container {
    padding: 0 4rem;
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 4rem 1rem 2rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info,
  .contact-form-section,
  .faq-section {
    padding: 2rem;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
  }

  .social-link {
    flex-direction: column;
    text-align: center;
  }

  .social-desc {
    margin-left: 0;
  }
}

/* Focus styles for accessibility */
*:focus {
  outline: 3px solid #f093fb;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .contact-info,
  .contact-form-section,
  .faq-section {
    border: 2px solid white;
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    border: 2px solid currentColor;
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
  
  .btn-icon.loading,
  .contact-page::before {
    animation: none;
  }
}
</style>