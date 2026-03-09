import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
        emailjs.init(publicKey);
    }
};

interface EmailParams {
    from_name: string;
    from_email: string;
    phone?: string;
    interest?: string;
    message: string;
    to_email?: string;
    [key: string]: string | undefined;
}

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    interest?: string;
    message: string;
}

interface CallbackFormData {
    name: string;
    phone: string;
    preferredTime?: string;
}

interface ConsultationFormData {
    name: string;
    email: string;
    phone: string;
    program: string;
    message?: string;
}

/**
 * Send a contact form email
 */
export const sendContactEmail = async (data: ContactFormData): Promise<{ success: boolean; error?: string }> => {
    try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        if (!serviceId || !templateId) {
            throw new Error('EmailJS configuration is missing. Please check your environment variables.');
        }

        const templateParams: EmailParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Not provided',
            interest: data.interest || 'General inquiry',
            message: data.message,
            to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'elitechessventures@gmail.com',
        };

        await emailjs.send(serviceId, templateId, templateParams);

        return { success: true };
    } catch (error) {
        console.error('Email send error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to send email. Please try again.',
        };
    }
};

/**
 * Send a callback request email
 */
export const sendCallbackRequest = async (data: CallbackFormData): Promise<{ success: boolean; error?: string }> => {
    try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        if (!serviceId || !templateId) {
            throw new Error('EmailJS configuration is missing. Please check your environment variables.');
        }

        const templateParams: EmailParams = {
            from_name: data.name,
            from_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'elitechessventures@gmail.com',
            phone: data.phone,
            interest: 'Callback Request',
            message: `Callback request from ${data.name}. Phone: ${data.phone}${data.preferredTime ? `. Preferred time: ${data.preferredTime}` : ''}`,
            to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'elitechessventures@gmail.com',
        };

        await emailjs.send(serviceId, templateId, templateParams);

        return { success: true };
    } catch (error) {
        console.error('Callback request error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to send callback request. Please try again.',
        };
    }
};

/**
 * Send a consultation booking email
 */
export const sendConsultationRequest = async (data: ConsultationFormData): Promise<{ success: boolean; error?: string }> => {
    try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        if (!serviceId || !templateId) {
            throw new Error('EmailJS configuration is missing. Please check your environment variables.');
        }

        const templateParams: EmailParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            interest: `Free Consultation - ${data.program}`,
            message: data.message || `Consultation request for ${data.program} program. Please contact via phone: ${data.phone} or email: ${data.email}`,
            to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'elitechessventures@gmail.com',
        };

        await emailjs.send(serviceId, templateId, templateParams);

        return { success: true };
    } catch (error) {
        console.error('Consultation request error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to send consultation request. Please try again.',
        };
    }
};
