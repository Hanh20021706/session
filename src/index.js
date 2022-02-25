import toastr from "toastr";
import { getCateAll, remove } from "./api/products";
import "toastr/build/toastr.min.css";
/* eslint-disable linebreak-style */
const listProduct = {
    async render() {
        const { data } = await getCateAll();
        return /* html */`
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">PRICE</th>
                <th scope="col">CATEGORIES</th>
              
                </tr>
            </thead>
        <tbody>
        ${data.map((product) => `
            <tr class="row-${product.id}">
              
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.categorie.name}</td>
                <td> <a href="/#/edit/product${product.id}" class="btn btn-warning">edit</a></td>
                <td><button type="button" data-id=${product.id} class="btn btn-danger btns">delete</button></td>
            </tr>
            
            
            `).join("")}
        </tbody>
    </table>
    <a href="/#/add/product" class="btn btn-success">Add Product</a>
        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll(".btns");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("ban co chac chan xoa");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("ban da xoa thanh cong");
                    });
                }
            });
        });
    },
};
export default listProduct;
