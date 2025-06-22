// Dữ liệu CV mẫu cho Resume Copilot
export const resumeData = {
  personalInfo: {
    name: 'Nguyễn Văn A',
    title: 'Frontend Developer',
    email: 'nguyenvana@example.com',
    phone: '+84 123 456 789',
    location: 'Hồ Chí Minh, Việt Nam',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    summary: 'Lập trình viên Frontend với 3+ năm kinh nghiệm phát triển ứng dụng web hiện đại sử dụng Vue.js, React và các công nghệ tiên tiến.'
  },
  
  experience: [
    {
      id: 1,
      company: 'Tech Solutions Ltd.',
      position: 'Senior Frontend Developer',
      duration: '2022 - Hiện tại',
      description: 'Phát triển và duy trì các ứng dụng web quy mô lớn sử dụng Vue.js và React. Tối ưu hóa hiệu suất và trải nghiệm người dùng.',
      achievements: [
        'Cải thiện tốc độ tải trang 40%',
        'Dẫn dắt team 5 developers',
        'Triển khai CI/CD pipeline'
      ]
    },
    {
      id: 2,
      company: 'Digital Agency Co.',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      description: 'Xây dựng giao diện người dùng responsive và tương tác cao cho các dự án e-commerce và corporate websites.',
      achievements: [
        'Hoàn thành 15+ dự án thành công',
        'Tích hợp API và third-party services',
        'Mentor cho junior developers'
      ]
    }
  ],

  skills: [
    { name: 'Vue.js', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'JavaScript/ES6+', level: 88, category: 'Programming' },
    { name: 'TypeScript', level: 80, category: 'Programming' },
    { name: 'HTML5/CSS3', level: 92, category: 'Frontend' },
    { name: 'Sass/SCSS', level: 85, category: 'Styling' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'Git/GitHub', level: 88, category: 'Tools' },
    { name: 'Webpack/Vite', level: 82, category: 'Tools' },
    { name: 'REST API', level: 85, category: 'Backend' }
  ],

  projects: [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Nền tảng thương mại điện tử với Vue.js và Node.js',
      technologies: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
      link: 'https://github.com/example/ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'Ứng dụng quản lý công việc với real-time updates',
      technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL'],
      link: 'https://github.com/example/taskmanager',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],

  chatSuggestions: [
    'Làm thế nào để cải thiện CV của tôi?',
    'Tôi nên thêm kỹ năng nào vào CV?',
    'Cách viết mô tả kinh nghiệm làm việc hiệu quả?',
    'Định dạng CV nào phù hợp với ngành IT?',
    'Làm sao để CV nổi bật với nhà tuyển dụng?'
  ]
}