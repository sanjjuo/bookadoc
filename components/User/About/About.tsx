import React from 'react'

const About = () => {
  return (
     <div className="appWidth space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-app-mainText">
          🩺 About Us – Your Trusted Healthcare Partner
        </h1>
        <p className="text-app-subText">
          Welcome to <strong>BookADoc</strong>, your modern solution for
          managing doctor appointments with ease, efficiency, and confidence. We
          are a digital healthcare platform built to bridge the gap between
          patients and healthcare professionals — ensuring care is just a click
          away.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-4xl font-bold text-app-mainText">🌟 Our Mission</h4>
        <p className="text-app-subText">
          At BookADoc, our mission is to simplify access to healthcare for
          everyone. We aim to eliminate long waiting lines, confusing
          appointment systems, and limited clinic hours by offering a
          streamlined platform where users can find doctors, schedule visits,
          receive reminders, and manage their medical journey — all from one
          app.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-4xl font-bold text-app-mainText">🧠 What We Do</h4>
        <p className="text-app-subText">
          BookADoc is more than just an appointment scheduler. We offer:
        </p>
        <ul className="list-disc space-y-4 my-5 text-app-subText pl-6">
          <li>
            <strong>Doctor Discovery:</strong> Find verified doctors across
            specialties, complete with ratings, profiles, and consultation
            options.
          </li>
          <li>
            <strong>Smart Scheduling:</strong> Book appointments in real-time
            based on doctor availability.
          </li>
          <li>
            <strong>Reminders & Alerts:</strong> Get timely notifications for
            upcoming appointments or required follow-ups.
          </li>
          <li>
            <strong>Secure Medical Records:</strong> Store and access your
            appointment history securely.
          </li>
        </ul>
        <p className="text-app-subText">
          Whether it’s a general physician, a pediatrician, a dermatologist, or
          a mental health expert — BookADoc connects you to the right
          professional, at the right time.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-4xl font-bold text-app-mainText">
          🛡️ Why Choose BookADoc?
        </h4>
        <ul className="list-disc space-y-4 my-5 text-app-subText pl-6">
          <li>
            <strong>Ease of Use:</strong> A clean, intuitive interface that
            makes booking a doctor as simple as booking a cab.
          </li>
          <li>
            <strong>Verified Professionals:</strong> Every doctor on our
            platform is verified, experienced, and trusted.
          </li>
          <li>
            <strong>Time-Saving:</strong> Say goodbye to long queues and
            last-minute cancellations.
          </li>
          <li>
            <strong>24/7 Access:</strong> Access your healthcare network
            anytime, from anywhere.
          </li>
          <li>
            <strong>Data Security:</strong> Your privacy is our top priority —
            all personal data is encrypted and secure.
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="text-4xl font-bold text-app-mainText">🧩 Who We Help</h4>
        <p className="text-app-subText">
          Whether you're a tech-savvy patient or a traditional healthcare
          provider, our platform adapts to your needs.
        </p>
        <ul className="list-disc space-y-4 my-5 text-app-subText pl-6">
          <li>
            <strong>Patients:</strong> Easily find and book appointments without
            endless phone calls or waiting lines.
          </li>
          <li>
            <strong>Doctors & Clinics:</strong> Manage schedules, availability,
            and patient data in one centralized system.
          </li>
          <li>
            <strong>Hospitals & Admins:</strong> Improve operational efficiency,
            reduce no-shows, and offer better service.
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="text-4xl font-bold text-app-mainText">💡 Our Vision</h4>
        <p className="text-app-subText">
          We envision a world where healthcare is seamlessly accessible,
          digitally connected, and built around human needs. With BookADoc,
          we're shaping a future where no one is left waiting for care, and
          every patient gets timely support and attention.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-4xl font-bold text-app-mainText">
          💬 Get in Touch
        </h4>
        <p className="text-app-subText">
          We're here to support you. Whether you need help using the app, want
          to share feedback, or are a healthcare provider interested in
          collaborating — we’re just a message away.
        </p>
        <ul className="list-disc space-y-4 my-5 text-app-subText pl-6">
          <li>
            📩 Email: <strong>support@bookadoc.com</strong>
          </li>
          <li>
            🌐 Website: <strong>www.bookadoc.com</strong>
          </li>
          <li>
            📍 Location: <strong>Dubai, UAE</strong>
          </li>
        </ul>
      </div>

      <div className="text-center pt-10 border-t border-app-border">
        <p className="text-lg text-app-subText">
          🚀 Join thousands who trust BookADoc — your health, one tap away.
        </p>
      </div>
    </div>
  )
}

export default About
