/* eslint-disable linebreak-style */
const addProduct = {
    render() {
        return /* html */`
        <form class ="form-add" method="POST" id="form-add">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Tên Sản Phẩm</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" id="name_product">
                <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Giá Sản Phẩm</label>
                <input type="number" class="form-control" id="price_product" >
            </div>
            <div class="mb-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                
                </select>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            const post = {
                name: document.querySelector("#name_product").value,
                price: document.querySelector("#price_product").value,
            };
            fetch(" http://localhost:3002/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            });
        });
    },
};
export default addProduct;
