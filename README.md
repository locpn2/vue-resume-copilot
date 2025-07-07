# Resume Copilot

## Giới thiệu

Resume Copilot là một ứng dụng Vue.js được thiết kế để giúp người dùng tạo và quản lý hồ sơ cá nhân (resume) một cách hiệu quả. Ứng dụng cung cấp giao diện thân thiện với người dùng cùng nhiều tính năng như các mẫu resume, biểu đồ kỹ năng, và trợ lý chat AI để đưa ra lời khuyên về resume.

## Tính năng chính

- **Mẫu resume**: Nhiều mẫu resume để người dùng lựa chọn.
- **Biểu đồ kỹ năng**: Hiển thị mức độ kỹ năng một cách trực quan.
- **Trợ lý chat AI**: Cung cấp gợi ý và lời khuyên cá nhân hóa cho resume.
- **Giao diện đa trang**: Dễ dàng điều hướng giữa các trang chính như Trang chủ, Liên hệ, và Chat.
- **Giao diện Glassmorphism**: Thiết kế hiện đại với hiệu ứng kính mờ trong suốt.
- **Logging**: Ghi lại các sự kiện quan trọng trong ứng dụng để hỗ trợ debug và theo dõi hiệu suất.
- **Unit Testing**: Đảm bảo chất lượng mã nguồn thông qua các bài kiểm tra tự động với Jest và Vue Test Utils.

## Công nghệ sử dụng

- **Vue.js**: Framework frontend chính.
- **Vue Router**: Quản lý điều hướng giữa các trang.
- **CSS Modules**: Phong cách hóa component-specific để tránh xung đột CSS.
- **Jest & Vue Test Utils**: Kiểm thử đơn vị để đảm bảo chất lượng mã.
- **Gemini 2.0**: Tích hợp AI để cung cấp lời khuyên về resume (đang phát triển).

## Tiến độ dự án

- **Hoàn thành**:
  - Thiết lập dự án và cấu hình ban đầu.
  - Triển khai giao diện Glassmorphism cho các component chính (`App.vue`, `HomeView.vue`, `AboutView.vue`, `ChatPage.vue`).
  - Thiết lập hệ thống routing cho các trang chính.
  - Tích hợp component `ChatSuggestion.vue` với dữ liệu gợi ý.
  - Triển khai module logging trong các component chính.
  - Thiết lập unit testing cho các component (`ChatSuggestion.vue`, `NavBar.vue`).
- **Đang thực hiện**:
  - Phát triển nội dung chi tiết cho các trang chính như thông tin cá nhân, kinh nghiệm, kỹ năng.
  - Tích hợp AI với Gemini 2.0 để cung cấp lời khuyên về resume.

## Cài đặt và chạy dự án

1. Clone repository này về máy của bạn.
2. Chạy lệnh `npm install` để cài đặt các dependencies.
3. Chạy lệnh `npm run dev` để khởi động server phát triển.
4. Truy cập ứng dụng tại `http://localhost:5173` (hoặc cổng được chỉ định trong terminal).

## Đóng góp

Nếu bạn muốn đóng góp vào dự án, vui lòng tạo một pull request hoặc mở một issue để thảo luận về các thay đổi bạn muốn thực hiện.

## Liên hệ

Nếu bạn có câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ qua email hoặc mở issue trên repository này.
