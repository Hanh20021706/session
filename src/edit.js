import axios from "axios";

/* eslint-disable linebreak-style */
const editProduct = {
    async render(id) {
        // console.log(id);
        return /* html */`
        <form class ="form-edit" method="POST" id="form-edit">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tên Sản Phẩm</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" id="name_product">
                    <div class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Giá Sản Phẩm</label>
                    <input type="number" class="form-control" id="price_product" >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const productName = document.querySelector("#name_product");
        const productPrice = document.querySelector("#price_product");

        if (id !== null) {
            axios({
                url: `http://localhost:3002/products/${id}`,
                method: "GET",
            }).then((data) => {
                productName.value = data.data.name;
                productPrice.value = data.data.price;
            });
        }

        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            fetch(` http://localhost:3002/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: productName.value,
                    price: productPrice.value,
                }),
            });
        });
    },
};
export default editProduct;
