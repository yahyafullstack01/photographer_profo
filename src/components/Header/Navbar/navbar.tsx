import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Navbar() {

    // This fetches the translations from  i18nexus
    const { t } = useTranslation("Home");
    const Nav_element: any = t('Navbar_List', { returnObjects: true });

    // This fucntion detects which locale lang is the user choosing by clicking on one of the options
    const router = useRouter();
    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value;
        router.push(router.pathname, router.asPath, { locale: lang });
        console.log(lang);
    };


    return (
        <div id="Navbar" className="Container">
            <div className="Container_block Container_block--1">
                <a href="https://www.instagram.com/pic_best_moments" target="_blank">
                    <img
                        src="/instagram.png"
                        alt="The logo of instagram"
                        className="Container_socials"
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61552729176710" target="_blank">
                    <img
                        src="/facebook.png"
                        alt="The logo of instagram"
                        className="Container_socials"
                    />
                </a>
            </div>
            <div className="Container_block Container_block--2">
                <a className="Container_links" href="#Gallery">{Nav_element[0]}</a>
                <a className="Container_links" href="#Story">{Nav_element[2]}</a>
                <a className="Container_links" href="#Services">{Nav_element[3]}</a>
            </div>
            <Link href="/">
                <img
                    src="/logo.png"
                    alt="The logo of instagram"
                    className="Container_logo"
                />
            </Link>
            <div className="Container_block Container_block--2">
                <a className="Container_links" href="#About">{Nav_element[1]}</a>
                <Link className="Container_links" href="/FeedBack">{Nav_element[4]}</Link>
                <a className="Container_links" href="#Contact">{Nav_element[5]}</a>
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
        </div >
    )
}