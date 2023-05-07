import { FiMenu } from "react-icons/fi";
import { RxCross1 } from 'react-icons/rx';

export default function Menu() {
    return (
        <>
        {/* This the Burger icon that shows up when Entering The tablet and Mobile mode */}
            <div className="Menu">
                <a href="#Menu"><FiMenu className="Menu_burger" /></a>
            </div>
        {/* This is the Menu That Opens Up when pressing The Burger Menu */}
            <section id="Menu" className="Menu-open">
                <div className="Menu-open_Box">
                    <a href="#">
                        <img
                            src="/logo.png"
                            alt="The logo of instagram"
                            className="Container_logo"
                        />
                    </a>
                    <a className="Menu-open_close" href="#"><RxCross1 /></a>
                </div>
                <div className="Menu-open_Box-2">
                    <div className="Menu-open_links-con">
                        <a className="Menu-open_links" href="">Packages</a>
                        <a className="Menu-open_links" href="">Blogs</a>
                        <a className="Menu-open_links" href="">Gallery</a>
                        <a className="Menu-open_links" href="">Offers</a>
                        <a className="Menu-open_links" href="">FeedBack</a>
                        <a className="Menu-open_links" href="">Contact</a>
                    </div>
                    <div className="Menu-open_lang-con">
                        <select className="Menu-open_selector">
                            <option className="Menu-open_option" value="en">English</option>
                            <option className="Menu-open_option" value="ru">Russian</option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    )
}