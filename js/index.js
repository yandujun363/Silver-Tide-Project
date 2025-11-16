// 控制台彩蛋
console.log(
  `%c
        🚀 银潮项目 招聘启事 🚀
        ========================
        我们正在寻找以下职位的梦想家：
        · "虚拟情感共鸣力"调教师
        · "直播切片因果律"工程师
        · "弹幕氛围场"构建师
        
        如果您能看到这条信息，说明您具备我们需要的探索精神。
        请将您的简历与一段独白发送至：careers@silvertideproject.top
        
        (请注意：熟悉北立交桥周边交通者优先)
        `,
  "color: #0084ffff; font-family: monospace; font-size: 14px;"
);

// 简单的导航栏高亮效果
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "#b0b0b0";
    if (link.getAttribute("href").substring(1) === current) {
      link.style.color = "#00e5ff";
      link.style.textShadow = "0 0 8px rgba(0, 229, 255, 0.5)";
    }
  });
});
