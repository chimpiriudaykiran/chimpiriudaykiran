"use client";

import ReachOutForm from "@/components/ReachOutForm";
import { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => {
    // Load LinkedIn script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-base-200">
   
      <div className="mt-10">                             
        <ReachOutForm />
      </div>
    </section>
  );
};

export default Contact;

// const Contact: React.FC = () => (
//     <section id="contact" className="py-20 bg-base-200">
//         {/*<div className="container mx-auto">*/}
//         {/*    <motion.h2*/}
//         {/*        initial={{ opacity: 0 }}*/}
//         {/*        whileInView={{ opacity: 1 }}*/}
//         {/*        transition={{ duration: 0.5 }}*/}
//         {/*        className="text-4xl font-bold text-center mb-10"*/}
//         {/*    >*/}
//         {/*        Contact*/}
//         {/*    </motion.h2>*/}
//         {/*    <motion.div*/}
//         {/*        initial={{ opacity: 0, y: 20 }}*/}
//         {/*        whileInView={{ opacity: 1, y: 0 }}*/}
//         {/*        transition={{ duration: 0.5, delay: 0.2 }}*/}
//         {/*        className="text-center max-w-lg mx-auto"*/}
//         {/*    >*/}
//         {/*        <p className="text-lg mb-4">*/}
//         {/*            I’m open to full-time opportunities as a Full Stack Developer. Reach out to me at:*/}
//         {/*        </p>*/}
//         {/*        <p>Email: <a href={`mailto:${portfolioData.email}`} className="link link-primary">{portfolioData.email}</a></p>*/}
//         {/*        <p>Phone: <a href={`tel:${portfolioData.phone}`} className="link link-primary">{portfolioData.phone}</a></p>*/}
//         {/*        <p>LinkedIn: <a href={portfolioData.linkedin} target="_blank" className="link link-primary">LinkedIn</a></p>*/}
//         {/*        <p>GitHub: <a href={portfolioData.github} target="_blank" className="link link-primary">GitHub</a></p>*/}
//         {/*        <p>Website: <a href={portfolioData.website} target="_blank" className="link link-primary">codewithuday.co</a></p>*/}
//         {/*    </motion.div>*/}
//         {/*</div>*/}
//         <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="uday-kiran-chimpiri" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/uday-kiran-chimpiri?trk=profile-badge">Uday Kiran Chimpiri</a></div>
   
//         <div className="mt-10">                             
//             <ReachOutForm />
//         </div>
//     </section>
// );



// export default Contact;