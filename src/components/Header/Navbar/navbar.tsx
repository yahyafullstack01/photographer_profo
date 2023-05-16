import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";



export default function Navbar() {

    const router = useRouter();
    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value;
        router.push(router.pathname, router.asPath, { locale: lang });
        console.log(lang);
    };


    return (
        <div className="Container">
            <div className="Container_block Container_block--1">
                <a href="">
                    <img
                        src="/instagram.png"
                        alt="The logo of instagram"
                        className="Container_socials"
                    />
                </a>
                <a href="">
                    <img
                        src="/facebook.png"
                        alt="The logo of instagram"
                        className="Container_socials"
                    />
                </a>
            </div>
            <div className="Container_block Container_block--2">
                <a className="Container_links" href="">Packages</a>
                <a className="Container_links" href="">Blogs</a>
                <a className="Container_links" href="#Gallery">Gallery</a>
            </div>
            <a href="">
                <img
                    src="/logo.png"
                    alt="The logo of instagram"
                    className="Container_logo"
                />
            </a>
            <div className="Container_block Container_block--2">
                <a className="Container_links" href="">Offers</a>
                <a className="Container_links" href="">FeedBack</a>
                <a className="Container_links" href="">Contact</a>
            </div>
            <div className="Container_lang-con">
                <select className="Container_selector"
                    defaultValue={router.locale}
                    onChange={handleChangeLanguage}
                >
                    <option className="Container_option" value="en">English</option>
                    <option className="Container_option" value="uk">Ukrainian</option>
                </select>
            </div>
            {/* This the Burger icon that shows up when Entering The tablet and Mobile mode */}
            <div className="Menu">
                <a href="#Menu"><FiMenu className="Menu_burger" /></a>
            </div>
        </div>
    )
}