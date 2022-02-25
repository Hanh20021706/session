/* eslint-disable linebreak-style */
import Navigo from "navigo";
import listProduct from ".";
import addProduct from "./add";
import editProduct from "./edit";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => {
        print(listProduct);
    },
    "/add/product": () => {
        print(addProduct);
    },
    "/edit/product:id": ({ data }) => {
        print(editProduct, data.id);
    },

});

router.resolve();
