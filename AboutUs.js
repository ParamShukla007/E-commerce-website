import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
    const sectionStyle = {
        backgroundColor: '#2c3e50', // Dark blue background color
        borderRadius: '10px',
        padding: '20px',
        color: '#fff', // White text color
        letterSpacing: '3px',
    };

    const tableContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
        marginBottom: '30px',
    };

    return (
        <div style={{ backgroundColor: '#1f2c39', minHeight: '100vh' }}>
            <Navbar />
            <main className="about-us-container" style={{ maxWidth: '90%', margin: '0 auto', padding: '20px' }}>
            <section id="about" className="section-style-head" style={{ marginBottom: '30px', fontSize: '20px', color: '#fff' }}>
    <div>
        <h1 style={{ marginBottom: '40px', width: '100%', textAlign: 'center', fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif', letterSpacing: '4px', color: '#e74c3c', fontSize: '2.5em' }}>About Us</h1>
        <p>Welcome to <strong style={{ color: '#f39c12' }}>GameForge</strong>, where the realm of gaming converges with the gateway to endless adventures. Immerse yourself in a world where pixels dance with imagination, and every click leads to an unforgettable journey. Established with a passion for gaming, <strong style={{ color: '#f39c12' }}>GameForge</strong> stands as a beacon for gamers worldwide, offering a curated collection of digital delights and a haven for gaming enthusiasts.</p>
    </div>
</section>

                <div className="table-container" style={tableContainerStyle}>
                    <section id="our-story" className="section-style" style={sectionStyle}>
                        <div className="os">
                            <h2 style={{ color: '#3498db', fontSize: '1.8em', marginBottom: '15px' }}>Our Story</h2>
                            <p>At <strong style={{ color: '#f39c12' }}>GameForge</strong>, our story is woven from the threads of dedication, innovation, and a deep-seated love for gaming. It began with a vision to create a platform where gamers could unite, explore, and indulge in their shared passion. Fuelled by this vision, our journey commenced, marked by milestones of growth, challenges conquered, and friendships forged in the fires of digital battlegrounds.</p>
                        </div>
                    </section>
                    <section id="our-mission" className="section-style" style={sectionStyle}>
                        <div className="os">
                            <h2 style={{ color: '#3498db', fontSize: '1.8em', marginBottom: '15px' }}>Our Mission</h2>
                            <p>Our mission at <strong style={{ color: '#f39c12' }}>GameForge</strong> is simple yet profound: to be the ultimate destination for gamers seeking unparalleled experiences. We strive to empower gamers by providing access to a diverse array of titles, from timeless classics to cutting-edge releases. Our commitment extends beyond mere transactions; it encompasses a dedication to fostering a vibrant gaming community where every player feels valued and supported.</p>
                        </div>
                    </section>
                </div>
                <div className="table-container" style={tableContainerStyle}>
                    <section id="what-sets-us-apart" className="section-style" style={sectionStyle}>
                        <div className="os">
                            <h2 style={{ color: '#3498db', fontSize: '1.8em', marginBottom: '15px' }}>What Sets Us Apart</h2>
                            <p>At <strong style={{ color: '#f39c12' }}>GameForge</strong>, we pride ourselves on offering more than just games; we offer an immersive experience tailored to the discerning gamer. Our platform boasts a user-friendly interface designed for seamless navigation, ensuring that every visit is a delight. With a meticulously curated selection of titles spanning various genres and platforms, we cater to the diverse tastes of our global audience.</p>
                        </div>
                    </section>
                    <section id="our-promise" className="section-style" style={sectionStyle}>
                        <div className="os">
                            <h2 style={{ color: '#3498db', fontSize: '1.8em', marginBottom: '15px' }}>Our Promise</h2>
                            <p>When you choose <strong style={{ color: '#f39c12' }}>GameForge</strong>, you're not just purchasing a game; you're embarking on an odyssey of entertainment and discovery. We are committed to delivering excellence at every turn, from the quality of our products to the reliability of our service. Your satisfaction is our priority, and we go above and beyond to ensure that every interaction with <strong style={{ color: '#f39c12' }}>GameForge</strong> exceeds your expectations.</p>
                        </div>
                    </section>
                </div>

                <div className="table-container" style={tableContainerStyle}>
                    <section id="join-our-community" className="section-style" style={sectionStyle}>
                        <div className="os">
                            <h2 style={{ color: '#3498db', fontSize: '1.8em', marginBottom: '15px' }}>Join Our Community</h2>
                            <p>Join us on our quest to celebrate the artistry, innovation, and camaraderie that define the world of gaming. Connect with fellow gamers, share your stories, and embark on epic adventures together. Whether you're a seasoned veteran or a newcomer to the realm, there's a place for you in our growing community.</p>
                        </div>
                    </section>
                    <section id="contact-us" className="section-style" style={sectionStyle}>
                        <div className="os">
                            <h2 style={{ color: '#3498db', fontSize: '1.8em', marginBottom: '15px' }}>Contact Us</h2>
                            <p>Have questions, feedback, or simply want to say hello? We're here to listen. Reach out to us via email, phone, or social media, and our dedicated team will be delighted to assist you.</p>
                        </div>
                    </section>
                </div>

                <section id="developers" className="section-style" style={sectionStyle}>
                    <div>
                        <h2 style={{ color: '#fff', letterSpacing: '3px', justifyContent: 'space-evenly' }}>Meet the Team</h2>
                        <p style={{ color: '#ccc' }}>Our platform was crafted with passion and expertise by a team of dedicated developers:</p>
                        <ul style={{ listStyleType: 'none', padding: '0' }}>
                            <li style={{ marginBottom: '10px', fontSize: '1.2em', letterSpacing: '2px' }}>Priyanka Limbad</li>
                            <li style={{ marginBottom: '10px', fontSize: '1.2em', letterSpacing: '2px' }}>Param Shukla</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;

