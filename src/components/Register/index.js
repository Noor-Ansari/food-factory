import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setModalText, setModal, setLoader } from "../../redux/actionCreators";
import Modal from "../Modal";
import CustomLoader from "../Loader";
import { registerWithEmailAndPassword } from "./Logic";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const validationSchema = Yup.object({
	firstName: Yup.string()
		.trim()
		.min(3, "Too short")
		.max(30, "Too long")
		.required("Required"),
	lastName: Yup.string()
		.trim()
		.min(3, "Too short")
		.max(30, "Too long")
		.required("Required"),
	email: Yup.string().email("Email is not valid").required("Required"),
	password: Yup.string().trim().min(5, "Too short").required("Required"),
});

function RegisterForm({ modal, setModal, setModalText, loader, setLoader }) {
	const history = useHistory();

	const onSubmit = async ({ firstName, lastName, email, password }) => {
		setLoader(true);
		const user = await registerWithEmailAndPassword(
			firstName,
			lastName,
			email,
			password
		);
		if (user) {
			setLoader(false);
			history.push("/login");
		} else {
			setModalText("Email already exists");
			setModal(true);
			setLoader(false);
		}
	};

	return (
		<>
			{modal && <Modal />}
			{loader && <CustomLoader />}
			<main className='h-screen w-full flex items-center justify-between'>
				<div className='shadow-lg mx-6 md:mx-auto w-full md:w-80 h-auto py-8 px-6 ring-gray-500 ring-4 mt-12 flex flex-col items-center justify-center relative rounded'>
					<div className='absolute -top-6 bg-gray-500 py-2 px-6 rounded'>
						<img
							src='images/logo.jpeg'
							alt='logo'
							className='w-12 h-12 mx-auto'
						/>
						<h2 className='text-lg text-white'>Welcome to food factory</h2>
					</div>
					<Formik
						initialValues={initialValues}
						onSubmit={onSubmit}
						validationSchema={validationSchema}
					>
						<Form className='w-full mt-12'>
							<div className='my-2'>
								<label
									htmlFor='firstName'
									className='text-md flex justify-between items-center'
								>
									First Name
									<p className='text-red-600 text-xs text-right'>
										<ErrorMessage name='firstName' />
									</p>
								</label>
								<Field
									name='firstName'
									type='text'
									placeholder='First name...'
									className='ring-gray-700 ring-1 p-1 rounded w-full focus:outline-none focus:ring-2 my-1'
								/>
							</div>
							<div className='my-2'>
								<label
									htmlFor='lastName'
									className='text-md flex justify-between items-center'
								>
									Last Name
									<p className='text-red-600 text-xs text-right'>
										<ErrorMessage name='lastName' />
									</p>
								</label>
								<Field
									name='lastName'
									type='text'
									placeholder='Last name...'
									className='ring-gray-700 ring-1 p-1 rounded w-full focus:outline-none focus:ring-2 my-1'
								/>
							</div>
							<div className='my-2'>
								<label
									htmlFor='email'
									className='text-md flex justify-between items-center'
								>
									Email
									<p className='text-red-600 text-xs text-right'>
										<ErrorMessage name='email' />
									</p>
								</label>
								<Field
									name='email'
									type='email'
									placeholder='Email...'
									className='ring-gray-700 ring-1 p-1 rounded w-full focus:outline-none focus:ring-2 my-1'
								/>
							</div>
							<div className='my-2'>
								<label
									htmlFor='password'
									className='text-md flex justify-between items-center'
								>
									Password
									<p className='text-red-600 text-xs text-right'>
										<ErrorMessage name='password' />
									</p>
								</label>
								<Field
									name='password'
									type='password'
									placeholder='Password...'
									autoComplete='on'
									className='ring-gray-700 ring-1 p-1 rounded w-full focus:outline-none focus:ring-2 my-1'
								/>
							</div>
							<button
								type='submit'
								className='w-full bg-gray-700 text-white my-2 p-1 rounded focus:outline-none focus:ring-2 ring-gray-800 hover:bg-gray-600'
							>
								Register
							</button>
						</Form>
					</Formik>
					<p className='text-sm'>
						Already have an account ?{" "}
						<Link to='/login' className='underline text-blue-400'>
							Login
						</Link>
					</p>
				</div>
			</main>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		setModal: (state) => dispatch(setModal(state)),
		setModalText: (modalText) => dispatch(setModalText(modalText)),
		setLoader: (state) => dispatch(setLoader(state)),
	};
};

const mapStateToProps = (state) => {
	return {
		modal: state.modalReducer.modal,
		loader: state.modalReducer.loader,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
