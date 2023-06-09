import Image from 'next/image';

export default function Footer() {
    return (
        <div className="Footer">
            <div className='Footer_holder'>
                <div className="Footer_container">
                    <div className="Footer_icon-box">
                        <a href="https://www.instagram.com/elendelmar" target="_blank">
                            <Image
                                src="/instagram.png"
                                width={50}
                                height={50}
                                alt="The logo of instagram"
                                className="Container_socials Footer_img"
                            />
                        </a>

                        <a href="https://www.facebook.com/smirnova.olena" target="_blank">
                            <Image
                                src="/facebook.png"
                                width={50}
                                height={50}
                                alt="The logo of facebook"
                                className="Container_socials Footer_img"
                            />
                        </a>

                        <a href="https://web.telegram.org/a/#417377486" target="_blank">
                            <Image
                                src="/telegram.webp"
                                width={50}
                                height={50}
                                alt="The logo of telegram"
                                className="Container_socials Footer_img"
                            />
                        </a>

                        <a href='https://wa.me/34634859891'>
                            <Image
                                src="/whatsapp.webp"
                                width={50}
                                height={50}
                                alt="The logo of whatsapp"
                                className="Container_socials Footer_img"
                            />
                        </a>
                    </div>
                    <div className='Footer_text-box'>
                        <p className='Footer_text'>Built with</p>
                        <a href='https://nextjs.org/' target='_blank'>
                            <Image
                                src="/next.png"
                                width={50}
                                height={50}
                                alt="The logo of next"
                                className="Container_socials Footer_img"
                            />
                        </a>
                        <p className='Footer_text'>Made by Mejor Tech</p>
                    </div>
                </div>
                <div className="Footer_text-down">
                    <p>© All Rights Reserved Terms of Use and Privacy Policy</p>
                    <a href="mailto:smirnova.olena@gmail.com" target="_blank">smirnova.olena@gmail.com</a>
                </div >
            </div>
        </div>
    )
}