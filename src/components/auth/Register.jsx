import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register({ setModalVisible, modalVisible }) {
    return (
        <div className='flex items-center justify-center'>
            <Rodal height={350} visible={modalVisible} onClose={() => setModalVisible(false)}>
                <form className='flex flex-col justify-center gap-2 py-4'>
                    <div class="form-floating mb-3">
                        <input required type="text" min={5} class="form-control" id="floatingPassword" placeholder="Full Name" />
                        <label for="floatingNumber">Full Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input required type="number" min={7} class="form-control" id="floatingPassword" placeholder="Number" />
                        <label for="floatingNumber">Phone Number</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input required type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className='flex justify-center gap-3 center items-ce'>
                        <button className='btn btn-danger w-50'>Cancel</button>
                        <button className='btn btn-success w-50'>Add</button>
                    </div>
                </form>
            </Rodal>
        </div>
    );
}

export default Register;