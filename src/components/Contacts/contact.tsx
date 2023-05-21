
import { useEffect, useState } from 'react';
import { useTranslation } from "next-i18next";

export default function Contact() {
    return (
        <div id='Contact' className='Mycontact'>
            <img className='Mycontact_img' src="./family.jpg" alt="try" />

            <div className='Mycontact_info-box'>
                <h1 className='Mycontact_header'>Contact me</h1>
                <p className='Mycontact_text'>
                    If you have any questions or you want to book your wedding date please leave your info, and we will get back to you!
                </p>
                <form className='Mycontact_form' action=''>
                    <input className='Mycontact_input' placeholder='Your Name...' type={"text"} required />
                    <input className='Mycontact_input' placeholder='Email here...' type={"email"} required />
                    <input className='Mycontact_input' placeholder='Phone number...' type={"number"} required />
                    <input className='Mycontact_input' placeholder='Your wedding date...' type={"text"} />
                    <input className='Mycontact_input' placeholder='Your Location...' type={"text"} />
                    <textarea className='Mycontact_input' placeholder='Feel free to ask me here...' />
                    <button className='Mycontact_btn' type={"submit"}>Send</button>
                </form>
            </div>
        </div>
    )
}