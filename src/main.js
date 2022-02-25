/* eslint-disable linebreak-style */
import Navigo from "navigo";
import listProducts from ".";
import addProduct from "./add";
import editProduct from "./edit";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    // console.log(content);
    // content trả về cho chúng ta 1 object(render và afterRender)
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => {
        print(listProducts);
    },
    "/add/product": () => {
        print(addProduct);
    },
    "/edit/product:id": ({ data }) => {
        print(editProduct, data.id);
    },
});

router.resolve();
