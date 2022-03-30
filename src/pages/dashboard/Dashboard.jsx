import { FormattedMessage } from "react-intl";
import { Container } from "../../styles/divStyles";
import { DashboardTextP } from "../../styles/textStyles";


const Dashboard = () => {
  return (
    <Container>
      <DashboardTextP>

        <FormattedMessage id="dashboard.WelcomeMessage" 
        defaultMessage="Welcome to the restaurant management system. This application was developed with the aim of offering both a simple inventory management system and a complex calculation to help the restaurant manager to calculate the fair price of his dishes." />
        </DashboardTextP>
<DashboardTextP>
        <FormattedMessage id="dashboard.multiMessage" defaultMessage="To facilitate the experience of users from different locations, this application supports two languages as well as the possibility of light and dark themes." />
</DashboardTextP>

        <DashboardTextP>

        <FormattedMessage id="dashboard.limitations" defaultMessage="Due to JSON server limitations (and my backend knowledge), some functionality was omitted, such as a query that only returned products with minimum quantities greater than the quantities available in stock. I believe this can be resolved and as soon as I have an answer I will expand this functionality." />
        </DashboardTextP>

        <DashboardTextP>

        <FormattedMessage id="dashboard.contact" defaultMessage=" Questions or suggestions can make use of the WhatsApp button, Email, or even GitHub itself. Enjoy." />
        </DashboardTextP>


    </Container>
  );
};
export { Dashboard };
