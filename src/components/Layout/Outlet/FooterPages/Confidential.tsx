import React from 'react';
import s from "./Footer.module.css";

const Confidential = () => {
    return (
        <div className={s.footerPage}>
            <h1>Confidential</h1>

            <div>Please note that any confidential information should not be shared on social media platforms, as these
                channels are public and can be accessed by anyone. Examples of confidential information include, but are
                not limited to, customer data, trade secrets, financial information, and proprietary company
                information. It is important to adhere to your company's social media policies and guidelines to avoid
                any breaches of confidentiality. If you have any questions or concerns, please consult with your
                supervisor or legal department.
            </div>
        </div>
    );
};

export default Confidential;