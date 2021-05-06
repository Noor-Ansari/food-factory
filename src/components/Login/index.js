import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory, Link } from "react-router-dom";
import db from "../../firebase/firestore";
import firebase from "firebase";
import { addUser, setModalText, setModal } from "../../redux/actionCreators";
import { connect } from "react-redux";
import Modal from "../Modal";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object({
	email: Yup.string().email("Email is not valid").required("Required"),
	password: Yup.string().trim().required("Required"),
});

function LoginForm({ addUser, modal, setModal, setModalText }) {
	const history = useHistory();

	const onSubmit = (values) => {
		const { email, password } = values;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				const userId = userCredential.user.uid;
				db.collection("user")
					.where("userId", "==", userId)
					.get()
					.then((querySnapshot) => {
						querySnapshot.forEach((doc) => {
							const userData = doc.data();
							userData && addUser(userData);
							history.push("/");
						});
					});
			})
			.catch((error) => {
				setModalText("Email/Password is incorrect.");
				setModal(true);
			});
	};

	return (
		<>
			{modal && <Modal />}
			<main className='h-screen w-full flex items-center justify-between'>
				<div className='shadow-lg mx-6 md:mx-auto w-full md:w-80 h-96 py-8 px-6 ring-gray-500 ring-4 flex flex-col items-center justify-center relative rounded'>
				<div className="absolute -top-6 bg-gray-500 py-2 px-6 rounded">
					<img src="images/logo.jpeg" alt="logo" className="w-12 h-12 mx-auto" />
					<h2 className="text-lg text-white">Welcome back</h2>
					</div>
					<Formik
						initialValues={initialValues}
						onSubmit={onSubmit}
						validationSchema={validationSchema}
					>
						<Form className="w-full">
							<div className='my-2'>
								<label htmlFor='email' className='text-md flex items-center justify-between'>
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
								<label htmlFor='password' className='text-md flex justify-between items-center'>
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
								Login
							</button>
						</Form>
					</Formik>
					<p className='text-sm'>
						Don't have an account ?{" "}
						<Link to='/register' className='underline text-blue-400'>
							Register
						</Link>
					</p>
				</div>
			</main>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (user) => dispatch(addUser(user)),
		setModal: (state) => dispatch(setModal(state)),
		setModalText: (modalText) => dispatch(setModalText(modalText)),
	};
};

const mapStateToProps = (state) => {
	return {
		modal: state.modalReducer.modal,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
