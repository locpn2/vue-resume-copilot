// Dữ liệu CV mẫu cho Resume Copilot - Optimized for performance
export const resumeData = {
  personalInfo: {
    name: 'Nguyễn Văn A',
    title: 'Senior Frontend Developer',
    email: 'nguyenvana@example.com',
    phone: '+84 123 456 789',
    location: 'Hồ Chí Minh, Việt Nam',
    // Optimized image with compression parameters
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&dpr=2',
    summary: 'Frontend Developer với 3+ năm kinh nghiệm phát triển ứng dụng web hiện đại. Chuyên sâu về Vue.js, React và các công nghệ tiên tiến, tập trung vào trải nghiệm người dùng tối ưu.',
    detailedSummary: 'Với kinh nghiệm 3+ năm trong lĩnh vực phát triển Frontend, tôi chuyên sâu về Vue.js ecosystem và có kinh nghiệm thực tế với React, TypeScript, và các công cụ build hiện đại. Tôi có khả năng chuyển đổi thiết kế UI/UX thành code chất lượng cao, tối ưu hóa hiệu suất ứng dụng và đảm bảo trải nghiệm người dùng tốt nhất trên mọi thiết bị.',
    socialLinks: {
      github: 'https://github.com/nguyenvana',
      linkedin: 'https://linkedin.com/in/nguyenvana',
      portfolio: 'https://nguyenvana.dev'
    }
  },
  
  experience: [
    {
      id: 1,
      company: 'Tech Solutions Ltd.',
      position: 'Senior Frontend Developer',
      duration: '01/2022 - Hiện tại',
      location: 'Hồ Chí Minh, Việt Nam',
      description: 'Phát triển và duy trì các ứng dụng web quy mô lớn phục vụ hơn 100,000 người dùng. Chịu trách nhiệm thiết kế kiến trúc frontend, tối ưu hóa hiệu suất và dẫn dắt team phát triển.',
      responsibilities: [
        'Phát triển SPA phức tạp sử dụng Vue.js 3 và Composition API',
        'Tối ưu hóa hiệu suất ứng dụng, giảm thời gian tải trang xuống 40%',
        'Thiết kế và triển khai Design System cho toàn bộ sản phẩm',
        'Mentor và đào tạo 5 junior developers',
        'Triển khai CI/CD pipeline với GitLab và Docker'
      ],
      achievements: [
        'Cải thiện Core Web Vitals score từ 65 lên 95 điểm',
        'Giảm 30% bug reports thông qua việc áp dụng TypeScript',
        'Tăng 25% productivity của team thông qua code review process'
      ],
      technologies: ['Vue.js 3', 'TypeScript', 'Vite', 'Pinia', 'Tailwind CSS', 'Jest', 'Cypress']
    },
    {
      id: 2,
      company: 'Digital Agency Co.',
      position: 'Frontend Developer',
      duration: '06/2020 - 12/2021',
      location: 'Hồ Chí Minh, Việt Nam',
      description: 'Xây dựng giao diện người dùng responsive và tương tác cao cho các dự án e-commerce và corporate websites. Làm việc trực tiếp với khách hàng và team design.',
      responsibilities: [
        'Phát triển 15+ website responsive từ Figma designs',
        'Tích hợp RESTful APIs và third-party services',
        'Tối ưu hóa SEO và accessibility cho các website',
        'Hỗ trợ và đào tạo junior developers'
      ],
      achievements: [
        'Hoàn thành 100% dự án đúng deadline',
        'Đạt 98+ điểm Lighthouse cho tất cả projects',
        'Nhận được 5-star rating từ 90% khách hàng'
      ],
      technologies: ['Vue.js 2', 'React', 'JavaScript ES6+', 'SCSS', 'Webpack', 'PHP Laravel']
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Junior Frontend Developer',
      duration: '03/2020 - 05/2020',
      location: 'Hồ Chí Minh, Việt Nam',
      description: 'Vị trí đầu tiên trong ngành IT, tham gia phát triển MVP cho startup fintech. Học hỏi và áp dụng các best practices trong phát triển web.',
      responsibilities: [
        'Phát triển components tái sử dụng với React',
        'Viết unit tests với Jest và React Testing Library',
        'Tham gia code review và daily standup meetings'
      ],
      achievements: [
        'Hoàn thành onboarding process trong 2 tuần',
        'Đóng góp 200+ commits trong 3 tháng làm việc'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'Agile/Scrum']
    }
  ],

  skills: [
    // Frontend Frameworks & Libraries
    { name: 'Vue.js', level: 95, category: 'Frontend Frameworks', experience: '3+ năm' },
    { name: 'React', level: 88, category: 'Frontend Frameworks', experience: '2+ năm' },
    { name: 'Nuxt.js', level: 85, category: 'Frontend Frameworks', experience: '1+ năm' },
    { name: 'Next.js', level: 80, category: 'Frontend Frameworks', experience: '1+ năm' },
    
    // Programming Languages
    { name: 'JavaScript/ES6+', level: 92, category: 'Programming Languages', experience: '3+ năm' },
    { name: 'TypeScript', level: 88, category: 'Programming Languages', experience: '2+ năm' },
    { name: 'HTML5', level: 95, category: 'Programming Languages', experience: '3+ năm' },
    { name: 'CSS3', level: 90, category: 'Programming Languages', experience: '3+ năm' },
    
    // Styling & UI
    { name: 'Tailwind CSS', level: 90, category: 'Styling & UI', experience: '2+ năm' },
    { name: 'Sass/SCSS', level: 88, category: 'Styling & UI', experience: '3+ năm' },
    { name: 'CSS Modules', level: 85, category: 'Styling & UI', experience: '2+ năm' },
    { name: 'Styled Components', level: 82, category: 'Styling & UI', experience: '1+ năm' },
    
    // State Management
    { name: 'Vuex/Pinia', level: 90, category: 'State Management', experience: '2+ năm' },
    { name: 'Redux', level: 80, category: 'State Management', experience: '1+ năm' },
    
    // Build Tools & Bundlers
    { name: 'Vite', level: 88, category: 'Build Tools', experience: '2+ năm' },
    { name: 'Webpack', level: 85, category: 'Build Tools', experience: '2+ năm' },
    { name: 'Rollup', level: 75, category: 'Build Tools', experience: '1+ năm' },
    
    // Testing
    { name: 'Jest', level: 85, category: 'Testing', experience: '2+ năm' },
    { name: 'Vitest', level: 88, category: 'Testing', experience: '1+ năm' },
    { name: 'Cypress', level: 80, category: 'Testing', experience: '1+ năm' },
    { name: 'Vue Test Utils', level: 90, category: 'Testing', experience: '2+ năm' },
    
    // Backend & APIs
    { name: 'Node.js', level: 78, category: 'Backend', experience: '1+ năm' },
    { name: 'Express.js', level: 75, category: 'Backend', experience: '1+ năm' },
    { name: 'REST API', level: 88, category: 'Backend', experience: '3+ năm' },
    { name: 'GraphQL', level: 70, category: 'Backend', experience: '6 tháng' },
    
    // Database
    { name: 'MongoDB', level: 75, category: 'Database', experience: '1+ năm' },
    { name: 'PostgreSQL', level: 70, category: 'Database', experience: '6 tháng' },
    { name: 'Firebase', level: 80, category: 'Database', experience: '1+ năm' },
    
    // DevOps & Tools
    { name: 'Git/GitHub', level: 92, category: 'DevOps & Tools', experience: '3+ năm' },
    { name: 'Docker', level: 75, category: 'DevOps & Tools', experience: '1+ năm' },
    { name: 'CI/CD', level: 80, category: 'DevOps & Tools', experience: '1+ năm' },
    { name: 'AWS', level: 70, category: 'DevOps & Tools', experience: '6 tháng' },
    
    // Soft Skills
    { name: 'Team Leadership', level: 85, category: 'Soft Skills', experience: '1+ năm' },
    { name: 'Problem Solving', level: 90, category: 'Soft Skills', experience: '3+ năm' },
    { name: 'Communication', level: 88, category: 'Soft Skills', experience: '3+ năm' },
    { name: 'Agile/Scrum', level: 85, category: 'Soft Skills', experience: '2+ năm' }
  ],

  projects: [
    {
      id: 1,
      name: 'E-commerce Platform - VueShop',
      description: 'Nền tảng thương mại điện tử đầy đủ tính năng với quản lý sản phẩm, giỏ hàng, thanh toán và admin dashboard.',
      detailedDescription: 'Dự án e-commerce được xây dựng từ đầu với Vue.js 3, tích hợp payment gateway, quản lý inventory real-time và analytics dashboard. Sử dụng microservices architecture với Node.js backend.',
      technologies: ['Vue.js 3', 'Pinia', 'Vue Router', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
      features: [
        'Quản lý sản phẩm và danh mục',
        'Giỏ hàng và wishlist',
        'Tích hợp thanh toán Stripe',
        'Admin dashboard với analytics',
        'Real-time notifications',
        'Multi-language support'
      ],
      links: {
        demo: 'https://vueshop-demo.netlify.app',
        github: 'https://github.com/nguyenvana/vueshop',
        case_study: 'https://nguyenvana.dev/projects/vueshop'
      },
      // Optimized image with compression
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'Completed',
      duration: '3 tháng',
      role: 'Full-stack Developer'
    },
    {
      id: 2,
      name: 'Task Management App - TaskFlow',
      description: 'Ứng dụng quản lý công việc với tính năng real-time collaboration, drag & drop, notifications và team management.',
      detailedDescription: 'TaskFlow là ứng dụng quản lý dự án được thiết kế để tăng productivity cho các team nhỏ. Sử dụng Socket.io cho real-time updates và drag-and-drop API cho trải nghiệm người dùng mượt mà.',
      technologies: ['React', 'Redux Toolkit', 'Socket.io', 'Express.js', 'PostgreSQL', 'JWT', 'Material-UI'],
      features: [
        'Kanban board với drag & drop',
        'Real-time collaboration',
        'Team và project management',
        'Time tracking',
        'File attachments',
        'Email notifications'
      ],
      links: {
        demo: 'https://taskflow-app.vercel.app',
        github: 'https://github.com/nguyenvana/taskflow',
        case_study: 'https://nguyenvana.dev/projects/taskflow'
      },
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'Completed',
      duration: '2 tháng',
      role: 'Frontend Lead'
    },
    {
      id: 3,
      name: 'Weather Dashboard - WeatherVue',
      description: 'Dashboard thời tiết với dự báo 7 ngày, maps tương tác, charts và khả năng lưu địa điểm yêu thích.',
      detailedDescription: 'Ứng dụng thời tiết hiện đại với giao diện đẹp mắt, tích hợp OpenWeatherMap API và Mapbox. Có tính năng offline-first với service worker và PWA capabilities.',
      technologies: ['Vue.js 3', 'Composition API', 'Chart.js', 'Mapbox GL', 'Service Worker', 'IndexedDB', 'Vite PWA'],
      features: [
        'Dự báo thời tiết 7 ngày',
        'Interactive weather maps',
        'Geolocation support',
        'Offline functionality',
        'PWA với push notifications',
        'Dark/Light theme'
      ],
      links: {
        demo: 'https://weathervue-app.netlify.app',
        github: 'https://github.com/nguyenvana/weathervue'
      },
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'Completed',
      duration: '1 tháng',
      role: 'Solo Developer'
    },
    {
      id: 4,
      name: 'Portfolio Website - Personal Brand',
      description: 'Website portfolio cá nhân với blog tích hợp, showcase projects và contact form. Tối ưu SEO và performance.',
      detailedDescription: 'Portfolio website được xây dựng với Nuxt.js để tối ưu SEO, tích hợp headless CMS cho blog và contact form với email notifications. Sử dụng modern web technologies và best practices.',
      technologies: ['Nuxt.js', 'Vue.js 3', 'Tailwind CSS', 'Strapi CMS', 'Cloudinary', 'Netlify Forms'],
      features: [
        'Static site generation',
        'Blog với markdown support',
        'Project showcase',
        'Contact form với validation',
        'SEO optimized',
        'Analytics integration'
      ],
      links: {
        demo: 'https://nguyenvana.dev',
        github: 'https://github.com/nguyenvana/portfolio'
      },
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'Live',
      duration: '2 tuần',
      role: 'Designer & Developer'
    }
  ],

  education: [
    {
      id: 1,
      institution: 'Đại học Bách Khoa TP.HCM',
      degree: 'Cử nhân Khoa học Máy tính',
      duration: '2016 - 2020',
      gpa: '3.2/4.0',
      relevant_courses: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering'
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      name: 'Vue.js Certified Developer',
      issuer: 'Vue School',
      date: '2023',
      credential_url: 'https://vueschool.io/certificates/123'
    },
    {
      id: 2,
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential_url: 'https://aws.amazon.com/verification/123'
    }
  ],

  chatSuggestions: [
    'Làm thế nào để cải thiện CV của tôi?',
    'Tôi nên thêm kỹ năng nào vào CV?',
    'Cách viết mô tả kinh nghiệm làm việc hiệu quả?',
    'Định dạng CV nào phù hợp với ngành IT?',
    'Làm sao để CV nổi bật với nhà tuyển dụng?',
    'Tôi có nên thêm portfolio vào CV không?',
    'Cách highlight technical skills trong CV?',
    'Làm thế nào để viết cover letter hiệu quả?'
  ]
}