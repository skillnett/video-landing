import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className='home-html'>
            <div className='home-body' style={{ paddingBottom: 40 }}>
                <header className='container'>
                    <nav className='row navbar'>
                        <div className='col-3'>
                            <a className='navbar-brand' href='/'>
                                <img
                                    src='/home/logo.svg'
                                    width='30'
                                    height='30'
                                    className='d-inline-block align-top'
                                    alt=''
                                />
                            </a>
                        </div>
                        <div className='col-9'>
                            <ul className='menu'>
                                <li className='menu__item'>
                                    <a href='mailto:support@retouch-ai.com'>
                                        Contact us
                                    </a>
                                </li>
                                <li className='menu__item'>
                                    <Link href='/privacy-policy'>
                                        <a>Privacy policy</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <section className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 style={{ fontSize: 48, margin: '40px 0' }}>
                                Retouch AI
                            </h1>

                            <h2 style={{ margin: '19px 0' }}>Privacy Policy</h2>
                            <p>
                                This privacy policy governs your use of the
                                software application Retouch AI (“Application”)
                                for mobile devices that was created by ‘Yaroslav
                                Brekhunchenko’. The Application allows photos
                                modifying and exporting to the external sources.
                            </p>
                            <p>
                                When you use the Application, you may provide
                                (a) your name, email address, website URL,
                                website name, and other registration
                                information; (b) transaction-related
                                information, such as when you make purchases;
                                (c) information you provide us when you contact
                                us for help/feedback; (e) information you enter
                                into our system when using the Application, such
                                as contact information and project management
                                information. We may also use the information you
                                provided to us to contact you from time to time
                                to provide you with information, required
                                notices, etc.
                            </p>
                            <p>
                                In addition, the Application may collect certain
                                information automatically, including, but not
                                limited to, the type of mobile device you use,
                                your mobile devices unique device ID, your
                                mobile operating system, the type of mobile
                                Internet browsers you use, and information about
                                the way you use the Application.
                            </p>
                            <p>
                                Only aggregated, anonymized data is periodically
                                transmitted to external services to help us
                                improve the Application and our service. We will
                                share your information with third parties only
                                in the ways that are described in this privacy
                                statement.
                            </p>
                            <p>
                                We may disclose User Provided and Automatically
                                Collected Information as required by law, such
                                as to comply with a subpoena, or similar legal
                                process; when we believe in good faith that
                                disclosure is necessary to protect our rights,
                                protect your safety or the safety of others,
                                investigate fraud, or respond to a government
                                request; with our trusted services providers who
                                work on our behalf, do not have an independent
                                use of the information we disclose to them, and
                                have agreed to adhere to the rules set forth in
                                this privacy statement.
                            </p>
                            <p>
                                We work with analytics services to help us
                                understand how the Application is being used,
                                such as the frequency and duration of usage.
                                Analytics services use some of the information
                                collected by the Application, including, but not
                                limited to, the unique identification ID of your
                                device. These third parties may also obtain
                                anonymous information about your non-precise
                                location information in order to help analyze
                                application usage. We may also share encrypted
                                versions of information you have provided in
                                order to enable our partners to append other
                                available information about you for analysis.
                            </p>
                            <p>
                                You can stop all collection of information by
                                the Application easily by uninstalling the
                                Application. You may use the standard Appstore
                                uninstall process.
                            </p>
                            <p>
                                Data Retention Policy, Managing Your Information
                                We will retain User Provided data for as long as
                                you use the Application and for a reasonable
                                time thereafter. We will retain Automatically
                                Collected information for up to 48 months and
                                thereafter may store it in aggregate. If you’d
                                like us to delete User Provided Data that you
                                have provided via the Application, please
                                contact us at support@retouch-ai.com and we will
                                respond. Please note that some or all of the
                                User Provided Data may be required in order for
                                the Application to function properly.
                            </p>
                            <p>
                                We do not use the Application to knowingly
                                solicit data from or market to children under
                                the age of 13. If a parent or guardian becomes
                                aware that his or her child has provided us with
                                information without their consent, he or she
                                should contact us at support@retouch-ai.com. We
                                will delete such information from our files
                                within a reasonable time.
                            </p>
                            <p>
                                We are concerned about safeguarding the
                                confidentiality of your information. We provide
                                physical, electronic, and procedural safeguards
                                to protect information we process and maintain.
                                For example, we limit access to this information
                                to authorized employees and contractors who need
                                to know that information in order to operate,
                                develop or improve our Application. Please be
                                aware that, although we endeavor provide
                                reasonable security for information we process
                                and maintain, no security system can prevent all
                                potential security breaches.
                            </p>
                            <p>
                                This Privacy Policy may be updated from time to
                                time for any reason. We will notify you of any
                                changes to our Privacy Policy by posting the new
                                Privacy Policy at http://retouch-ai.com/privacy.
                                You are advised to consult this Privacy Policy
                                regularly for any changes, as continued use is
                                deemed approval of all changes.
                            </p>
                            <p>
                                By using the Application, you are consenting to
                                our processing of your information as set forth
                                in this Privacy Policy now and as amended by us.
                                “Processing,” means using cookies on a
                                computer/hand held device or using or touching
                                information in any way, including, but not
                                limited to, collecting, storing, deleting,
                                using, combining and disclosing information, all
                                of which activities will take place in Ukraine.
                                If you reside outside Ukraine your information
                                will be transferred, processed and stored there
                                under Ukraine privacy standards.
                            </p>
                            <p>
                                Contact us If you have any questions regarding
                                privacy while using Retouch AI, or have
                                questions about the app, contact us at
                                support@retouch-ai.com
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
