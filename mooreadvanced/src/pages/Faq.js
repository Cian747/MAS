import { useState } from 'react'
import Header from '../components/Header'

const items = [
    {
       title: "What is accreditation in higher education?",
       content: "Accreditation is a process whereby an external body, either governmental, quasigovernmental or private body evaluates the quality of higher education institutions as a whole or specific units within institutions (programs or courses) based on certain predetermined standards."
    },
    {
       title: "What is the difference between quality assurance and accreditation?",
       content: "Quality assurance typically used to describe all forms of external monitoring and review. A variety of methods are used by organizations to assess quality when applying them to different units of analysis (institutions, programs, or courses) in higher education. Accreditation is method used by QA agencies to assess quality."
    },
    {
       title: "What is organizational effectiveness?",
       content: "Organizational effectiveness refers to how effectively an organization achieves its desired goals."
    },
    {
        title: "What is a quality management system?",
        content: "A systematic evaluation process that includes assessment of all individuals involved in accreditation or, business processes. This periodic review evaluates the extent to which an organization is achieving the goals and objectives it has established and utilizes the results as a basis for making appropriate improvements. Assessments may include evaluations of the administrative polices, procedures, and policies; day-to-day program operations; and the products and services provided."
    },
    {
        title:"What is capacity building?",
        content: "Capacity building is the process of obtaining, improving and retaining the facility or power of an individual or organization to produce, perform and deploy the necessary skills, knowledge, tools, and other resources needed to do their jobs competently and effectively and fulfill an organization’s objectives and mission. Capacity building allows organizations to develop new resources to perform business activities; to leverage available resources to the most effective use; and to maximize their strengths so as to achieve business goals."
    }
 ]

function Faq(){
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
       setActiveIndex(index === activeIndex ? -1 : index);
    };
    return(
        <>
            <Header />
            <div className="accordion-container">
                <div className="Faq">
                    <div className='page-title'>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div>
                        {items.map((item, index) => (
                            <div key={item.title}>
                            <button className='accordion-button' onClick={() =>handleClick(index)}>{item.title}</button>
                            {index === activeIndex && <p className='accordion-content'>{item.content}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;