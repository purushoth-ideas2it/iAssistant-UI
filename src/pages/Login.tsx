import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Input from '../constant/Input';
import Button from '../constant/Button';
import { useFormik } from "formik";

interface ICredentials {
    email: string;
    password: string;
}

const Login = () => {
    const mockEmail = 'test@gmail.com';
    const mockPassword = 'test1';

    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values: ICredentials) => {
            setMail(values?.email);
            setPassword(values?.password);
        }
    });

    if (mockEmail === email && mockPassword === password) {
        return <Navigate to="/home" replace />;
    }

    return (
        <div className="h-screen bg-login-background bg-cover" >
            <div className="">
                <br />
                <h5 className="text-xl text-center font-medium text-gray-900 text-white mt-[90px] leading-loose">
                    Welcome to iassistant!
                </h5>
                <p className="text-sm text-center text-white">
                    Manage your timesheet, raise tickets for your issues, raise leave <br />
                    request, get loans and everything else realted to Ideas2IT.
                </p>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 content-center mx-auto mt-8">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your email
                        </label>
                        <Input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Enter Ideas2IT Email"
                        />
                    </div>
                    <div className="flex items-start float-right">
                        <a className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">
                            Forget Password?
                        </a>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your password
                        </label>
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <Button
                        type="submit"
                        width="w-full"
                        color="blue-700"
                        textColor="white"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
