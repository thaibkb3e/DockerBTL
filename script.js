console.log("Xin chào ");

// Lấy tất cả các phần tử có class "feature"
const features = document.querySelectorAll(".feature");

// Thêm event listener cho mỗi phần tử
features.forEach((feature) => {
  feature.addEventListener("mouseover", () => {
    // Thay đổi màu nền khi di chuột qua
    feature.style.backgroundColor = "lightgray";
  });

  feature.addEventListener("mouseout", () => {
    // Khôi phục màu nền khi di chuột ra
    feature.style.backgroundColor = "white";
  });

  // Tìm nút "Xem thêm" trong mỗi phần tử
  const button = feature.querySelector("button");
  if (button) {
    button.addEventListener("click", () => {
      // Hiển thị thông tin chi tiết khi nhấn nút
      const details = feature.querySelector(".details");
      if (details) {
        details.style.display = details.style.display === "none" ? "block" : "none";
      }
    });
  }
});

// Thêm hiệu ứng cuộn mượt cho các liên kết trong menu
const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});