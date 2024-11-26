export default function Map() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29126.37326917684!2d92.26000771562499!3d24.684477140510835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb6c84c8b%3A0x4f84d50c5a2f41d8!2sSon%20Beel!5e0!3m2!1sen!2sin!4v1709656789012!5m2!1sen!2sin&markers=color:red%7Clabel:S%7C24.6845,92.2745"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Son Beel Location"
      ></iframe>
    </div>
  );
}