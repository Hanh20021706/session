import $ from "jquery";
import validate from "jquery-validation";
import { getAll } from "./api/cate";
import { add } from "./api/products";
/* eslint-disable linebreak-style */
const addProduct = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <form id = "form-add">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="name_product" aria-describedby="emailHelp" name="name_product">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Price</label>
                <input type="number" class="form-control" id="price_product" name="price_product">
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Categories</label>
            <select class="form-select" aria-label="Default select example" id="cate_product">
            ${data.map((item) => `
                <option selected value="${item.id}"> ${item.name}</option>
                `)}
                    
                   
          </select>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        `;
    },
    afterRender() {
        const formAdd = $("#form-add");
        formAdd.validate({
            rules: {
                name_product: {
                    required: true,
                    minlength: 10,
                },
                price_product: {
                    required: true,
                    step: 2,
                },
            },
            messages: {
                name_product: {

                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 10 ký tự",
                },
                price_product: {

                    required: "Không để trống trường này!",
                    minlength: "nhap so duong",
                },
            },
            submitHandler: () => {
                async function handleAddProduct() {
                    add({
                        name: document.querySelector("#name_product").value,
                        price: document.querySelector("#price_product").value,
                        categorieId: Number(document.querySelector("#cate_product").value),
                    });
                }
                handleAddProduct();
            },

        });
    },
};
export default addProduct;
