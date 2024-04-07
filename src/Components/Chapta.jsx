import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Chapta = () => {
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleCaptchaChange = (value) => {
        // Called when the user successfully completes the reCAPTCHA challenge
        setCaptchaValue(value);
    };

    const handleSubmit = () => {
        if (captchaValue) {
            // Do something with the captcha value, like sending it to the server
            console.log('Captcha Value:', captchaValue);
        } else {
            // Handle case where the user has not completed the reCAPTCHA challenge
            console.error('Please complete the reCAPTCHA challenge');
        }
    };

    return (
        <div>
            <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"
                onChange={handleCaptchaChange}
            />
            <button onClick={handleSubmit} className="mt-10 text-center font-bold  w-[280px] md:w-[304px] text-white text-[12px] md:text-[18px] px-2 open-sans bg-[#FE7721] rounded-full py-4  tracking-wide "><p className="flex justify-center items-center space-x-2"><span>Explore product</span> <img className="w-4" src="/arrowr.svg" alt="" /></p></button>
        </div>
    );
};

export default Chapta;
