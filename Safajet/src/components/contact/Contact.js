// pages/contact.js

import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    entreprise:'',
    numero_telephone:'',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/contact/', formData);
      console.log('Data sent successfully:', response.data);
      // Ajoutez ici tout traitement ou redirection supplémentaire après l'envoi réussi
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (


            <form onSubmit={handleSubmit}>
            
                <div className="form-outline mb-4">
                    <input type="text" id="form2Example11" class="form-control" name='nom'
                    placeholder="Nom et Prenom" required value={formData.nom}  onChange={handleChange} />
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control" name='email'
                    placeholder="Adresse email"required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="form2Example11" class="form-control" name='entreprise'
                    placeholder="Nom de l'entreprise" required value={formData.entreprise}  onChange={handleChange} />
                </div>

                <div className="form-outline mb-4">
                    <input type="tel" id="form2Example11" class="form-control" name='numero_telephone'
                    placeholder="Numéro de téléphone" required value={formData.numero_telephone}  onChange={handleChange} />
                </div>



                <div data-mdb-input-init class="form-outline mb-4  border-primary-subtle">
                    <textarea class="form-control" id="form6Example7" rows="4" placeholder="Parlez-nous de vote demande" value={formData.messages}  onChange={handleChange} name='message'></textarea>
                </div>

                <button data-mdb-ripple-init type="submit" class="btn btn-primary mb-4 rounded">Envoyer</button>

            </form>

             
  );
};

export default Contact;
