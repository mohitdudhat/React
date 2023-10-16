import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {

    const [record, setRecord] = useState([]);
    useEffect(() => {

        axios.get(`https://dummyjson.com/products`)
            .then((res) => {
                console.log(res.data.products);
                setRecord(res.data.products);

            }).catch((err) => {
                console.log(err);
                return false;
            })


    }, [])

    return (
        <center>
            <h1 className="mb-4">Store Data</h1>

            <table className="text-center table-hover">
                <thead>

                <tr>
                    <th className="col-1">id</th>
                    <th className="col-1">title</th>
                    <th className="col-1">price</th>
                    <th className="col-4">description</th>
                    <th className="col-1">rating</th>
                    <th className="col-1">discount</th>
                    <th className="col-5">image</th>
                </tr>
                </thead>

                {
                    record.map((val) => {
                        return (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>${val.price}</td>
                                <td>{val.description}</td>
                                <td>{val.rating}</td>
                                <td>{val.discountPercentage}</td>
                                <td> <img src={val.thumbnail} className="img" alt="" /></td>

                            </tr>
                        )
                    })
                }

            </table>
        </center>
    )
}

export default Product;