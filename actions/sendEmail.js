"use server"

import { Resend } from 'resend';
import EmailTemplate from '@/components/Templates/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);


const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validateName = (name) => {
    const regex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
    return regex.test(name);
};
const validateMobileNumber = (number) => {
    const regex = /^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return regex.test(number);
};

export async function sendEmail(details) {
    try {
        if (!validateEmail(details.email)) {
            return {
                success: false,
                error: "Invalid email!"
            }
        }
        if (!validateName(details.name)) {
            return {
                success: false,
                error: "Invalid name!"
            }
        }
        if (!validateMobileNumber(details.mobileNumber)) {
            return {
                success: false,
                error: "Invalid mobile number!"
            }
        }

        const templateParams = {
            name: details.name,
            email: details.email,
            message: details.message,
            mobileNumber: details.mobileNumber
        }
        const { data, error } = await resend.emails.send({
            from: 'Sudip Lamichhane <contact@sudip-lamichhane.com.np>',
            to: ['sudeeplamichhane18@gmail.com'],
            subject: details.subject,
            react: EmailTemplate(templateParams),
        });

        console.log("Resend response:", { data, error });

        if (error) {
            return {
                success: false,
                error: "Cannot send message!"
            }
        }
        return {
            success: true,
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            apiError: "Something went wrong!"
        }
    }
}