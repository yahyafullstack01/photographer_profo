import { RxCross1 } from 'react-icons/rx';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from 'next/link';


export default function Menu() {

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
        <>
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
                    <a className="Menu-open_Close" href="#"><RxCross1 className="Menu-open_close" /></a>
                </div>
                <div className="Menu-open_Box-2">
                    <div className="Menu-open_links-con">
                        <a className="Menu-open_links" href="/#Gallery">{Nav_element[0]}</a>
                        {/* <a className="Menu-open_links" href="/#About">{Nav_element[1]}</a> */}
                        {/* <a className="Menu-open_links" href="/#Story">{Nav_element[2]}</a> */}
                        <a className="Menu-open_links" href="/#Services">{Nav_element[3]}</a>
                        <a className="Menu-open_links" href="/FeedBack">{Nav_element[4]}</a>
                        <a className="Menu-open_links" href="/#Contact">{Nav_element[5]}</a>
                    </div>
                    <div className="Menu-open_lang-con">
                        <select className="Menu-open_selector"
                            defaultValue={router.locale}
                            onChange={handleChangeLanguage}
                        >
                            <option className="Menu-open_option" value="en">English</option>
                            <option className="Menu-open_option" value="uk">Ukrainian</option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    )
}