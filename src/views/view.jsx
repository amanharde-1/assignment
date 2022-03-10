import { useEffect, useState } from "react";

const View = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('info'));
        if (info) {
            setState(info)
        }
    }, []);
    return (
        <div className="container-fluid col-8">


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((value, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <th scope="row">{value?.fName}</th>
                                <th scope="row">{value?.lName}</th>
                                <th scope="row">{value?.salary}</th>
                                <th scope="row">{value?.age}</th>
                                <th scope="row">{value?.gender}</th>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default View;