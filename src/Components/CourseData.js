import Datascience from '../assets/Datascience.jpeg';
import webdev from '../assets/webdev.jpeg';
import graphic from '../assets/graphic.jpg';
import digitalmarket from '../assets/digitalmarket.jpg';
import cybersecurity from '../assets/cybersecurity.jpeg';
import DevOps from '../assets/DevOps.jpg';
import cloudcomp from '../assets/cloudcomp.jpeg';
import artificial from '../assets/artificial.jpeg';
import blockChain from '../assets/blockChain.webp';




const courseData = [
    {
        id:1,
        title:'Data Science',
        description:'Master data analysis and machine learning with Python, Pandas, and TensorFlow.',
        image: Datascience
    },
    {
        id: 2,
        title: 'Web Development',
        description: 'Learn full-stack web development with HTML, CSS, JavaScript, React, and Node.js.',
        image: webdev,
    },
    {
        id: 3,
        title: 'Graphic Design',
        description: 'Learn the basics of graphic design, typography, and Adobe Photoshop.',
        image: graphic,
    },
    {
        id: 4,
        title: 'Digital Marketing',
        description: 'Become an expert in SEO, social media marketing, and Google Ads.',
        image: digitalmarket,
    },
    {
        id: 5,
        title: 'Cloud Computing',
        description: 'Understand cloud platforms like AWS, Azure, and Google Cloud.',
        image: cloudcomp,
    },
    {
        id: 6,
        title: 'Cyber Security',
        description: 'Learn to protect systems and networks from cyber threats.',
        image: cybersecurity,
    },
    {
        id: 7,
        title: 'Artificial Intelligence',
        description: 'Dive into neural networks, natural language processing, and advanced AI concepts. Become a certified Artificial Intelligence Engineer, get into the field or AI now by joining us ',
        image: artificial,
    },
    {
        id: 8,
        title: 'Dev Ops',
        description: 'Master the principles of DevOps, including CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure as code using tools like Ansible and Terraform.',
        image: DevOps,
    },
    {
        id: 8,
        title: 'Blockchain Technology',
        description: 'Learn the fundamentals of blockchain, smart contracts, and decentralized applications (DApps) with hands-on projects to understand this transformative technology.',
        image: blockChain,
    }
];

export default courseData;