// src/data/xuandieuData.js
import avatar from '../assets/XD.jpg';

export const personalInfo = {
  name: "Xuân Diệu",
  title: "Sinh viên Ngân hàng | Chuyên viên tài chính tương lai",
  description: "Đam mê phân tích tài chính, Excel VBA, quản trị rủi ro và xây dựng mô hình dự báo. Luôn học hỏi, tỉ mỉ và yêu màu pastel!",
  about: "Xin chào! Mình là Xuân Diệu – sinh viên năm cuối ngành Ngân hàng tại Đại học Công nghiệp TP.HCM. Mình có nền tảng vững chắc về tài chính doanh nghiệp, phân tích báo cáo tài chính, Excel nâng cao và quản trị rủi ro. Mình từng đạt giải Nhì cuộc thi Phân tích tài chính sinh viên và đang tìm kiếm cơ hội thực tập tại ngân hàng hoặc tổ chức tài chính uy tín.",
  photo: avatar,
  email: "xuandieu.finance@gmail.com",
  phone: "+84 987 654 321",
  location: "Bình Dương, Việt Nam",
  social: {
    linkedin: "https://linkedin.com/in/xuandieu",
    github: "https://github.com/xuandieu",
  },
};

// HỌC VẤN
export const education = [
  {
    school: "Đại học Công nghiệp TP.HCM",
    degree: "Cử nhân Ngân hàng",
    period: "2021 – 2025",
    description: "GPA: 3.6/4.0 | Lớp trưởng 2 năm | Học bổng loại Giỏi",
  },
  {
    school: "THPT Chuyên Lê Hồng Phong",
    degree: "Chuyên Toán",
    period: "2018 – 2021",
    description: "Tốt nghiệp loại Giỏi | Giải Ba HSG Toán cấp tỉnh",
  },
];

// KỸ NĂNG – ĐẦY ĐỦ + CUTE
export const skills = [
  { name: "Phân tích tài chính", level: 88 },
  { name: "Excel & VBA", level: 92 },
  { name: "Quản trị rủi ro", level: 85 },
  { name: "Power BI", level: 78 },
  { name: "SQL", level: 75 },
  { name: "Python (Pandas, NumPy)", level: 70 },
  { name: "Tiếng Anh (IELTS 7.0)", level: 80 },
  { name: "Làm việc nhóm", level: 95 },
];

// DỰ ÁN – NHIỀU + CHI TIẾT
export const projects = [
  {
    title: "Phân tích BCTC VCB (2021-2023)",
    description: "Phân tích ROE, ROA, NIM, CIR. Xây dựng dashboard Power BI theo dõi chỉ số hiệu quả.",
    link: "https://github.com/xuandieu/vcb-analysis",
  },
  {
    title: "Mô hình dự báo rủi ro tín dụng",
    description: "Dùng Python (Logistic Regression) dự báo khách hàng xấu. Độ chính xác: 87%.",
    link: "https://github.com/xuandieu/credit-risk-model",
  },
  {
    title: "Tối ưu danh mục đầu tư",
    description: "Áp dụng mô hình Markowitz, Excel Solver. Giảm rủi ro 15%, tăng lợi nhuận 8%.",
    link: "https://github.com/xuandieu/portfolio-optimization",
  },
  {
    title: "Phân tích NIM & CIR 5 ngân hàng lớn",
    description: "So sánh VCB, BIDV, CTG, ACB, MBB. Báo cáo 15 trang + biểu đồ trực quan.",
    link: "https://github.com/xuandieu/bank-comparison",
  },
];

// KINH NGHIỆM (TÙY CHỌN – DỄ MỞ RỘNG)
export const experiences = [
  {
    company: "Ngân hàng TMCP Á Châu (ACB)",
    position: "Thực tập sinh Phân tích tín dụng",
    period: "06/2024 – 08/2024",
    description: "Hỗ trợ đánh giá hồ sơ vay, phân tích BCTC doanh nghiệp nhỏ.",
  },
  {
    company: "Câu lạc bộ Tài chính IUH",
    position: "Phó ban Sự kiện",
    period: "2022 – nay",
    description: "Tổ chức 3 hội thảo tài chính, thu hút 200+ sinh viên.",
  },
];

// CHỨNG CHỈ
export const certificates = [
  { name: "CFA Level 1 Candidate", issuer: "CFA Institute", year: "2025" },
  { name: "Excel Specialist", issuer: "Microsoft", year: "2023" },
  { name: "IELTS 7.0", issuer: "British Council", year: "2023" },
];