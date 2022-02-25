/* eslint-disable linebreak-style */
import axios from "axios";

/* eslint-disable linebreak-style */
const listProducts = {
    async render() {
        const { data } = await axios.get("http://localhost:3002/products?_expand=categorie");
        return /* html */`
        <table class="table">
        <thead>
          <tr>
            <th scope="col">MÃ SẢN PHẨM </th>
            <th scope="col">TÊN SẢN PHẨM</th>
            <th scope="col">GIÁ SẢN PHẨM</th>
            <th scope="col">Danh Mục</th>
          </tr>
        </thead>
        <tbody>
        ${data.map((product) => `
        
        <tr class="row-${product.id}">
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.categorie.name}</td>
          <td>  <a href="/#/edit/product${product.id}" class="btn btn-warning">edit</a></td>
          <td><button type="button" data-id=${product.id} class="btn btn-danger btns">xóa</button></td>
        </tr>
       
        `).join("")}
          
        </tbody>
       
      </table>
      <a href="/#/add/product" class="btn btn-success">thêm sản phẩm</a>
        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll(".btns");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            // console.log(id);
            btn.addEventListener("click", () => {
                const confirm = window.confirm("bạn có chắc chắn muốn xóa");
                if (confirm == true) {
                    const removeItem = document.querySelector(`.row-${id}`);
                    removeItem.parentNode.removeChild(removeItem);
                    axios({
                        url: `http://localhost:3002/products/${id}`,
                        method: "DELETE",
                    });
                }
            });
        });
    },
};
export default listProducts;
