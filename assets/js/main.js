

//  ================ smooth scroll =============== //

$(function(){
    $("a").creep();
});

//  ================ back tp top btn =============== //

window.addEventListener("scroll",() => {
    if (scrollY > 600) {
        document.querySelector(".backToTopBtn").style.opacity  = "1"
    } else {
        document.querySelector(".backToTopBtn").style.opacity = "0"
    }
})
//  ================ nav scroll =============== //


window.addEventListener("scroll",() => {
    if (scrollY > 700) {
        document.querySelector("header nav").classList.add("fixed-top")
        document.querySelector("header nav").classList.add("bg-white")
        document.querySelector("header #heroSection").style.height = "100vh"
    } else {
        document.querySelector("header nav").classList.remove("fixed-top")
        document.querySelector("header nav").classList.remove("bg-white")
        document.querySelector("header #heroSection").style.height = "calc(100vh - 96px)"
    }
})

//  ================ nav active =============== //

let navLinks = document.querySelectorAll("nav ul a");
let sections = document.querySelectorAll("main section");


navLinks.forEach((navlink) => {
    navlink.onclick = () => {
        navLinks.forEach((navlink) => {navlink.classList.remove("active")})
        navlink.classList.toggle("active")
    }
})

//  Navbar links active state on scroll

window.addEventListener("scroll",() => {    


    let position = window.scrollY + 200 ;
    sections.forEach((section) => {
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navLinks.forEach((navlink) => {navlink.classList.remove("active")})
        if (document.getElementsByClassName(section.id)[0]){
            document.getElementsByClassName(section.id)[0].classList.add("active")
        }
    } else if (position < 500) {
        navLinks.forEach((navlink) => {navlink.classList.remove("active")})
        document.getElementsByClassName("home")[0].classList.add("active")
    }
})

})

//  ================ news section swiper =============== //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: screen.width > 992
    ? 3 
    : screen.width > 567 
    ? 2 
    : 1,
    spaceBetween: 40,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },    
});    




//  ================ animation on scroll =============== //


AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
    
});

//  ================ close  model =============== //

let closeModel = () => {
    document.getElementById("model").style.visibility = " hidden";
    document.getElementById("model").style.opacity = "0";
}

//  ================ open logIn model =============== //

let openLoginModel = () => {
    document.getElementById("model").style.visibility = "visible";
    document.getElementById("model").style.opacity = "1";
    document.getElementById("model").innerHTML = `
    <div id="logIn" class="logIn col-md-6 bg-white py-4 px-5">
    <div><i class='bx bx-x' onclick="closeModel()"></i></div>
    <div class="row">
        <div class="col-lg-6 col-sm-12 py-5 text-center text-lg-end">
            <div>
                <h2 class="py-2">تسجيل الدخول</h2>
                <p class="py-2">من فضلك قم بإدخال البيانات المطلوبة منك لإستكمال تسجيل الدخول ومعرفة الدرجات والتقديرات الخاصة بك في الجامعة</p>
            </div>
            <div class="row">
                <input type="text" placeholder="الرقم القومي" class="col-12 my-2">
                <input type="text" placeholder="الرقم الجامعي" class="col-12 my-2">
                <button class="col-4 mx-lg-0 mx-sm-auto my-2 " type="submit" onclick="continueLogin()" >تسجيل الآن</button>
            </div>
        </div>
        <div class="col-lg-6 d-lg-block d-none"><img src="assets/img/Group 11344.png" class="img-fluid" alt=""></div>
    </div>
</div>
    `;
}

document.getElementById("log-in").addEventListener("click" , openLoginModel);

let continueLogin = () => {
    document.getElementById("model").innerHTML = `
    <div id="logIn" class="col-md-6 bg-white py-4 px-5">
    <div class="d-flex justify-content-between"><i class='bx bx-x' onclick="closeModel()"></i><i class='bx bx-chevrons-left' onclick="openLoginModel()"></i></div>
    <div class="row">
        <div class="col-lg-6 col-sm-12 py-5 text-center text-lg-end">
            <div>
                <h2 class="py-2">الكلية والتخصص</h2>
            </div>
            <div class="row">
                <select name="faculty" id="faculty" class="col-12 my-2">
                    <option value="engineering">Engineering</option>
                    <option value="medicine">Medicine</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="dentistry">Dentistry</option>
                    <option value="commerce">Commerce</option>
                    <option value="law">Law</option>
                </select>
                <input type="text" placeholder="رقم الجلوس" class="col-12 my-2">
                <button class="]col-4 mx-lg-0 mx-sm-auto my-2 " type="submit"  onclick="closeModel()" >المتابعة</button>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12 d-lg-block d-none"><img src="assets/img/Group 11344.png" class="img-fluid" alt=""></div>
    </div>
</div>
    `;
}


//  ================ open Registration model =============== //

let openRegistration = () => {
    document.getElementById("model").style.visibility = "visible";
    document.getElementById("model").style.opacity = "1";
    document.getElementById("model").innerHTML = `
    <div id="seminarReg" class="col-md-6 bg-white py-4 px-5">
    <div><i class='bx bx-x' onclick="closeModel()"></i></div>
    <div class="row">
        <div class="col-lg-6 col-sm-12 py-3 text-center text-lg-end">
            <div>
                <h2 class="py-2">التسجيل في الندوة</h2>
                <p class="py-2">من فضلك قم بإدخال البيانات المطلوبة منك وسوف يتم إرسال تفاصيل الندوة لك وموعدها علي بريدك الإلكتروني ورقم تذكرة الحضور الخاصة بك</p>
            </div>
            <div class="row">
                <input type="text" placeholder="الاسم بالكامل" class="col-12 my-2">
                <input type="text" placeholder="رقم الهاتف" class="col-12 my-2">
                <input type="email" placeholder="بريدك الالكتروني" class="col-12 my-2">
                <button class="col-4 mx-lg-0 mx-sm-auto my-2 " type="submit" onclick="continueconfirmReg()" >تسجيل الآن</button>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12 d-lg-block d-none"><img src="assets/img/Group 11345.png" class="img-fluid alt=""></div>
    </div>
</div>
    `;
}

document.querySelectorAll("#seminars .card-link").forEach((btn) => {
    btn.addEventListener("click" , openRegistration);
})

let continueconfirmReg = () => {
    document.getElementById("model").innerHTML = `
    <div id="confirmReg" class="bg-white d-flex justify-content-center align-items-center">
    <div class="text-center ">
        <img src="assets/img/icons8-confirm.gif" class="img-fluid" alt="">
        <h2 class="py-2">تم التسجيل بنجاح</h2>
        <p class="py-2"> من فضلك قم بمراجعة البريد الوارد لديك علي بريدك الإلكتروني الخاص بك لمعرفة التفاصيل الخاصة بالندوة وتذكرة الحضور والميعاد</p>
        <button class="my-2" type="submit" onclick="closeModel()" >حسنأ,فهمت</button>
    </div>
</div>
    `;
}







