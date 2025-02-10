const themeToggle = document.getElementById('theme-toggle');
const themeToggleSidebar = document.getElementById('theme-toggle-sidebar');
const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar")

//todo : Dark/Light 
themeToggle.addEventListener('click', () => {
   const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
   document.body.classList.replace(currentTheme, newTheme);
   localStorage.setItem('theme', newTheme);
});
themeToggleSidebar.addEventListener('click', () => {
   const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
   document.body.classList.replace(currentTheme, newTheme);
   localStorage.setItem('theme', newTheme);
});

// بارگذاری تم ذخیره‌شده
window.onload = () => {
   const savedTheme = localStorage.getItem('theme') || 'light';
   document.body.classList.add(savedTheme);
};
//todo: Navbar Sidber
hamburger.addEventListener("click", () => {
   console.log("hamburger clicked")
   sidebar.classList.toggle("show");
})
sidebar.addEventListener("click", () => {
   console.log("hamburger clicked")
   sidebar.classList.toggle("show");
})