/* eslint-disable linebreak-style */
import Navigo from "navigo";

import DashboardAdmin from "./pages/admin/dashboard";
import AddProduct from "./pages/admin/news/add";
import AdminEditProduct from "./pages/admin/news/product-edit";
import ProductPage from "./pages/admin/product-page";

// import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";

import HomePage from "./pages/homepage";
// import ProductPage from "./pages/product";

import SingIn from "./pages/signin";
import SignUp from "./pages/signup";

// console.log(HomePage);
const router = new Navigo("/", { linksSelector: "a" });

const runder = (content) => {
    // console.log(content);

    document.querySelector("#app").innerHTML = content;
};
router.on({
    "/": () => {
        runder(HomePage.runder());
        // console.log("home page");
    },
    "/signup": () => {
        runder(SignUp.runder());
    },
    "/signin": () => {
        runder(SingIn.runder());
    },
    "/admin/add": () => {
        runder(AddProduct.runder());
    },
    "/admin/edit/:id": ({ data }) => {
        const { id } = data;
        runder(AdminEditProduct.runder(+id));
    },

    // chi tiet bai viet
    "/detail/:id": ({ data }) => {
        const { id } = data;
        runder(DetailPage.runder(+id));
    },
    "/product/admin": () => {
        runder(ProductPage.runder());
    },
    "/admin/dashboard": () => {
        runder(DashboardAdmin.runder());
    },

});

router.resolve();

// class TuongPhep {
//     constructor(name, congVatLy, congPhep) {
//         this.tenTuong = name;
//         this.congVatLyTuong = congVatLy;
//         this.congPhepTuong = congPhep;
//     }

//     showIntro() {
//         console.log(`
//         ten tuong la: ${this.tenTuong}
//         cong vat ly tuong la: ${this.congVatLyTuong}
//         cong phep tuong: ${this.congPhepTuong}
//         `);
//     }
// }
// const tuong1 = new TuongPhep("veera", 170, 0);
// const tuong2 = new TuongPhep("krixi", 159, 0);
// tuong1.showIntro();
// console.log(tuong2.showIntro());
