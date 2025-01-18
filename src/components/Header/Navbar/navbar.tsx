import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
    const { t } = useTranslation("Home");
    const Nav_element: any = t('Navbar_List', { returnObjects: true }) || [];

    const router = useRouter();

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value;
        router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: lang });
        console.log(lang);
    };

    return (
        <div id="Navbar" className="Container">
            <div className="Container_block Container_block--1">
                <a href="https://www.instagram.com/pic_best_moments" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/instagram.webp"
                        alt="The logo of Instagram"
                        className="Container_socials"
                        width={1000}
                        height={1000}
                    />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61552729176710" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/facebook.webp"
                        alt="The logo of Facebook"
                        className="Container_socials"
                        width={1000}
                        height={1000}
                    />
                </a>
            </div>
            <div className="Container_block Container_block--2">
                <a className="Container_links" href="#Gallery">{Nav_element[0]}</a>
                <a className="Container_links" href="#Services">{Nav_element[3]}</a>
            </div>
            <Link href="/">
                <Image
                    src="/Logo.webp"
                    alt="Website logo"
                    className="Container_logo"
                    width={1000}
                    height={1000}
                />
            </Link>
            <div className="Container_block Container_block--2">
                <Link className="Container_links" href="/FeedBack">{Nav_element[4]}</Link>
                <a className="Container_links" href="#Contact">{Nav_element[5]}</a>
            </div>
            <div className="Container_lang-con">
                <label htmlFor="language-selector" className="sr-only">Select Language</label>
                <select
                    id="language-selector"
                    className="Container_selector"
                    defaultValue={router.locale || 'en'}
                    onChange={handleChangeLanguage}
                >
                    <option className="Container_option" value="en">English</option>
                    <option className="Container_option" value="uk">Ukrainian</option>
                </select>
            </div>
            <div className="Menu">
                <a href="#Menu"><FiMenu className="Menu_burger" /></a>
            </div>
        </div>
    );
}
