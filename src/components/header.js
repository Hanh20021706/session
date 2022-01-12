/* eslint-disable linebreak-style */
const Header = {
    runder() {
        return /* html */ `
        <div class="bg-indigo-900 py-8 ">

        <a href="#">
            <img src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/LOGO-PTC%C4%90-White-Transparency.png"
                alt="" width="150px" class="mx-auto">
        </a>

    </div>

    <div class="header-main bg-amber-600 flex ">
        <nav class="">
            <ul class="flex py-3" id="menu" >
                <li class="">
                    <a href="/"  class="text-white p-4 hover:text-pink-900">Trang Chủ</a>
                </li>
                <li class="">
                    <a href="/admission" class="text-white p-4 hover:text-pink-900">Tuyển Sinh</a>
                </li>
                <li class="">
                    <a href="/educate" class="text-white p-4 hover:text-pink-900">Chương Trình Đào Tạo</a>
                </li>
                <li class="">
                    <a href="/students" class="text-white p-4 hover:text-pink-900">Góc Sinh Viên</a>
                </li>
                <li class="">
                    <a href="/admin/dashboard" class="text-white p-4 hover:text-pink-900">Admin</a>
                </li>
            </ul>
        </nav>
        <div class="search flex ml-20 py-3">
            <input type="text"
                class=" h-6 pr-4 mr-2   placeholder:italic rounded-none placeholder:text-gray-400 block bg-white w-full border border-gray-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ">
            <input type="button" value="tìm kiếm" class="border-2 bg-indigo-900 text-white uppercase h-6 px-8 ">
        </div>
    </div>


        `;
    },
};
export default Header;
