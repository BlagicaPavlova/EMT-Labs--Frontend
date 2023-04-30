import React from "react";
import {Link} from "react-router-dom";

const books = (props) => {
    return (
        <div>
            <div>
                <div>
                    <table className={"table table-hover table-bordered"}>
                        <thead className={"table-info"}>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available copies</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Delete</th>
                                <th scope={"col"}>Edit</th>
                                <th scope={"col"}>Mark as taken</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term)=>{
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.author.name} {term.author.surname}</td>
                                    <td>{term.availableCopies}</td>
                                    <td>{term.category}</td>
                                    <td><a title={"Delete"} className={"btn btn-danger"}
                                    onClick={() => {props.onDelete(term.id)}}
                                    >Delete</a></td>
                                    <td><Link title={"Edit"} className={"btn btn-primary"}
                                           onClick={() => {props.onEdit(term.id)}} to={`/edit/${term.id}`}
                                    >Edit</Link></td>
                                    <td><a title={"MarkAsTaken"} className={"btn btn-secondary"}
                                           onClick={() => {props.onMarkAsTaken(term.id)}}
                                    >Mark as taken</a></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link className={"btn btn-success p-2 m-2"} to={"/add"}>Add new book</Link>
        </div>
    );
}

export default books;