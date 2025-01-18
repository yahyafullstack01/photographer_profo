import { useTranslation } from "next-i18next";
import Image from "next/image";

interface MyFeedbackProps {
  images: string[];
}

export default function MyFeedback({ images }: MyFeedbackProps) {
  const { t } = useTranslation("Home");

  const feedback_title: any = t("Feedback_title", { returnObjects: true });
  const feedback_names: any = t("Feedback_names", { returnObjects: true });
  const feedback_info_1: any = t("Feedback_info_1", { returnObjects: true });
  const feedback_info_2: any = t("Feedback_info_2", { returnObjects: true });
  const feedback_info_3: any = t("Feedback_info_3", { returnObjects: true });
  const feedback_info_4: any = t("Feedback_info_4", { returnObjects: true });

  return (
    <div className="MyFeedback">
      <h1 className="MyFeedback_title">{feedback_title}</h1>
      <div className="MyFeedback_grid">
        <div className="MyFeedback_contain-img">
          <Image
            src={images[0]}
            alt="Feedback Image 1"
            className="MyFeedback_img"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="MyFeedback_contain-info">
          <h1 className="MyFeedback_name">{feedback_names[0]}</h1>
          <p className="MyFeedback_txt">{feedback_info_1}</p>
        </div>

        <div className="MyFeedback_contain-img">
          <Image
            src={images[1]}
            alt="Feedback Image 2"
            className="MyFeedback_img"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="MyFeedback_contain-info">
          <h1 className="MyFeedback_name">{feedback_names[1]}</h1>
          <p className="MyFeedback_txt">{feedback_info_2}</p>
        </div>

        <div className="MyFeedback_contain-img">
          <Image
            src={images[2]}
            alt="Feedback Image 3"
            className="MyFeedback_img"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="MyFeedback_contain-info">
          <h1 className="MyFeedback_name">{feedback_names[2]}</h1>
          <p className="MyFeedback_txt">{feedback_info_3}</p>
        </div>

        <div className="MyFeedback_contain-img">
          <Image
            src={images[3]}
            alt="Feedback Image 4"
            className="MyFeedback_img"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="MyFeedback_contain-info">
          <h1 className="MyFeedback_name">{feedback_names[3]}</h1>
          <p className="MyFeedback_txt">{feedback_info_4}</p>
        </div>
      </div>
    </div>
  );
}
