
import React from "react";
import "../index.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();


    

    return (
        <footer className="footer  bg-black text-white p-4 text-center fixed bottom-0 w-full">
            <div className="m-0">
                <p>&copy; {currentYear} Generate Your Own Memes --> MemeHub</p>
            </div>
        </footer>
    );
};

export default Footer;
