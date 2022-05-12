import { FormattedMessage } from "react-intl";
import { SocialFooter } from "../../styles/divStyles";
import { BaseSocialIconButton, EmailRounded, Facebook, Linkedin, Twitter, WhatsApp } from "../../styles/textStyles";

// A basic flexbox div to align the links.
const PageFooter = () => {
  return (
 
      <SocialFooter>
        <p>
            <FormattedMessage
            id="footer.social"
            defaultMessage="Follow us on social media" />
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
            <BaseSocialIconButton basecolor={"#3b5998"}>
                <Facebook />
            </BaseSocialIconButton>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
          <BaseSocialIconButton basecolor={"#1DA1F2"}>
                <Twitter />
            </BaseSocialIconButton>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/">
          <BaseSocialIconButton basecolor={"#0077b5"}>
                <Linkedin />
            </BaseSocialIconButton>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5551993261772">
          <BaseSocialIconButton basecolor={"#25D366"}>
                <WhatsApp />
            </BaseSocialIconButton>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:rodrigo.azevedo.carvalho@gmail.com">
          <BaseSocialIconButton basecolor={"#e62727"}>
                <EmailRounded />
            </BaseSocialIconButton>
          </a>
        </p>
      </SocialFooter>

  );
};

export { PageFooter };
