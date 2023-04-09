import React from 'react';
import s from "./Footer.module.css";

const Policies = () => {
    return (
        <div className={s.footerPage}>
            <h1>Policies</h1>
            <p>Social Media Guidelines: Establish guidelines for how employees should represent your brand on social
                media. This should include guidelines for tone of voice, types of content, and how to respond to
                comments or questions.</p>

            <p>Confidentiality: Employees should not disclose confidential information on social media. This includes
                information about customers, clients, or business operations.</p>

            <p>Respectful Behavior: Employees should always behave respectfully and professionally on social media. They
                should not use discriminatory language or make derogatory comments about individuals or groups.</p>

            <p>Personal Accounts: Employees should be allowed to have personal social media accounts, but they should
                make it clear that their views do not necessarily represent the views of the company.</p>

            <p>Legal Compliance: Employees should be aware of legal obligations when using social media, such as
                intellectual property rights, defamation laws, and regulations related to advertising or promotional
                activities.</p>

            <p>Monitoring: It may be appropriate for the company to monitor social media activity related to the brand
                to ensure compliance with company policies and guidelines.
            </p>
        </div>
    );
};

export default Policies;