console.log("IT Training Center - JavaScript loaded");

const centerName = "IT Training Center";
const slogan = "Learn Technology - Build Your Future";

// Dùng innerHTML để chèn tên trung tâm
document.getElementById("welcome-title").innerHTML =
    "Welcome to " + centerName;

// Dùng innerText để chèn câu slogan
document.getElementById("welcome-message").innerText = slogan;

// ==========================================
// BÀI 1 - AVAILABLE COURSES: ARRAY + querySelectorAll()
// ==========================================

// 1. Tạo mảng chứa tên 4 khóa học
const courseNames = ["HTML & CSS", "JavaScript", "ASP.NET MVC", "Database"];

// 2. Lấy tất cả các thẻ có class là "course-name"
const courseTitleElements = document.querySelectorAll(".course-name");

// 3. Duyệt danh sách và gán giá trị
courseTitleElements.forEach(function (element, index) {
    // element là thẻ <h3> hiện tại đang xét
    // index là vị trí của thẻ đó (0, 1, 2, 3)
    // Lấy tên khóa học tương ứng trong mảng và gán vào thẻ <h3>
    element.innerHTML = courseNames[index];
});

// Kiểm tra trong Console như yêu cầu của đề bài
console.log("Số lượng course card tìm thấy:", courseTitleElements.length);

// ==========================================
// BÀI 2 - RIGHT ASIDE: for...of
// ==========================================

const quickCourses = ["HTML & CSS", "JavaScript", "ASP.NET MVC", "Database"];

function showQuickCourses() {
    let output = "";

    // Sử dụng vòng lặp for...of để duyệt qua từng giá trị trong mảng
    for (let course of quickCourses) {
        // Ghép chuỗi HTML cho mỗi khóa học, dùng class của CSS Buổi 2
        output += `<li><a href="#courses" style="display: block; text-decoration: none; margin-bottom: 6px; padding: 7px; border-radius: 4px; background: linear-gradient( 90deg, #3ee1df, #24d2db ); color: #075a72; font-size: 9px; font-weight: bold;">◉ ${course}</a></li>`;
    }

    // Đưa toàn bộ chuỗi HTML vừa tạo vào thẻ ul
    document.getElementById("quick-course-list").innerHTML = output;
}

// Gọi hàm để thực thi
showQuickCourses();

// ==========================================
// BÀI 3 - COURSE DETAIL: OBJECT + for...in + onclick
// ==========================================

// Tạo object jsCourse theo yêu cầu
const jsCourse = {
    name: "JavaScript",
    duration: "6 Weeks",
    tuition: "$150",
    level: "Basic" // Thuộc tính thêm vào để test
};

// Hàm hiển thị thông tin
function showCourseDetail() {
    let output = "";

    // Vòng lặp for...in dùng để duyệt qua các "key" (thuộc tính) của Object
    for (let key in jsCourse) {
        // Lấy giá trị tương ứng bằng jsCourse[key]
        output += `<p style="margin-bottom: 5px;"><strong>${key.toUpperCase()}:</strong> ${jsCourse[key]}</p>`;
    }

    // Đổ kết quả vào div có id="course-detail"
    document.getElementById("course-detail").innerHTML = output;
}

// ==========================================
// BÀI 4 - COURSE REGISTRATION: if...else + switch + DOM
// ==========================================

// Hàm tính học phí bằng switch...case
function getTuition(course) {
    let tuition = 0;
    switch (course) {
        case "HTML & CSS":
            tuition = 100;
            break;
        case "JavaScript":
            tuition = 150;
            break;
        case "ASP.NET MVC":
            tuition = 200;
            break;
        case "Database":
            tuition = 150;
            break;
        default:
            tuition = 0; // Nếu không hợp lệ
    }
    return tuition;
}

// Hàm xử lý khi bấm nút Register
function registerCourse() {
    // 1. Lấy dữ liệu từ các ô input
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;

    // 2. Lấy radio button Learning Mode đang được chọn
    const learningModeEl = document.querySelector('input[name="learningMode"]:checked');

    // 3. Kiểm tra các trường dữ liệu rỗng
    if (fullName === "" || email === "" || phone === "" || course === "") {
        alert("Please fill in all required fields (Name, Email, Phone, Course).");
        return; // Dừng hàm ngay lập tức nếu lỗi
    }

    // 4. Kiểm tra số điện thoại (đúng 10 chữ số)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    // 5. Kiểm tra nếu Learning Mode chưa chọn (mặc định đã chọn Online, nhưng viết code đề phòng)
    if (!learningModeEl) {
        alert("Please select a Learning Mode.");
        return;
    }
    const learningMode = learningModeEl.value;

    // 6. Tính học phí
    const tuition = getTuition(course);

    // 7. Hiển thị kết quả ra màn hình
    const resultDiv = document.getElementById("registration-result");
    resultDiv.innerHTML = `
        <span style="color: #10a847; font-size: 13px;">✔ Registration Successful!</span><br>
        Student: ${fullName} <br>
        Course: ${course} <br>
        Learning Mode: ${learningMode} <br>
        Tuition Fee: $${tuition}
    `;
}

// ==========================================
// BÀI 5 - STUDENT REVIEWS: getElementsByClassName()
// ==========================================

// 1. Tạo mảng chứa tên 3 sinh viên
const reviewNames = ["Nguyen Van B", "Tran Thi C", "Le Minh D"];

// 2. Lấy tất cả các thẻ có class "review-name" (trả về một danh sách HTMLCollection)
const reviewElements = document.getElementsByClassName("review-name");

// 3. Dùng vòng lặp for cơ bản để duyệt và gán tên vào từng thẻ
for (let i = 0; i < reviewElements.length; i++) {
    // i sẽ chạy từ 0 đến 2
    if (reviewNames[i]) {
        reviewElements[i].innerHTML = reviewNames[i];
    }
}

// ==========================================
// BÀI 6 - FOOTER: getElementsByTagName()
// ==========================================

const footerData = [
    "✉ &nbsp; Email: baotritkd@gmail.com",
    "☎ &nbsp; Phone: 0377220687",
    "♦ &nbsp; Address: 82B, Su Van Hanh, Ho Chi Minh City",
    "Copyright © 2026 - IT Training Center"
];

// Lấy khu vực footer theo ID
const footer = document.getElementById("footer-info");

// Chỉ lấy các thẻ <p> nằm bên TRONG footer
const footerItems = footer.getElementsByTagName("p");

// Duyệt mảng và gán nội dung vào từng thẻ <p>
for (let i = 0; i < footerItems.length; i++) {
    if (footerData[i]) {
        footerItems[i].innerHTML = footerData[i];
    }
}

// ==========================================
// BÀI 7 - DOM READING: innerHTML, innerText, textContent
// ==========================================

function showInnerHTML() {
    // Đọc nội dung bằng innerHTML
    const content = document.getElementById("demo-content").innerHTML;
    // Xuất ra thẻ <pre>. Chú ý: Dùng textContent ở output để render chuỗi text 
    // thay vì để trình duyệt biên dịch thẻ <span>
    document.getElementById("content-result").textContent = content;
}

function showInnerText() {
    // Đọc nội dung bằng innerText
    const content = document.getElementById("demo-content").innerText;
    document.getElementById("content-result").textContent = content;
}

function showTextContent() {
    // Đọc nội dung bằng textContent
    const content = document.getElementById("demo-content").textContent;
    document.getElementById("content-result").textContent = content;
}

// ==========================================
// BÀI MỞ RỘNG 
// ==========================================

// A. Nút “Show All / Hide” để ẩn/hiện Course List
function toggleCourseList() {
    const table = document.getElementById("course-table");
    const btn = document.getElementById("btn-toggle");

    // Nếu bảng đang không bị ẩn (chưa có style none) -> Ẩn nó đi
    if (table.style.display !== "none") {
        table.style.display = "none";
        btn.innerHTML = "Show Table";
        btn.style.background = "#1aaa55"; // Đổi màu nút thành xanh
        btn.style.color = "white";
    } else {
        // Nếu bảng đang bị ẩn -> Hiện lại
        table.style.display = "table";
        btn.innerHTML = "Hide Table";
        btn.style.background = "#efefef"; // Đổi màu nút về mặc định
        btn.style.color = "black";
    }
}

// B và C. Hiển thị học phí (B) và Đổi nội dung Banner (C) khi chọn khóa học
function handleCourseChange() {
    const course = document.getElementById("course").value;
    const preview = document.getElementById("tuition-preview");
    const bannerTitle = document.getElementById("banner-title");
    const bannerDesc = document.getElementById("banner-desc");

    // Nếu quay về "Select Course" mặc định
    if (course === "") {
        preview.innerHTML = "";
        bannerTitle.innerHTML = "Professional IT Training Programs";
        bannerDesc.innerHTML = "HTML · CSS · JavaScript · ASP.NET MVC · Database";
        return;
    }

    // Yêu cầu B: Gọi hàm getTuition(course) đã viết ở Bài 4 để tính học phí và hiển thị
    const tuition = getTuition(course);
    preview.innerHTML = `(Fee: $${tuition})`;

    // Yêu cầu C: Đổi nội dung banner theo khóa học
    bannerTitle.innerHTML = `Welcome to ${course} Class!`;
    bannerDesc.innerHTML = `Master ${course} in just a few weeks and build your future.`;
}

// D. Tạo nút “Reset Result” để xóa nội dung #registration-result
function resetResult() {
    // Xóa kết quả đăng ký
    document.getElementById("registration-result").innerHTML = "";

    // Xóa vùng xem trước học phí
    document.getElementById("tuition-preview").innerHTML = "";

    // Trả Banner về trạng thái gốc
    document.getElementById("banner-title").innerHTML = "Professional IT Training Programs";
    document.getElementById("banner-desc").innerHTML = "HTML · CSS · JavaScript · ASP.NET MVC · Database";
}