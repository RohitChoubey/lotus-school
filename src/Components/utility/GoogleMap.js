import React from "react";

const GoogleMap = () => {
  return (
    <div style={{ width: "100%", height: "450px", border: "none", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2550196079314!2d77.29205647615188!3d28.411560894079752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd00532d2c09%3A0xe64053892790b730!2sLotus%20Gyan%20Ganga%20School!5e0!3m2!1sen!2sin!4v1739260444698!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 , marginLeft: 50 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lotus Gyan Ganga School Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
