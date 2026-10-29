// import React from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';
import  { useContext } from 'react';

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        // console.log(data)

        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/authentication`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.status === false) {
            toast.error(result.message || "Login failed!");
        } else {
            toast.success(result.message || "Login successful!");

            const userInfo = {
                id: result.id,
                token: result.token
              

            }
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            login(userInfo)
            navigate("/admin/dashboard")
        }

        // console.log(result);
    }


    return (
        <>
            <Header />

            <main className="ue-login-page">
                {/* Animated construction background */}
                <div className="ue-scene" aria-hidden="true">
                    <div className="ue-orb" />

                    <div className="ue-building ue-building-one">
                        {Array.from({ length: 12 }, (_, i) => (
                            <span key={i} />
                        ))}
                    </div>

                    <div className="ue-building ue-building-two">
                        {Array.from({ length: 18 }, (_, i) => (
                            <span key={i} />
                        ))}
                    </div>
                        
                    <div className="ue-building ue-building-three">
                        {Array.from({ length: 10 }, (_, i) => (
                            <span key={i} />
                        ))}
                    </div>

                    <div className="ue-crane">
                        <span className="ue-crane-arm" />
                        <span className="ue-crane-cable" />
                        <span className="ue-crane-hook" />
                    </div>

                    <div className="ue-ground" />
                </div>

                <div className="ue-login-container">
                    {/* Left-side introduction */}
                    <section className="ue-login-intro">
                        <div className="ue-eyebrow">
                            <span className="ue-live-dot" />
                            BUILT ON TRUST. DESIGNED FOR THE FUTURE.
                        </div>

                        <h1>
                            Building
                            <br />
                            <span>Tomorrow.</span>
                            <br />
                            Today.
                        </h1>

                        <p>
                            Welcome to UrbanEdge Constructions.
                            Sign in to manage your workspace and
                            keep your projects moving forward.
                        </p>

                        <div className="ue-feature">
                            <span className="ue-feature-icon">↗</span>
                            <div>
                                <strong>Your projects, one place.</strong>
                                <small>
                                    A smarter way to stay connected.
                                </small>
                            </div>
                        </div>
                    </section>

                    {/* Existing login form */}
                    <section className="ue-login-card">
                        <div className="ue-card-label">
                            <span className="ue-card-icon">U</span>
                            <span>URBANEDGE / CLIENT PORTAL</span>
                        </div>

                        <h2>Welcome Back</h2>
                        <p className="ue-card-description">
                            Enter your credentials to continue.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="ue-field">
                                <label htmlFor="login-email">
                                    Email Address
                                </label>

                                <input
                                    id="login-email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Enter your email"
                                    {...register("email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className={`form-control ${errors.email ? "is-invalid" : ""
                                        }`}
                                />

                                {errors.email && (
                                    <p className="invalid-feedback">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="ue-field">
                                <label htmlFor="login-password">
                                    Password
                                </label>

                                <input
                                    id="login-password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: "This field is required"
                                    })}
                                    className={`form-control ${errors.password ? "is-invalid" : ""
                                        }`}
                                />

                                {errors.password && (
                                    <p className="invalid-feedback">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="ue-login-button"
                            >
                                <span>LOGIN TO DASHBOARD</span>
                                <span className="ue-button-arrow">→</span>
                            </button>
                        </form>

                        <div className="ue-secure-note">
                            <span>◆</span>
                            Secure access to your account
                        </div>
                    </section>
                </div>

                <div className="ue-login-bottom">
                    <span>URBANEDGE CONSTRUCTIONS</span>
                    <span>BUILDING THE FUTURE</span>
                </div>
            </main>

            <Footer />
        </>
    );

}

export default Login
