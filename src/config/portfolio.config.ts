// Portfolio Configuration - Customize everything from this single file
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "tuiduc",
    title: "GPT Developer",
    tagline: "Xin chào! Mình là tuiducios ( Nguyễn Đức ), một developer nhỏ cũng như là chủ thương hiệu 666 CHEAT & cheatlibrary.xyz 🦾",
    email: "lewisvn1234@gmail.com",
    location: "vi/VN",
    avatar: "/src/assets/avatar.png"
  },

  // SEO & Meta
  seo: {
    title: "tuiducios - A GPT Developer",
    description: "Professional bot developer creating modern applications. View my portfolio showcasing recent projects and technical expertise.",
    keywords: ["GPT developer,", "tuiducios", "tuiduc", "666cheat", "cheatlibrary.xyz"],
    ogImage: "/og-image.png"
  },

  // Theme & Design
  theme: {
    primaryColor: "120 100% 50%", // Terminal green
    accentColor: "0 0% 100%", // White
    backgroundColor: "0 0% 4%", // Deep black
    terminalColors: {
      window: "0 0% 12%",
      border: "0 0% 20%",
      header: "0 0% 8%"
    },
    animations: {
      typingSpeed: 50,
      staggerDelay: 0.1,
      transitionDuration: 300,
      hoverScale: 1.05
    }
  },

  // Navigation
  navigation: {
    showScrollProgress: true,
    smoothScroll: true,
    sections: ["Giới Thiệu", "Kĩ Năng", "Dự Án", "Liên Hệ"]
  },

  // Skills Configuration
  skills: [
    { name: "HTML & CSS", category: "Frontend", level: 95 },
    { name: "TypeScript", category: "Language", level: 90 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Python", category: "Language", level: 80 },
    { name: "Databases", category: "Backend", level: 68 },
    { name: "UI/UX", category: "Design", level: 95 },
  ],

  // Projects Configuration
  projects: [
    {
      name: "666Cheat VN",
      year: "2025",
      description: "Thương hiệu chuyên về hack&cheat các thể loại game khác nhau. Nổi bật là Liên Quân Mobile",
      tags: ["666", "BESTVNCHEAT"],
      status: "production",
      featured: true,
      links: {
        github: "https://t.me/sixsixsixindahell",
        live: "https://t.me/sixsixsixindahell"
      }
    },
    {
      name: "Cheatlibrary",
      year: "2025", 
      description: "Kho IPA MOD & HACK GAME Free",
      tags: ["IPA", "FREE", "CHEATLIBRARY"],
      status: "production",
      featured: true,
      links: {
        github: "https://cheatlibrary.xyz",
        live: "https://cheatlibrary.xyz"
      }
    }
  ],

  // Social Links
  social: {
    github: "https://github.com/vailonnguyenduc",
    facebook: "https://facebook.com/die4memories",
    youtube: "https://www.youtube.com/@LewisMapSangAOV",
    email: "mailto:lewisvn1234@gmail.com"
  },

  // Content Sections
  content: {
    about: {
      title: "Về Tôi",
      paragraphs: [
        "Tôi là một developer đang sinh sống và làm việc tại HỒ CHÍ MINH CITY, VIỆT NAM. Chuyên về mảng hack&cheat game, design&code website.",
      ],
      availability: "OWNER OF CHEATLIBRARY.XYZ & 666CHEAT VN"
    },
    contact: {
      title: "Kết Nối Nào 📩",
      description: "Nếu Bạn Có Nhu Cầu Code&Design Website Hay Mua Key Hack&SourceCode Các Thể Loại Game Hãy Liên Hệ Tôi Bằng Cách Click Bên Dưới !",
      cta: "Cảm Ơn Đã Quan Tâm ❤️‍🔥"
    }
  },

  // Feature Flags
  features: {
    particles: true,
    matrixRain: true,
    soundEffects: false,
    darkMode: true, // Always dark for terminal theme
    analytics: false,
    showCodeButtons: false // Toggle to show/hide code buttons in projects
  }
};
