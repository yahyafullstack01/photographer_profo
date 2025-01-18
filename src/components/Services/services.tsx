import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

interface ServicesProps {
  images: string[];
}

export default function Services({ images }: ServicesProps) {
  // Fetch translations from i18nexus
  const { t } = useTranslation("Home");
  const Services_header: any = t("Services_title", { returnObjects: true });
  const Services_title_1: any = t("Services_title_box-1", { returnObjects: true });
  const Services_title_2: any = t("Services_title_box-2", { returnObjects: true });
  const Services_text_1: any = t("Services_box_content_1", { returnObjects: true });
  const Services_text_2: any = t("Services_box_content_2", { returnObjects: true });
  const Services_package_title: any = t("Services_package_title", { returnObjects: true });
  const Services_package_btn: any = t("Services_package_btn", { returnObjects: true });

  return (
    <div id="Services" className="Services">
      <h1 className="Services_title">{Services_header}</h1>
      <div className="Services_Grid">
        <div className=" Services_block Services_block--1">
          <Image
            className="Services_img"
            src={images[0]}
            alt="A picture of a Sony Camera"
            width={9000} // Specify appropriate width
            height={9000} // Specify appropriate height
          />
          <div className="Services_grid-content">
            <h1 className="Services_grid-content-title">{Services_title_1}</h1>
            <p className="Services_grid-content-text">
              {Services_text_1[0]}
              <br />
              {Services_text_1[1]}
              <br />
              {Services_text_1[2]}
            </p>
          </div>
        </div>
        <div className=" Services_block Services_block--2">
          <div className="Services_grid-content">
            <h1 className="Services_grid-content-title">{Services_title_2}</h1>
            <p className="Services_grid-content-text">
              {Services_text_2[0]}
              <br />
              {Services_text_2[1]}
              <br />
              {Services_text_2[2]}
            </p>
          </div>
          <Image
            className="Services_img"
            src={images[1]}
            alt="A picture of a couple in a grass field"
            width={9000} // Specify appropriate width
            height={9000} // Specify appropriate height
          />
        </div>
      </div>
      <div className="Services_package-con">
        <h1 className="Services_package-txt">{Services_package_title}</h1>
        <Link passHref href="/Packages">
          <button className="Services_package-btn">
            {Services_package_btn}
          </button>
        </Link>
      </div>
    </div>
  );
}
