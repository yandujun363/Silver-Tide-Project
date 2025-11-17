console.log(`🎉 愚人节快乐！\n` +
           `银潮Project其实是虚拟主播公会，这只是个RP玩笑~\n` +
           `我们专注虚拟主播，不真的开发游戏哦！\n` +
           `感谢配合我们的演出！❤`);

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
