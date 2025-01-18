import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
  titleIndex: number; // To differentiate titles based on Gallery_pages_Names
}

export default function GalleryComponent({ images, titleIndex }: GalleryProps) {
  const { t } = useTranslation("Home");
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const Gallery_pages_Names: any = t("Gallery_pages_Names", { returnObjects: true });
  const Services_package_title: any = t("Services_package_title", { returnObjects: true });
  const Services_package_btn: any = t("Services_package_btn", { returnObjects: true });

  const showFullscreenImage = (index: number) => {
    setCurrentIndex(index);
    setIsFullscreenOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const hideFullscreenImage = () => {
    setIsFullscreenOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };


  return (
    <div className="Gallery">
      <h1 className="Gallery_title">{Gallery_pages_Names[titleIndex]}</h1>
      <div className="Gallery_grid-box">
        {images.map((image, index) => (
          <div key={index} className="Gallery_image-container">
            <div className="Gallery_spinner">
              {/* Custom spinner */}
              <div className="spinner"></div>
            </div>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="Gallery_img"
              loading="lazy"
              width={800} // Adjust width
              height={600} // Adjust height
              onLoad={(e) => {
                // Hide spinner once the image is loaded
                (e.target as HTMLImageElement).parentElement
                  ?.querySelector(".Gallery_spinner")
                  ?.remove();
              }}
              onClick={() => showFullscreenImage(index)} // Enable full-screen mode
            />
          </div>
        ))}
      </div>
      <div className="Gallery_package-con">
        <h1 className="Gallery_package-txt">{Services_package_title}</h1>
        <Link passHref href="/Packages">
          <button className="Gallery_package-btn">{Services_package_btn}</button>
        </Link>
      </div>
      {isFullscreenOpen && (
        <div id="fullscreen-overlay">
          <span id="close-btn" onClick={hideFullscreenImage}>
            &times;
          </span>
          <Image
            id="fullscreen-image"
            src={images[currentIndex]}
            alt={images[currentIndex]}
            width={9000} // Specify appropriate width
            height={9000} // Specify appropriate height
          />
          <span
            id="prev-btn"
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                (prevIndex - 1 + images.length) % images.length
              )
            }
          >
            &lt;
          </span>
          <span
            id="next-btn"
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % images.length
              )
            }
          >
            &gt;
          </span>
        </div>
      )
      }
    </div>
  );
}