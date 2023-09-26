import React, { useState } from "react"

function Userlist(){

    return (
        <div>
            <h1> Userlist</h1>

            <table className="table table-dark">
                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Userlist