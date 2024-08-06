import Profile from "./profile-removebg-preview.png";
import Github from "./github.svg";
import Linkedin from "./linkedin-161-svgrepo-com.svg";
import WP from "./whatsapp.svg";
import Mail from "./gmail-svgrepo-com.svg";

export const images = {
  Profile,
  Github: (props: string) => <Github className={`${props}`} />,
  Linkedin: (props: string) => <Linkedin className={`${props}`} />,
  WP: (props: string) => <WP className={`${props}`} />,
  Mail: (props: string) => <Mail className={`${props}`} />,
};
