import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from "axios";
function Dashboard() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    useEffect(() => {
        GetData();
    });
    const GetData = async () => {
        await axios.get("http://localhost:8085/products/get")
            .then((res) => {
                setProducts(res.data);
            });
    };
    const DeleteProduct = async (pid) => {
        await axios.delete(`http://localhost:8085/products/delete/${pid}`);
    };
    return (
        <>
            <div className="container">
                <input
                    style={{ marginTop: 10 }}
                    type="text"
                    name="category"
                    value={category}
                    placeholder="Search By Category"
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                />
                <table style={{ marginTop: 20 }} className="table table-bordered" >
                    <thead style={{ fontWeight: 600 }} >
                        <tr>
                            <td>Sr.No</td>
                            <td>Product Category</td>
                            <td>Product Name</td>
                            <td>Product Details</td>
                            <td>Product Price</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p) => {
                                if (category === "") {
                                    return (
                                        <tr key={p.id} >
                                            <td>{p.id}</td>
                                            <td>{p.product_category}</td>
                                            <td>{p.product_name}</td>
                                            <td>{p.product_details}</td>
                                            <td>{p.product_price}</td>
                                            <td>
                                                <Link to={`/edit/${p.id}`}  >
                                                    <button className="btn btn-primary" >
                                                        Edit
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => DeleteProduct(p.id)} >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    if (p.product_category.toLowerCase().includes(category.toLowerCase())) {
                                        return (
                                            <tr key={p.id} >
                                                <td>{p.id}</td>
                                                <td>{p.product_category}</td>
                                                <td>{p.product_name}</td>
                                                <td>{p.product_details}</td>
                                                <td>{p.product_price}</td>
                                                <td>
                                                    <Link to={`/edit/${p.id}`}  >
                                                        <button className="btn btn-primary" >
                                                            Edit
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => DeleteProduct(p.id)} >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                }

                            })
                        }
                    </tbody>
                </table>
                <Link to="/add" >
                    <button className="btn btn-secondary" >Add Product</button>
                </Link>
                <Link to="/" >
                    <button style={{ marginLeft: 20 }} className="btn btn-danger" >Log Out</button>
                </Link>

            </div>
        </>
    );
}

export default Dashboard;
