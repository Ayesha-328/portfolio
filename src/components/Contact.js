import React,{ useState } from 'react'
import emailjs from '@emailjs/browser';
import Intersect from '../assets/images/intersect.png'
import Dots from '../assets/images/contact-dot-pattern.png'
import FormMessage from './FormMessage';
import { Link } from 'react-scroll';

function Contact() {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
    const [submit,setSubmit]=useState(null);

    function handlechange(e){
        e.preventDefault();
        const {name,value} = e.target;
        setFormData(prev=>{
            return({
                ...prev,
                [name]:value
            })
        })
    }
    function handlesubmit(e){
        e.preventDefault();

        if(formData.name=="" && formData.email==""){
            console.log("Please fill the required fields!!");
            return 
        }
        
        const serviceId="service_sk2anbh";
        const templateId="template_t6i2snp";
        const publicKey="7whIdXGlU2V_I9-Fy";

        const templateParams= {
            from_name:formData.name,
            from_email:formData.email,
            to_name:"Ayesha",
            message:formData.message
        }

        emailjs.send(serviceId,templateId, templateParams, publicKey)
        .then((res)=>{
            console.log("Email sent successfully",res);
            setSubmit(true);
            setFormData({
                name:"",
                email:"",
                message:""
            })
        })
        .catch(err=>{
            setSubmit(false);
            console.err("Error sending email:",err)});
    }
  return (
    <div className="contact-container container" id='contact'>
        <img className='design-img' src={Intersect} alt="" />
        <img className="dots" src={Dots} alt="" />
        <Link 
      activeClass="active" 
      to="hero" 
      spy={true} 
      smooth={true} 
      duration={500} 
    ><svg width="118" height="100" viewBox="0 0 208 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.824 68.2916V80.7083H143L114.894 100.842L127.157 109.62L176.176 74.4999L127.157 39.3794L114.894 48.158L143 68.2916H31.824Z" fill="#FA00FF" />
                </svg></Link>
                {submit===null
                ?
                <>
                <div className="main-heading">Contact Me</div>
        <form action={<FormMessage/>} onSubmit={handlesubmit}>
            <label htmlFor="name">Name:
            </label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handlechange} placeholder='Enter your name here...'/>

            <label htmlFor="email">Email:
            </label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handlechange} placeholder='Enter your email here...'/>

            <label htmlFor="message">Message:
            </label>
                <textarea name="message" id="message" value={formData.message} onChange={handlechange} cols="30" rows="7"/>

                <button className="btn">Submit</button>
        </form>
        </>
        :
        <FormMessage submit={submit}/>
            }
        
    </div>
  )
}

export default Contact