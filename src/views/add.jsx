import { useState } from "react"

const Add = () => {

    const [state, setState] = useState({
        fName: "",
        lName: "",
        age: "",
        salary: "",
        gender: ""
    })

    const onInputChange = field => event => {
        setState({
            ...state,
            [field]: event.target.value
        })
    }


    const handelSubmit = event => {
        const info = JSON.parse(localStorage.getItem('info'));
        if (!info) {
            localStorage.setItem('info', JSON.stringify([].concat(state)))
        } else {
            localStorage.setItem('info', JSON.stringify(info.concat(state)))
        }

    }
    return (
        <div className="container-fluid col-6">
            <form>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleInputfName" aria-describedby="emailHelp"
                        value={state.fName}
                        onChange={onInputChange('fName')}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputlName"
                        value={state.lName}
                        onChange={onInputChange('lName')}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" id="exampleInputAge"
                        value={state.age}
                        onChange={onInputChange('age')}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input type="text" className="form-control" id="exampleInputSalary"
                        value={state.salary}
                        onChange={onInputChange('salary')}
                    />
                </div>
                <div className="mb-3 form-check">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="male" id="flexRadioMale" value={'male'} checked={state.gender === 'male'}
                            onChange={onInputChange('gender')}
                        />
                        <label className="form-check-label" >
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="female" id="flexRadioFemale" value={'female'} checked={state.gender === 'female'}
                            onChange={onInputChange('gender')}
                        />
                        <label className="form-check-label" >
                            Female
                        </label>
                    </div>
                </div>
            </form>

            <button className="btn btn-primary" onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Add;