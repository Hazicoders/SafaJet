"use client"
import Image from "next/image";
import React from 'react';
// import ContactForm from "@/components/ContactForm";
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import Contact from '../../components/contact/Contact'



const contact = () => {

  const isNavbarVisible = false;
  const isFooterVisible = false;

  return (
    <section>
    <Navbar isVisible={isNavbarVisible} />
    <section className="gradient-form vh-100" id="sectioncont">
    <div className="container py-5 pt-5">
      <div className="row">
        <div className="col-xl-10">
          <div className=" rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6 position-relative gradient-custom-1" id="gradient-custom-1">
                <div className=" p-md-5 mx-md-4">

                  <div className="text-center">
                    <h2>Travaillons ensemble !</h2>
                    <p>
                      N'hésitez pas à nous contacter pour toute question, demande de devis ou 
                      simplement pour discuter de votre prochain projet. Nous sommes là pour vous 
                      aider à concrétiser vos idées et à surpasser vos attentes
                    </p>
                  </div>
   
                <Contact/>
                 
            </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2 position-absolute" id="sectioncont1">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <div>
                    <h5 className="coloTxt">Telephone</h5>
                    <p>+253 77 86 11 43</p>
                    <p>+253 77 22 63 43</p>
                  </div>
                  <div>
                    <h5 className="coloTxt">Email</h5>
                    <p>safajetdjib@gmail.com</p>
                  </div>
                  <div>
                    <h5>Adresse</h5>
                    <p>Rue de Berne, Djibouti centre-ville</p>
                  </div>
                  <div>
                    <h5 className="coloTxt">Suivez-nous</h5>
                    <div>
                      <Image
                        src="/icon44.png"
                        width={25}
                        height={25}
                        className="mx-2 text-light"
                        alt="teste"
                     
                      />
                      <Image
                        src="/icon55.png"
                        width={25}
                        height={25}
                        className="text-light"
                        alt="teste"
                      />
                      <Image
                        src="/icon66.png"
                        width={25}
                        height={25}
                        className="mx-2 text-light"
                        alt="teste"
                    
                      />
                      <Image
                        src="/icon77.png"
                        width={25}
                        height={25}    
                        className="text-light"    
                        alt="teste"      
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <Footer isVisible={isFooterVisible} />
</section>
    );
  };
  
export default contact;