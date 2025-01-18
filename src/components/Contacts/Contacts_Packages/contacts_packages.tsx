import { useTranslation } from "next-i18next";
import Image from "next/image";

interface ContactProps {
  image: string | null;
}

export default function Contact({ image }: ContactProps) {
  const { t } = useTranslation("Home");

  const Contact_header: any = t("Contact_title", { returnObjects: true });
  const Contact_info: any = t("Contact_info", { returnObjects: true });
  const Contact_holders: any = t("Contact_holders", { returnObjects: true });
  const Contact_btn: any = t("Contact_btn", { returnObjects: true });
  const Contact_choice_label: any = t("Contact_choice_label", { returnObjects: true });
  const Contact_choice: any = t("Contact_choice", { returnObjects: true });

  return (
    <div id="Contact" className="Mycontact_packages">
      {image ? (
        <Image
          className="Mycontact_packages_img"
          src={image}
          alt="The contact picture"
          width={9000}
          height={9000}
        />
      ) : (
        <div className="Mycontact_packages_placeholder">No image available</div>
      )}
      <div className="Mycontact_packages_info-box">
        <h1 className="Mycontact_packages_header">{Contact_header}</h1>
        <p className="Mycontact_packages_text">{Contact_info}</p>
        <form
          className="Mycontact_packages_form pageclip-form"
          action="https://send.pageclip.co/EJu3hCGEEWDdHQ16fppwbE2ffwGbTWsz/Photography2023"
          method="POST"
        >
          <input
            className="Mycontact_packages_input"
            placeholder={Contact_holders[0]}
            type="text"
            name="name"
            required
          />
          <input
            className="Mycontact_packages_input"
            placeholder={Contact_holders[1]}
            type="email"
            name="email"
            required
          />
          <input
            className="Mycontact_packages_input"
            placeholder={Contact_holders[2]}
            type="number"
            name="phone"
            required
          />
          <input
            className="Mycontact_packages_input"
            placeholder={Contact_holders[3]}
            type="text"
            name="weddingDate"
          />
          <input
            className="Mycontact_packages_input"
            placeholder={Contact_holders[4]}
            type="text"
            name="location"
          />
          <textarea
            className="Mycontact_packages_textarea"
            placeholder={Contact_holders[5]}
            name="message"
          />
          <label htmlFor="package" className="Mycontact_packages_choice-box">
            {Contact_choice_label}:
            <select
              name="package"
              className="Mycontact_packages_select"
              id="package"
              defaultValue="" // Fixes the warning by using defaultValue
            >
              <option disabled value="">
                {Contact_holders[6]}
              </option>
              {Contact_choice.map((choice: string, index: number) => (
                <option key={index} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
          </label>
          <button className="Mycontact_packages_btn pageclip-form__submit" type="submit">
            {Contact_btn}
          </button>
        </form>
      </div>
    </div>
  );
}
