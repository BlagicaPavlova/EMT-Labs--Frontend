import React from "react";

const categories = (props) => {
    return (
        <div>
            <div>
                <div>
                    <table className={"table table-hover table-bordered"}>
                        <thead className={"table-info"}>
                        <tr>
                            <th scope={"col"}>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term)=>{
                            return (
                                <tr>
                                    <td>{term.toString()}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;