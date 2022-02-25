/* eslint-disable linebreak-style */
import { get, update } from "./api/products";

/* eslint-disable linebreak-style */
const editProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <form id = "form-edit"  method="POST">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="name_product" value ="${data.name}">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Price</label>
                <input type="number" class="form-control" id="price_product" value="${data.price}">
            </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        `;
    },
    afterRender(id) {
        // console.log(id);
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            update({
                id,
                name: document.querySelector("#name_product").value,
                price: document.querySelector("#price_product").value,
            });
        });
    },
};
export default editProduct;
