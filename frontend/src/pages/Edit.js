import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function Edit() {
    const [product, setProduct] = useState({ id: null, product_category: "", product_name: "", product_details: "", product_price: null });
    const navigate = useNavigate();
    const location = useLocation();
    const ChangeText = (e) => {
        setProduct((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const EditProduct = async () => {
        const no = location.pathname.split("/")[2];
        await axios.put(`http://localhost:8085/products/update/${no}`, {
            id: product.id,
            product_category: product.product_category,
            product_name: product.product_name,
            product_details: product.product_details,
            product_price: product.product_price
        });
        navigate("/dashboard");
    };
    return (
        <>
            <div className="container">
                <input
                    type="number"
                    name="id"
                    value={product.id}
                    onChange={ChangeText}
                    placeholder="Enter id"
                    required
                />
                <br />
                <br />
                <input
                    type="text"
                    name="product_category"
                    value={product.product_category}
                    onChange={ChangeText}
                    placeholder="Enter Product Category"
                    required
                />
                <br />
                <br />
                <input
                    type="text"
                    name="product_name"
                    value={product.product_name}
                    onChange={ChangeText}
                    placeholder="Enter Product Name"
                    required
                />
                <br />
                <br />
                <input
                    type="text"
                    name="product_details"
                    value={product.product_details}
                    onChange={ChangeText}
                    placeholder="Enter Product Details "
                    required
                />
                <br />
                <br />
                <input
                    type="number"
                    name="product_price"
                    value={product.product_price}
                    onChange={ChangeText}
                    placeholder="Enter Product Price"
                    required
                />
                <br />
                <br />
                <button onClick={EditProduct} className="btn btn-dark" >
                    Update Product
                </button>
            </div>
        </>
    );
}

export default Edit;
