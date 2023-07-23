import React from 'react';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
    // Candidate Name, Subject, Candidate Email, Candidate Phone number, address, date of birth, and image field. 

    const handleAdmission = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const birth = form.birth.value;
        const img = form.img.value;
        const admissionForm = { name, subject, email, number, address, birth, img };
        console.log(admissionForm);

        fetch('http://localhost:5000/admissionFormFill', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admissionForm)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                form.reset()
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Admission is Successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

    }

    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Admission Form</h1>

                </div>
                <form onSubmit={handleAdmission} className="card  w-full">
                    <div className="card-body grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input name='subject' type="text" placeholder="subject" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Phone Number</span>
                            </label>
                            <input name='number' type="number" placeholder="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input name='address' type="text" placeholder="address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date Of Birth</span>
                            </label>
                            <input name='birth' type="text" placeholder="date of birth" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name='img' type="url" placeholder="image" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-1/3 mx-auto">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;