"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

const ReachOutForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<Errors>({});
    const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const validateForm = (): boolean => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid phone number";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            setSubmitStatus("submitting");

            try {
                const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (response.ok) {
                    setSubmitStatus("success");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                } else {
                    setSubmitStatus("error");
                    console.error(result);
                }
            } catch (error) {
                console.error("Submission error:", error);
                setSubmitStatus("error");
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card bg-base-100 shadow-xl max-w-md mx-auto p-6"
        >
            <h2 className="text-2xl font-bold text-center mb-6">Reach Out to Me</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                    <label htmlFor="name" className="label flex items-center">
                        <User className="mr-2 text-gray-500" size={20} />
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
                        placeholder="Your Name"
                    />
                    {errors.name && <span className="text-error text-sm mt-1">{errors.name}</span>}
                </div>

                <div className="form-control">
                    <label htmlFor="email" className="label flex items-center">
                        <Mail className="mr-2 text-gray-500" size={20} />
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                        placeholder="your.email@example.com"
                    />
                    {errors.email && <span className="text-error text-sm mt-1">{errors.email}</span>}
                </div>

                <div className="form-control">
                    <label htmlFor="phone" className="label flex items-center">
                        <Phone className="mr-2 text-gray-500" size={20} />
                        <span className="label-text">Phone (Optional)</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input input-bordered w-full ${errors.phone ? "input-error" : ""}`}
                        placeholder="(123) 456-7890"
                    />
                    {errors.phone && <span className="text-error text-sm mt-1">{errors.phone}</span>}
                </div>

                <div className="form-control">
                    <label htmlFor="message" className="label flex items-center">
                        <MessageSquare className="mr-2 text-gray-500" size={20} />
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`textarea textarea-bordered w-full ${errors.message ? "textarea-error" : ""}`}
                        placeholder="Write your message here..."
                    />
                    {errors.message && <span className="text-error text-sm mt-1">{errors.message}</span>}
                </div>

                <button
                    type="submit"
                    disabled={submitStatus === "submitting"}
                    className={`btn btn-primary w-full ${submitStatus === "submitting" ? "btn-disabled" : ""}`}
                >
                    {submitStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                    <div className="alert alert-success mt-4">
                        <span>Your message was sent successfully! I&aposll get back to you soon.</span>
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="alert alert-error mt-4">
                        <span>Sorry, there was an error sending your message. Please try again.</span>
                    </div>
                )}
            </form>
        </motion.div>
    );
};

export default ReachOutForm;