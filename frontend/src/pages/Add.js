import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Add() {
    const [product, setProduct] = useState({ id: null, product_category: "", product_name: "", product_details: "", product_price: null });
    const navigate = useNavigate();
    const ChangeText = (e) => {
        setProduct((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const AddProduct = async () => {
        await axios.post("http://localhost:8085/products/add", {
            id: product.id,
            product_category: product.product_category,
            product_name: product.product_name,
            product_details: product.product_details,
            product_price: product.product_price
        });
        navigate("/dashboard");
    };
    const CancelProduct = () => {
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
                    placeholder="Enter Product Details"
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
                <button onClick={AddProduct} className="btn btn-dark" >
                    Add Product
                </button>
                <button style={{ marginLeft: 20 }} onClick={CancelProduct} className="btn btn-primary"  >
                    Cancel
                </button>
            </div>
        </>
    );
}

export default Add;
